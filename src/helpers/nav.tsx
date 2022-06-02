
import {NavInterface, SidebarInterface} from 'helpers/interfaces'

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


export default Nav;






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








