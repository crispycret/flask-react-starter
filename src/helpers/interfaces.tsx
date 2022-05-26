import {AxiosPromise} from 'axios'



export interface PropsInterface {
    nav: NavInterface,
    style: StyleInterface
    auth: AuthInterface,
    user: UserInterface,
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



export interface StyleInterface {
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
    user: object,
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



export interface UserInterface {
    users: object,
    fetchAllUsers: () => Promise<any>,
}



