import {useState} from 'react'
import axios, {AxiosPromise} from 'axios'

import api from 'helpers/api'
import User from 'helpers/user'

import {UsersInterface, UserModel} from 'helpers/interfaces'


export const Users = () => {

    const [users, setUsers] = useState(new Array<object>());
    
    const [selectedUser, setSelectedUser] = useState(User());


    const fetchAllUsers = async () => {
        let response = await api.request('GET', '/users')
        .catch(error => {
            return error
        })
        setUsers(response.data.users)
        console.log(response.data.users)
        return response
    }

    
    const fetchUser = async (username: string) => {

        let response = await selectedUser.fetch(username)
        .catch(error => {
            console.log(error)
            return error
        })
        return response
    }

    return {
        users,
        setUsers,
        selectedUser,
        setSelectedUser,
        fetchUser,
        fetchAllUsers,
    } as UsersInterface;
}

export default Users;






