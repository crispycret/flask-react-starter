import {AxiosPromise} from 'axios'




export interface PropsInterface {
    nav: NavInterface,
    style: StylesInterface
    auth: AuthInterface,
    users: UsersInterface,
    errors: ErrorsInterface
}

export interface ErrorsInterface {
    message: string,
    has: () => boolean
}


export interface NavInterface {
    sidebar: SidebarInterface,
    history: any,
    redirect: (path:string) => void
}


export interface SidebarInterface {
    isEnabled: boolean,
    sidebarId: string,
    enabledClassName: string,
    enable: () => void,
    disable: () => void,
    toggle: () => void
}



export interface StylesInterface {
    darkMode: DarkModeInterface,
    toggleClassById: (id:string, className:string) => void 
}


export interface DarkModeInterface {
    isEnabled: boolean,
    elements: Array<string[]>,
    toggle: () => void,
    enable: () => void,
    disable: () => void
}




export interface AuthInterface {
    token: TokenInterface,
    user: UserInterface,
    request: (
        method: string, 
        path: string, 
        headers?: object,
        data?: object
    ) => AxiosPromise<any>,
    register: (
        email: string, username: string, password: string,
        successCallback?: (response: any) => void,
        errorCallback?: (error: any) => void
    ) => AxiosPromise<any> | null,
    login: (
        email:string, password:string,
        successCallback?: (response: any) => void,
        errorCallback?: (error: any) => void,
    ) => AxiosPromise<any> | null,
    logout: (
        successCallback?: (response: any) => void,
        errorCallback?: (error: any) => void
    ) => AxiosPromise<any> | null,
    validate: () => AxiosPromise<any> | null,
}


export interface TokenInterface {
    get: () => string,
    set: (token: string) => void,
    has: () => boolean,
    save: (token: string) => void,
    remove: () => void,
    valid: boolean,
    setValid: (value: boolean) => void,
}





export interface UsersInterface {
    users: Array<UserInterface>,
    setUsers: (users: Array<object>) => void,
    selectedUser: UserInterface,
    fetchAllUsers: () => AxiosPromise<any> | null
}





export interface UserInterface {
    set: (user: any) => void
    fetch: (username: string) => AxiosPromise<any>
    username: string, 
    setUsername: (value: string) => void, 
    email: string, 
    setEmail: (value: string) => void,
    profile: UserProfileInterface,
    setProfile: (profile: UserProfileInterface) => void,
}


export interface UserProfileInterface {
    set: (data: any) => void,
    fetch: (username: string) => AxiosPromise<any>,
    bio: string, 
    setBio: (value: string) => void,
    followers: Array<object>,
    setFollowers: (value: object) => void,
    following: Array<object>, 
    setFollowing: (value: object) => void,

}






