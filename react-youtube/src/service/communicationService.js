import YTsearch from "youtube-search";
import axios from "axios";

class CommunicationService {
    youtubeSearch(query, resultsHandler) {
        var opts = {
            maxResults: 7,
            key: 'AIzaSyDjZekP2PH4za-zNIpDoFtWqdCXGyyjL7M',
            type: "video"

        };

        YTsearch(query, opts, function (err, results) {
            if (err) return console.log(err);
            console.log(results);
            resultsHandler(results);
        });
    }

    getVideoRequest(id, resultHandler, errorHandler) {
        const requestUrl = "https://www.googleapis.com/youtube/v3/videos";
        axios.get(requestUrl, {
            params: {
                "id": id,
                "key": 'AIzaSyDjZekP2PH4za-zNIpDoFtWqdCXGyyjL7M',
                "part": "snippet, contentDetails",
                "type": "video"
            }
        })
            .then(result => {
                resultHandler(result);
            })
            .catch((error) => errorHandler(error));
    }
}

export const commService = new CommunicationService();