
import {StylesInterface, DarkModeInterface} from 'helpers/interfaces'

export const Styles = () => {
    var darkMode = DarkMode()
    
    const toggleClassById = (id: string, className: string) => {
        var e = document.getElementById(id)
        if (e === null) return;
        e.classList.toggle(className)
    }


    return {
        darkMode,
        toggleClassById
    } as StylesInterface
}

export default Styles;



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



















