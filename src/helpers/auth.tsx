

import axios, {AxiosPromise} from 'axios';
import { useState } from 'react'

import {AuthInterface, TokenInterface} from 'helpers/interfaces';
import api from 'helpers/api'






export const Auth = () => {

    // Token manager to get, set, remove, check, validate access token
    const token = Token()

    const [user, setUser] = useState({})


    /*
        Make a request to the backend server while backing the access token in the request.
        If the response returns an invalid or missing token, set token to '' and isValid to false. 
    */
    function request(method: string, path:string, headers={}, data={}) {

        // Add the token to the headers
        const _headers = {
            ...headers, 'x-access-token': token.get(), 
        }
        
        api.request(method, path, headers=_headers, data=data)
        .then(response => {
            if (response.status === 401) {
                token.set('')
                token.setValid(false)
            }
            return response
        }).catch(error => {
            return error
        })

        return api.request(method, path, headers=_headers, data=data) as AxiosPromise<any>
    }



    // Send back-end request to destroy user's access token. 
    // On Success remove token fron front-end local storage 
    function login(email: string, password: string, 
        successCallback = (response: any) => {}, 
        errorCallback = (error:any) => {}
    ) {

        var encoded_value = window.btoa(email+':'+password)

        const headers = {
            'Authorization': 'Basic ' + encoded_value
        }

        api.request('POST', '/login', headers)
        .then((response) => {
            token.save(response.data.token)
            setUser(response.data.data.user)
            successCallback(response)
        })
        .catch((error) => {
            errorCallback(error);
        });
    }



    // Send back-end request to destroy user's access token. 
    // On Success remove token fron front-end local storage 
    function logout(
        successCallback= (response: any) => {}, 
        errorCallback = (error:any) => {}
    ): any {

        if (!token.has()) {
            token.remove()
            return
        };

        request('POST', '/logout')
        .then((response: any) => {
            token.remove()
            successCallback(response)

        }).catch((error: any) => {
            token.remove()
            errorCallback(error);
        })
    }


    // Send back-end request to register a new user.
    function register(
        email:string, username:string, password:string,
        successCallback= (response: any) => {}, errorCallback = (error:any) => {}
    ): any {

        const data = {
            email: email,
            username: username,
            password: password
        }

        request('POST', '/register', {}, data)
        .then((response: any) => {
            successCallback(response)
        }).catch((error: any) => {
            errorCallback(error);
        })
    }


    /*
    Validate the token
    */
    function validate () {
        if (!token.has()) {
            token.remove()
            return
        }

        request('POST', '/token/validate')
        .then((response) => {
            token.save(response.data.token)
            token.setValid(response.data.data.isValid)
            return response
        }).catch((error) => {
            // set auth.status to 401 and set auth.message to response message
            if (error.response.status === 401) {
                token.remove()
            }
            return error
        })
    }



    return {
        token,
        request,
        login,
        logout,
        register,
        validate,
    } as AuthInterface;
}


export default Auth;













// A controller to get, set, save, remove, etc the users authentication token.
export const Token = () => {

    function _get() {
        const token = localStorage.getItem('token')
        return token && token
    }

    const [value, set] = useState(_get()) 
    const [valid, setValid] = useState(false) 

    function get() {
        return has() && value !== null ? value : ''
    }

    function has() {
        return (value !== null && value !== "" && value !== undefined);
    }

    function save(token: string) {
        localStorage.setItem('token', token)    
        set(token)
    }

    function remove() {
        localStorage.removeItem('token')
        set('')
        setValid(false)
    }


    return {
        get,
        set,
        has,
        save,
        remove,
        valid,
        setValid,
    } as TokenInterface;
}


