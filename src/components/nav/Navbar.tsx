import {useState, useEffect} from 'react';

import {PropsInterface} from 'helpers/interfaces';

import 'assets/css/navbar.css'

import Sidebar from 'components/nav/Sidebar';


export const Navbar = (props: PropsInterface) => {
    
    const [openSidebar, setOpenSidebar] = useState(false);


    // props.style.darkMode.elements.push(['sidebar', 'sidenav-open']);
    useEffect(() => {
        props.style.darkMode.elements.push(['topbar', 'topbar-dark']);
    }, [])


    // Toggle the displaging of the sidebar.
    const toggleSidebar = () => {
        
        setOpenSidebar(!openSidebar)
        props.style.toggleClassById('sidebar', 'sidenav-open')

        // Toggle main padding to make room for sidebar
        const main = document.getElementById('main')
        if (main == null) return 
        props.style.toggleClassById('main', 'main-sidebar')
    }

    // Toggle light and dark mode.
    const toggleDarkMode = () => {
        props.style.darkMode.toggle()
    }


    // View logic
    // If the sidebar is open show the x icon else show the bars icon.
    
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


            <section className='topbar-right'>
                <>
                    <div><i className="fa-solid fa-circle-half-stroke fa-lg" onClick={toggleDarkMode}/></div>
                </>

                <div>isValid: {JSON.stringify(props.auth.token.valid)}</div>

                {props.auth.token.valid ?
                    <>
                        <div onClick={() => props.nav.redirect('/logout')}>
                            <button type="button" className="btn btn-secondary btn-md">logout</button>
                        </div>
                    </>
                    :
                    <>
                        <div onClick={() => props.nav.redirect('/register')}>
                            <button type="button" className="btn btn-secondary btn-md">register</button>
                        </div>                    
                        <div onClick={() => props.nav.redirect('/login')}>
                            <button type="button" className="btn btn-secondary btn-md">login</button>
                        </div>
                    </>
                }
            </section>
        </div>
        
        { props.errors.has() && 
            <div id='topbar-errors' className=''>
                <span>{props.errors.message}</span>
            </div>
        }

        <Sidebar {...props} />

        </>
    );
}



export default Navbar;

