import { API } from "../model"

export const data = async (param: any)  => {
    const { data } = await API(param);
    return {
        props: {
            data
        }
    }
}
