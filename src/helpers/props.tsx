import {
    PropsInterface, NavbarPropsInterface, SidebarPropsInterface,
    StylePropsInterface, DarkModePropsInterface,
    AuthenticationPropsInterface, UserPropsInterface, 
} from 'helpers/PropInterfaces';



export const Props = () => {

    return {
        auth: AuthenticationProps(),
        user: UserProps(),
        nav: NavbarProps(),
        style: StyleProps(),
    } as PropsInterface
}



export const  NavbarProps = () => {
    const sidebar = SidebarProps()
    return { sidebar } as NavbarPropsInterface
};

export const SidebarProps = () => {
    
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
    } as SidebarPropsInterface
}



export const StyleProps = () => {
    var darkMode = DarkMode()
    
    const toggleClassById = (id: string, className: string) => {
        var e = document.getElementById(id)
        if (e === null) return;
        e.classList.toggle(className)
    }


    return {
        darkMode,
        toggleClassById
    } as StylePropsInterface
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
    } as DarkModePropsInterface
}






export const AuthenticationProps = () => {
    var token = null

    const login = () => {

    }

    const logout = () => {

    }

    const register = () => {

    }

    return {
        token,
        register,
        login,
        logout
    } as AuthenticationPropsInterface
} 





export const UserProps = () => {

    return {} as UserPropsInterface
}