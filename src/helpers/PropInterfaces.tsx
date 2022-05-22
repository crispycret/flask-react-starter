



export interface PropsInterface {
    nav: NavInterface,
    style: StyleInterface
    auth: AuthInterface,
    user: UserInterface,
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
    register: (
        email: string, username: string, password: string,
        successCallback?: (response: any) => void,
        errorCallback?: (error: any) => void
    ) => void,
    login: (
        email:string, password:string,
        successCallback?: (response: any) => void,
        errorCallback?: (error: any) => void,
    ) => void,
    logout: (
        successCallback?: (response: any) => void,
        errorCallback?: (error: any) => void
    ) => void
}

export interface TokenInterface {
    value: string|null,
    set: (token: string) => void,
    save: () => void,
    remove: () => void,
    has: () => boolean,
    isValid: () => boolean,
}



export interface UserInterface {
    users: object,
    fetchAllUsers: () => Promise<any>,
}



