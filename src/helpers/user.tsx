import {useState} from 'react'

import api from 'helpers/api'
import {UserInterface, UserProfileInterface} from 'helpers/interfaces'
import { AxiosPromise } from 'axios'

export const User = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    const profile = UserProfile()

    function set(user: any) {
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

    function set(data: any) {
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
        set(response.data)

        // If the users profile is not yet created, create it.
        if (response.data.profile === null) {
            response = await api.request('POST', `/users/${username}/profile/create`)
            .catch(error =>{
                console.log(error)
                return error
            })

            // After creating the profile, make another request to get profile information.
            response = await api.request('GET', `/users/${username}/profile`)
            .catch(error => {
                console.log(error)
                return error
            })
            set(response.data)
        }

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



export const UserSocialLinks = () => {

    const [twitter, setTwitter] = useState(null)
    const [facebook, setFacebook] = useState(null)
    const [instagram, setInstagram] = useState(null)

    return {
        twitter,
        facebook,
        instagram,
    } as UserSocialLinksInterface
}


export interface UserSocialLinksInterface {
    twitter: string | null,
    facebook: string | null,
    instagram: string | null,
}


