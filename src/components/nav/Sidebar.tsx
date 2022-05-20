import { useRef, useState, useEffect } from 'react';

import {PropsInterface} from 'helpers/PropInterfaces';

import 'assets/css/sidebar.css'

export const Sidebar = (props: PropsInterface) => {

    useEffect(() => {
        props.style.darkMode.elements.push(['sidebar', 'sidenav-dark'])
    })

    return (
        <>
            <div id="sidebar" className="sidenav">
                <a href="/engine">Home</a>
                <a href="/dashboard">Dashboard</a>
                <a href="/user/profile">Profile</a>
                <a href="/user/account">Account</a>
            </div>

            {/* <div id='topbar' ref={menuToggleRef}> */}
                {/* <div className="navbar-brand mt-2 mt-lg-0" > */}
                {/* <i className="fa fa-bars" aria-hidden="true" onClick={toggleNav} /> */}
                {/* <i className="fas fa-sign-out-alt" onClick={() => {props.auth.logout()}} /> */}
                {/* <i className="fa-brands fa-twitter"></i> */}
                {/* </div> */}
            {/* </div> */}
        </> 
    )
}



export default Sidebar;