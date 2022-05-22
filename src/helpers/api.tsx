import axios, {AxiosPromise} from 'axios'
import { PathMatch } from 'react-router-dom'

export const _api = () => {

    var base_url = ''

    const fetchUrl = () => {
        fetch('http://raw.githubusercontent.com/crispycret/flask-starter/main/.HOST')
        .then(response => response.text())
        .then(text => {
            base_url = text
        })
    }
    fetchUrl();


    function request (method: string, path:string, data={}) {
        console.log(base_url + path)
        return axios({
            method,
            url: base_url + path,
            data
        })
    }

    return {
        base_url,
        fetchUrl,
        request,
    } as ApiInterface;
}




export interface ApiInterface {
    base_url: string,
    fetchUrl: () => void,
    request: (method: string, path: string, data?: object) => AxiosPromise<any>
}



export const api = _api();
export default api;