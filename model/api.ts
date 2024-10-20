import axios, { AxiosInstance } from "axios";

const BASEURL = "https://brasilapi.com.br/api/cep/"

const INSTANCE: AxiosInstance = axios.create({
    baseURL: BASEURL,
});

const API = async (params?: string) => {
    
    /**
     * Necessary this approach for correctly render map on screen. 
     * */

    try {
        return await INSTANCE
            .get(`v2/${params}`);
    } catch {
        try {
            return await INSTANCE.get(`v1/${params}`);
        } catch {
            return {
                data: { error: true }
            };
        }
    }
}

export { API } 
