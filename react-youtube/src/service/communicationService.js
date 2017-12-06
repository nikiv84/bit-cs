
import YTsearch from "youtube-search";

class CommunicationService {
    youtubeSearch(query, resultsHandler) {
        var opts = {
            maxResults: 7,
            key: 'AIzaSyDjZekP2PH4za-zNIpDoFtWqdCXGyyjL7M'
        };

        YTsearch(query, opts, function (err, results) {
            if (err) return console.log(err);
            console.log(results);
            resultsHandler(results);
        });
    }
}

export const commService = new CommunicationService();