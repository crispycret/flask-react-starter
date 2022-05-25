import {useEffect} from 'react';


export const Logout = (props: any) => {

    useEffect(() => {
        props.auth.logout();
        props.nav.redirect('/')
    }, [])

    return (
        <>
        </>
    );
}


export default Logout;

