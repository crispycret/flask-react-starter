import {useState, useEffect} from 'react';

import {PropsInterface} from 'helpers/PropInterfaces';

import 'assets/css/navbar.css'

import Sidebar from 'components/nav/Sidebar';


export const Navbar = (props: PropsInterface) => {
    
    const [openSidebar, setOpenSidebar] = useState(false);


    // props.style.darkMode.elements.push(['sidebar', 'sidenav-open']);
    useEffect(() => {
        props.style.darkMode.elements.push(['topbar', 'topbar-dark']);
    })


    const toggleSidebar = () => {
        setOpenSidebar(!openSidebar)
        props.style.toggleClassById('sidebar', 'sidenav-open')
        // Toggle main padding to make room for sidebar
        const main = document.getElementById('main')
        if (main == null) return 
        props.style.toggleClassById('main', 'main-sidebar')
    }

    const toggleDarkMode = () => {
        props.style.darkMode.toggle()
    }


    // View logic
    return (
        <>
        <div id='topbar'>
            <div>
                { openSidebar ?
                    <i className="fa-solid fa-xmark" aria-hidden="true" onClick={toggleSidebar} /> :
                    <i className="fa fa-bars" aria-hidden="true" onClick={toggleSidebar} />
                }
            </div>

            <div onClick={() => props.nav.redirect('/')}>Home</div>
            <div onClick={() => props.nav.redirect('/users')}>Users</div>
            <div onClick={() => props.nav.redirect('/users')}>Engine</div> 


            <section className='topbar-right'>
                <>
                    <div><i className="fa-solid fa-circle-half-stroke fa-lg" onClick={toggleDarkMode}/></div>
                </>

                {/* {props.auth.token.has() && props.auth.token.isValid() &&  */}
                { true && 
                    <>
                        <div><button type="button" className="btn btn-secondary btn-md">register</button></div>                    
                        <div><button type="button" className="btn btn-secondary btn-md">login</button></div>
                    </>
                }
            </section>
        
        </div>

        <Sidebar {...props} />

        </>
    );
}



export default Navbar;

