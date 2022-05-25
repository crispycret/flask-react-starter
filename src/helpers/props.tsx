import {useState} from 'react'
import {
    PropsInterface, NavInterface, SidebarInterface,
    StyleInterface, DarkModeInterface, ErrorsInterface,
} from 'helpers/interfaces';



import Auth from 'helpers/auth'
import Users from 'helpers/users'




export const Props = () => {

    return {
        auth: Auth(),
        user: Users(),
        nav: Nav(),
        style: Style(),
        errors: Errors(),
    } as PropsInterface
}




export const Errors = () => {
    const [message, setMessage] = useState('')
    
    function has (){
        return message !== '' && message !== null && message !== undefined
    }

    return {
        message,
        has,
    } as ErrorsInterface
}



export const  Nav = () => {
    const sidebar = Sidebar()

    
    // Helps manages path traversal in functions
    const history = require("history").createBrowserHistory();

    // Navigate to a new path while tracking history.
    function redirect(path: string) {
        history.push(path);
        let pathUrl = window.location.href;
        window.location.href = path;
    }



    return { sidebar, history, redirect } as NavInterface
};
















export const Sidebar = () => {
    
    var isEnabled = false
    var sidebarId = 'sidebar'; // Have the sidebar set this value on mount or hardcode the sidebar id.S
    var enabledClassName = 'sidebar-dark';

    const toggle = () => {
        if (isEnabled) disable();
        else enable()
    }

    const enable = () => {
        var elem = document.getElementById(sidebarId);
        if (!elem) return
        elem.classList.add(enabledClassName)
        isEnabled = true;
    }

    const disable = () => {
        var elem = document.getElementById(sidebarId);
        if (!elem) return
        elem.classList.remove(enabledClassName)
        isEnabled = false;
    }

    return {
        isEnabled,
        sidebarId,
        enabledClassName,
        enable,
        disable,
        toggle
    } as SidebarInterface
}















export const Style = () => {
    var darkMode = DarkMode()
    
    const toggleClassById = (id: string, className: string) => {
        var e = document.getElementById(id)
        if (e === null) return;
        e.classList.toggle(className)
    }


    return {
        darkMode,
        toggleClassById
    } as StyleInterface
}









export const DarkMode = () => {
    var isEnabled = false;
    var elements = new Array<string[]>();

    const toggle = () => {
        if (isEnabled) disable();
        else enable();
    }


    // Add the corresponding className to the id for each element.
    const enable = () => {
        let id = null;
        let className = null
        let e = null
        for (let idx in elements) {
            id = elements[idx][0]
            className = elements[idx][1]
            e = document.getElementById(id)
            if (e === null) return;
            e.classList.add(className)
          }
          isEnabled=true;
    }

    // remove the corresponding className from the id for each element.
    const disable = () => {
        let id = null;
        let className = null
        let e = null
        for (let idx in elements) {
            id = elements[idx][0]
            className = elements[idx][1]
            e = document.getElementById(id)
            if (e === null) return;
            e.classList.remove(className)
          }
          isEnabled=false;
    }
    

    return {
        isEnabled,
        elements,
        toggle,
        enable,
        disable
    } as DarkModeInterface
}



















