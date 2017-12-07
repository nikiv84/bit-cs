
import axios from "axios";

class DataService {

    getGifRequest(query, resultHandler, errorHandler) {
        const requestUrl = "https://api.giphy.com/v1/gifs/search?api_key=3zM3AemLuW4OnFaFsN3C0rOeD31Qpc2A";
        axios.get(requestUrl, {
            params: {
                "q": query,
                "limit": 400,
                "offset": 0,
                "rating": "G",
                "lang": "en"
            }
        })
            .then(result => {
                resultHandler(result.data);
            })
            .catch((error) => errorHandler(error));
    }

}

export const dataService = new DataService();