import {useState} from 'react'

import api from 'helpers/api'
import {UserInterface, UserModel, UserProfileInterface, UserProfileModel} from 'helpers/interfaces'
import { AxiosPromise } from 'axios'

export const User = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    const profile = UserProfile()

    function set(user: UserModel) {
        setUsername(user.username)
        setEmail(user.email)
        return 
    }

    const fetch = async (username: string) => {
        let response = await api.request(
            'GET', `/users/${username}`
        ).catch(error => {
            console.log(error)
            return error
        })
        set(response.data.user)

        response = await profile.fetch(username)
        .catch(error => {
            console.log(error)
            return error
        })
        return response
    }

    return {
        set,
        fetch,
        username, setUsername, 
        email, setEmail,
        profile,
    } as UserInterface;
}


export default User;



export const UserProfile = (): UserProfileInterface => {
    const [bio, setBio] = useState('')
    const [followers, setFollowers] = useState(Array<object>())
    const [following, setFollowing] = useState(Array<object>())

    function set(data: UserProfileModel) {
        setBio(data.bio)
        setFollowers(data.followers)
        setFollowing(data.following)
    }


    const fetch = async (username: string) => {
        let response = await api.request('GET', `/users/${username}/profile`)
        .catch(error => {
            console.log(error)
            return error
        })

        console.log("Getting")

        // If the users profile is not yet created, create it.
        if (response.data.profile === null) {
            console.log('creating profile')
            response = await api.request('POST', `/users/${username}/profile/create`)
            .catch(error =>{
                console.log(error)
                return error
            })

            console.log("CREATED")
            console.log(response)

            // After creating the profile, make another request to get profile information.
            response = await api.request('GET', `/users/${username}/profile`)
            .catch(error => {
                console.log(error)
                return error
            })

            console.log("Getting")
            console.log(response)
        }

        console.log(response.data)
        set(response.data.profile)
        return response
    }

    return {
        set,
        fetch,
        bio, setBio,
        followers, setFollowers,
        following, setFollowing,
    } as UserProfileInterface

}
