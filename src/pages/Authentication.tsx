import { useRef, useState, RefObject, useEffect } from "react";
import { PropsInterface } from 'helpers/PropInterfaces';

import api from 'helpers/api'






// function to update form fields
function updateFieldValue(event: React.FormEvent<HTMLInputElement>, setValue:any){
    setValue(event.currentTarget.value);
    console.log(event.currentTarget.value)
}





// function to switch between login and register forms.
function swapActiveClasses(
    tabOn: RefObject<HTMLAnchorElement>, 
    panelOn: RefObject<HTMLDivElement>, 
    tabOff: RefObject<HTMLAnchorElement>,
    panelOff: RefObject<HTMLDivElement>
) {
    tabOn.current?.classList.remove("active")
    panelOn.current?.classList.remove("show")
    panelOn.current?.classList.remove("active")

    tabOff.current?.classList.add("active")
    panelOff.current?.classList.add("show")
    panelOff.current?.classList.add("active")
}







// Enumerator for the states avaiable for the page.
// The page can be in either login mode or register mode.
export enum STATES { LOGIN, REGISTER }




// React function that returns the Authentication page.
export const Authentication = (props: PropsInterface) => {




    // Form state variables, can either be logging in or registrating. Use reg to access element quickly.
    const [state, setState] = useState<STATES>(STATES.LOGIN);
    const registrationTab = useRef<HTMLAnchorElement>(null)
    const registrationPanel = useRef<HTMLDivElement>(null)

    const loginTab = useRef<HTMLAnchorElement>(null)
    const loginPanel = useRef<HTMLDivElement>(null)


    // Login and register form fields are shared between login and registration (cant because conlicts value)
    const [loginUsername, setLoginUsername] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginPassword2, setLoginPassword2] = useState("");
    
    // Login and register form fields are shared between login and registration (cant because conlicts value)
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerPassword2, setRegisterPassword2] = useState("");






    // Swtich between login and register
    function switchTab(event: any) {
        if (state === STATES.LOGIN) {
            setState(STATES.REGISTER);
            swapActiveClasses(loginTab, loginPanel, registrationTab, registrationPanel)
        }

        else if (STATES.REGISTER) {
            setState(STATES.LOGIN);
            swapActiveClasses(registrationTab, registrationPanel, loginTab, loginPanel)
        }
    }


    // Clear the form fields.
    function clearLoginForm() {
        setLoginUsername(''); setLoginEmail(''); 
        setLoginPassword(''); setLoginPassword2('')
    }
    
    // Clear the form fields.
    function clearRegisterForm() {
        setRegisterUsername(''); setRegisterEmail('')
        setRegisterPassword(''); setRegisterPassword2('')
    }










    // Redirect to the home page (dashboard when avaiable)
    function handleLoginSuccess(response: any) {
        props.nav.redirect('/');
        console.log('Login SUCCESS')
    }
    
    // Change the UI to inform user of login failure
    function handleLoginFailure(error: any) {
        console.log('Login FAILURE')
    }

    // Request back-end to login user after registration
    function handleRegisterSuccess(response: any) {
        props.auth.login(
            loginEmail, loginPassword, 
            handleLoginSuccess, handleLoginFailure
        );
    }

    // Change the UI to inform user of registration failure
    function handleRegisterFailure(response: any) {}







    // Handle login and registration.
    function handlePOST(event: any){

        event.preventDefault();        

        if (state === STATES.LOGIN) {
            props.auth.login(
                loginEmail, loginPassword,
                handleLoginSuccess, handleLoginFailure
            );
        }
            

        else if (state === STATES.REGISTER) {
            if (registerPassword !== registerPassword) {
                // Inform the user that their passwords do not match.
                return
            } 
            
            // Register the user on the backend. Login the user upon successful registration.
            props.auth.register(
                registerEmail, registerUsername, registerPassword,
                handleRegisterSuccess, handleRegisterFailure
            );         
        }
    }


    


    useEffect(() => {
        // fetchBackendUrl()
        props.style.darkMode.elements.push(['authentication', 'authentication-dark']);
    })





    return (
        <div id="authentication">
            <section className="vh-80 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">

                            {/* Pills navs  */}
                            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" id="tab-login" 
                                    ref={loginTab} onClick={switchTab}
                                    data-mdb-toggle="pill" href="#pills-login" role="tab"
                                    aria-controls="pills-login" aria-selected="true">Login</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="tab-register"
                                    ref={registrationTab} onClick={switchTab}
                                    data-mdb-toggle="pill" href="#pills-register" role="tab"
                                    aria-controls="pills-register" aria-selected="false">Register</a>
                                </li>
                            </ul>
                            {/* Pills navs  */}

                            {/* Pills content  */}
                            <div className="tab-content">


                                <div ref={loginPanel} className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                    <form onSubmit={handlePOST}>
                                        <div className="text-center mb-3">
                                            <p>Sign in with:</p>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-facebook-f"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-google"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-twitter"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-github"></i>
                                            </button>
                                        </div>

                                        <p className="text-center">or:</p>

                                        {/* Email input  */}
                                        <div className="form-outline mb-4">
                                            <input type="email" id="loginName" className="form-control" value={loginEmail} onChange={(event) => updateFieldValue(event, setLoginEmail)} />
                                            <label className="form-label" htmlFor="loginName">Email or username</label>
                                        </div>

                                        {/* Password input  */}
                                        <div className="form-outline mb-4">
                                            <input type="password" id="loginPassword" className="form-control"  value={loginPassword} onChange={(event) => updateFieldValue(event, setLoginPassword)}/>
                                            <label className="form-label" htmlFor="loginPassword">Password</label>
                                        </div>

                                        {/* 2 column grid layout  */}
                                        <div className="row mb-4">
                                        
                                            <div className="col-md-6 d-flex justify-content-center">
                                                <div className="form-check mb-3 mb-md-0">
                                                    <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked onChange={() => {}} />
                                                    <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                                </div>
                                            </div>

                                            <div className="col-md-6 d-flex justify-content-center">
                                                {/* Simple link  */}
                                                <a href="#!">Forgot password?</a>
                                            </div>
                                        {/* Submit button  */}

                                        </div>


                                        {/* Register buttons  */}
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                                            <p>Not a member? <a>Register</a></p>
                                        </div>
                                    </form>
                                </div>


                                <div ref={registrationPanel} className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                                    <form>

                                        <div className="text-center mb-3">
                                            <p>Sign up with:</p>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-facebook-f"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-google"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-twitter"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-github"></i>
                                            </button>
                                        </div>

                                        <p className="text-center">or:</p>

                                        {/* <div className="form-outline mb-4">
                                            <input type="text" id="registerName" className="form-control" />
                                            <label className="form-label" htmlFor="registerName">Name</label>
                                        </div> */}

                                        <div className="form-outline mb-4">
                                            <input type="text" id="registerUsername" className="form-control" value={registerUsername} onChange={(event) => updateFieldValue(event, setRegisterUsername)} />
                                            <label className="form-label" htmlFor="registerUsername">Username</label>
                                        </div>

                                        {/* Email input  */}
                                        <div className="form-outline mb-4">
                                            <input type="email" id="registerEmail" className="form-control" value={registerEmail} onChange={(event) => updateFieldValue(event, setRegisterEmail)} />
                                            <label className="form-label" htmlFor="registerEmail">Email</label>
                                        </div>

                                        {/* Password input  */}
                                        <div className="form-outline mb-4">
                                            <input type="password" id="registerPassword" className="form-control" value={registerPassword} onChange={(event) => updateFieldValue(event, setRegisterPassword)} />
                                            <label className="form-label" htmlFor="registerPassword">Password</label>
                                        </div>

                                        {/* Repeat Password input  */}
                                        <div className="form-outline mb-4">
                                            <input type="password" id="registerRepeatPassword" className="form-control" value={registerPassword2} onChange={(event) => updateFieldValue(event, setRegisterPassword2)} />
                                            <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                                        </div>

                                        {/* Checkbox  */}
                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" 
                                            checked onChange={() => {}}
                                            aria-describedby="registerCheckHelpText" />
                                            <label className="form-check-label" htmlFor="registerCheck">I have read and agree to the terms</label>
                                        </div>

                                        {/* Submit button  */}
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary btn-block mb-3" onClick={handlePOST}>Register</button>
                                        </div>
                                    </form>
                                    </div>


                            </div>
                            {/* Pills content  */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );


}


export default Authentication;



