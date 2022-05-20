



export interface PropsInterface {
    nav: NavbarPropsInterface,
    style: StylePropsInterface
    auth: AuthenticationPropsInterface,
    user: UserPropsInterface,
}


export interface NavbarPropsInterface {
    sidebar: SidebarPropsInterface
    history: any
}


export interface SidebarPropsInterface {
    isEnabled: boolean,
    sidebarId: string,
    enabledClassName: string,
    enable: () => void,
    disable: () => void,
    toggle: () => void
}



export interface StylePropsInterface {
    darkMode: DarkModePropsInterface,
    toggleClassById: (id:string, className:string) => void 

}


export interface DarkModePropsInterface {
    isEnabled: boolean,
    elements: Array<string[]>,
    toggle: () => void,
    enable: () => void,
    disable: () => void
}




export interface AuthenticationPropsInterface {
    token: string|null,
    register: () => void,
    login: () => void,
    logout: () => void
}


export interface UserPropsInterface {

}



