import axios, { AxiosInstance } from "axios";

const BASEURL = "https://brasilapi.com.br/api/cep/"

const INSTANCE: AxiosInstance = axios.create({
    baseURL: BASEURL,
});

const API = (params?: any) => {
    return INSTANCE
        .get(`v2/${params}`)
        .catch((): unknown => {
            return INSTANCE.get(`v1/${params}`).catch(() => {
                return {
                    data: { error: true }
                }
            })
        })
}

export { API } 
