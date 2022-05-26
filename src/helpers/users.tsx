import axios from 'axios'

import {UserInterface} from 'helpers/interfaces'

import api from 'helpers/api'


export const Users = () => {

    var users = new Array<object>();

    function fetchAllUsers () {
        return axios({
            method: 'GET',
            url: 'http://127.0.0.1:5000/users',
            data: {}
        }).then(response => {
            users = response.data.users
            return users
        }).catch(error => {
            console.log(error)
            return error
        })
    }


    // function fetchAllUsers () {
    //     api.request(
    //         'GET', '/users', {}
    //     ).then(response => {
    //         console.log(response.data)
    //         users = response.data
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }

    return {
        users,
        fetchAllUsers,
    };
}


export default Users;