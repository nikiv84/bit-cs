import { commService } from "./communicationService";
import VideoDTO from "../dto/videoDTO";

class DataService {

    getSearchResults(searchTerm, resultHandler){
        let videoList = [];
        commService.youtubeSearch(searchTerm, (result) => {

            result.forEach(vid => {
                const id = vid.id;
                const title = vid.title;
                const description = vid.description;
                const thumb = vid.thumbnails.high.url;

                let video = new VideoDTO(id, title, description, thumb);

                videoList.push(video);
                
            });

            resultHandler(videoList);
        })
    }

    getSingleVideo(id, resultHandler, errorHandler){
        commService.getVideoRequest(id, (result) => {
           

            const vidData = result.data.items[0].snippet;

            const id = result.data.items[0].id;
            const title = vidData.title;
            const description = vidData.description;
            const thumb = vidData.thumbnails.high.url;

            let video = new VideoDTO(id, title, description, thumb);            

            resultHandler(video);
        }, (error) => {
            console.log(error);
        })
    }

}

export const dataService = new DataService();
