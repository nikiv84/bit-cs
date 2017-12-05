import axios from "axios";
import { BASE_URL, API_KEY } from "../constants";

class CommunicationService {
    getRequest(cityId, getDataHandler, errorHandler) {
        const requestUrl = `${BASE_URL}${cityId}&APPID=${API_KEY}`;
        axios({
            method: "GET",
            url: requestUrl
        })
            .then(result => {
                getDataHandler(result);
            })
            .catch((error) => errorHandler(error));
    }
}

export const commService = new CommunicationService();