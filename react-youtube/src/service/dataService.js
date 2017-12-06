import { commService } from "./communicationService";
import VideoDTO from "../dto/videoDTO";

class DataService {

    getSearchResults(searchTerm, resultHandler){
        let videoList = [];
        commService.youtubeSearch(searchTerm, (result) => {

            result.forEach(vid => {
                const id = vid.id;
                const link = vid.link;
                const title = vid.title;
                const description = vid.description;
                const thumb = vid.thumbnails.high.url;

                let video = new VideoDTO(id, link, title, description, thumb);

                videoList.push(video);
                
            });

            resultHandler(videoList);
        })
    }

}

export const dataService = new DataService();
