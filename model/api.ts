import axios from "axios";

const BASEURL = "https://brasilapi.com.br/api/cep/v2/"

const INSTANCE: any = axios.create({
    baseURL: BASEURL,
    timeout: 1000,
});

const API = (params?: string): any => {
    try{
        return INSTANCE.get(params);
    } catch (e) {
        console.warn(e)
    }
}

export { API } 
