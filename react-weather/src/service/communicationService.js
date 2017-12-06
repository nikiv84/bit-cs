import axios from "axios";
import { BASE_URL, API_KEY } from "../constants";

class CommunicationService {
    getRequest(query, getDataHandler, errorHandler) {
        const requestUrl = `${BASE_URL}`;
        axios.get(requestUrl, {
            params: {
                "q": query,
                "APPID": API_KEY,
                "units": "metric"
            }
        })
            .then(result => {
                getDataHandler(result);
            })
            .catch((error) => errorHandler(error));
    }
}

export const commService = new CommunicationService();