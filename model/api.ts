import axios, { AxiosInstance } from "axios";

const BASEURL = "https://brasilapi.com.br/api/cep/"

const INSTANCE: AxiosInstance = axios.create({
    baseURL: BASEURL,
});

const API = (params?: any) => {
    return INSTANCE
        .get(`v2/${params}`)
        .catch((e): any => {
            if (e.response.status === 500 ) {
                return INSTANCE.get(`v1/${params}`)
            } else {
                return {
                    data: { 
                        error: true
                    }
                }
            }
        })
}

export { API } 
