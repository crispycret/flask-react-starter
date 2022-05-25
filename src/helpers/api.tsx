import axios, {AxiosPromise} from 'axios'



// export const _api = () => {
export const api = () => {

    var base_url = 'http://localhost:5000'


    function request (method: string, path:string, headers={}, data={}) {
        const config = {
            method: method,
            url: base_url + path,
            headers: headers,
            data: data
        }
        return axios(config) as AxiosPromise<any>
    }


    return {
        base_url,
        request,
    } as ApiInterface;
}




export interface ApiInterface {
    base_url: string,
    request: (method: string, path: string, headers?: object, data?: object) => AxiosPromise<any>
}



// export const api = _api();
export default api();










