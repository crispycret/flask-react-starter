

import axios from 'axios';
import { useState } from 'react'

import {AuthInterface, TokenInterface} from 'helpers/PropInterfaces';
import api from 'helpers/api'


export const Auth = () => {

  // Token manager to get, set, remove, check, validate access token
  const token = Token()

// Send back-end request to destroy user's access token. 
  // On Success remove token fron front-end local storage 
  function login(email: string, password: string, 
        successCallback = (response: any) => {}, 
        errorCallback = (error:any) => {}
    ) {
        axios({
            method: "POST",
            // url:"/login",
            url: api.base_url + "/login",
            data:{
                email: email,
                password: password
        }
            }).then((response) => {
            token.set(response.data.access_token)
            successCallback(response)

        }).catch((error: any) => {
            errorCallback(error);
        })
    }

    // Send back-end request to destroy user's access token. 
    // On Success remove token fron front-end local storage 
    function logout(
        successCallback= (response: any) => {}, errorCallback = (error:any) => {}
    ): any {
        axios({
            method: "POST",
            // url:"/logout",
            url: api.base_url + "/logout",

        }).then((response: any) => {
            token.remove()
            successCallback(response)

        }).catch((error: any) => {
            errorCallback(error);
        })
    }


    // Send back-end request to register a new user.
    function register(
    email:string, username:string, password:string,
        successCallback= (response: any) => {}, errorCallback = (error:any) => {}
    ): any {
        axios({
            method: "POST",
            url:"/register",
            data:{
            email: email,
            username: username,
            password: password
        }
        }).then((response: any) => {
            successCallback(response)
        }).catch((error: any) => {
            errorCallback(error);
        })
    }


    return {
        token,
        login,
        logout,
        register
    } as AuthInterface;
}


export default Auth;






// A controller to get, set, save, remove, etc the users authentication token.
export const Token = () => {

    function get() {
        const userToken = localStorage.getItem('token')
        return userToken && userToken
    }

    const [value, set] = useState(get()) 

    function save(userToken: string) {
        localStorage.setItem('token', JSON.stringify(userToken))
        set(userToken)
    }

    function remove() {
        localStorage.removeItem('token')
        set(null)
    }


    function has() {
        return (value !== null && value !== "" && value !== undefined);
    }

    // ask the backend server to validate the token.
    function isValid() {
        return true;
    }

    return {
        value,
        set,
        has,
        remove,
        isValid
    } as TokenInterface;
}


