import { useState } from "react"

export interface Props {
    auth: AuthenticationProps,
    user: UserProps,
    nav: NavbarProps
    style: StyleProps,
}



export interface NavbarProps {
    sidebar: SidebarProps

};

export interface SidebarProps {
    open: boolean,
    setOpen(value: boolean): void
}

export interface StyleProps {
    darkMode: DarkModeProps,
}

// elements -> list of elementId, darkModeClassName paris
export interface DarkModeProps {
    isOn: boolean,
    elements: Array<string[]>,
    toggleDarkMode: (id: string, className:string) => void
    toggleDarkModeAll: (elements:Array<string[]>) => void
}


export interface AuthenticationProps {
    token: null,
    login: null,
    logout: null,
    pageState: string
} 


export interface UserProps {
    currentUser: null,
    targetUser: null

}



export default Props