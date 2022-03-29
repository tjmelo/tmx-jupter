import axios from "axios";
import { Console } from "console";

const BASEURL = "https://brasilapi.com.br/api/cep/v2/"

const INSTANCE: any = axios.create({
    baseURL: BASEURL,
});

const API = (params?: string): any => {
    return INSTANCE
    .get(params)
    .catch((e: Object) => {
        return {
                data: { error: 'CEP not found!' }
            }
    })
}

export { API } 
