import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

import {PropsInterface} from 'helpers/interfaces';

import {UserProfile1} from 'pages/UserProfile1';


export const UserProfile = (props: PropsInterface) => {

    // CURRENT TO DO.
    // AFTER IMPLEMENT FOLLOW AND BLOCKING AND UPDATE THIS PAGE.
    // Finally implement a direct messaging feature.
    // This should be all for a complete version 1.
    // version 2 should include all the same features but be redesigned for simplicity and readablity.

    // const [username, setUsername] = useState('')

    const params = useParams()
    
    const [user, setUser] = useState({}) 
    const [canEdit, setCanEdit] = useState(false)

    
    // async function fetchUser() {
    async function fetchUser() {
        if (params.username === undefined){ 
            // Display to the user that the username is returned no user
            console.log('No username')
            return
        }

        let res = await props.users.selectedUser.fetch(params.username)
        let _user = res?.data.user
        setUser(_user)

        // Check if the current user is the same as the selected user
        console.log(params.username)
        if (props.auth.user.username === params.username)
        {
            // Allow fields to be changed
            setCanEdit(true)
        }
        else {
            setCanEdit(false)
            // Draw Display UserProfile
        }


    }


    useEffect(() => {

        fetchUser()
       
    }, [])


    return (
        <>
        <UserProfile1 {...props } />
        <div id='user-profile'>

            <div id='user-profile-tag'>
                <p>TESTING</p>
                {/* <p>{JSON.stringify(username)}</p> */}
                <p>{JSON.stringify(props)}</p>
            </div>

            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <i className="fas fa-users"/>
                        {/* <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/> */}
                            <span className="font-weight-bold">{params.username ? params.username : 'null'}</span><span className="text-black-50">{props.users.selectedUser.email}</span><span> </span>
                        </div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" value="" onChange={(event) => {}} /></div>
                                <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" value="" onChange={(event) => {}} placeholder="surname" /></div>
                            </div>
                            <div className="row mt-3">
                                {/* <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number" value="" onChange={(event) => {}} /></div> */}
                                {/* <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" placeholder="enter address line 1" value="" onChange={(event) => {}} /></div> */}
                                {/* <div className="col-md-12"><label className="labels">Address Line 2</label><input type="text" className="form-control" placeholder="enter address line 2" value="" onChange={(event) => {}} /></div> */}
                                {/* <div className="col-md-12"><label className="labels">Postcode</label><input type="text" className="form-control" placeholder="enter address line 2" value="" onChange={(event) => {}} /></div> */}
                                {/* <div className="col-md-12"><label className="labels">State</label><input type="text" className="form-control" placeholder="enter address line 2" value="" onChange={(event) => {}} /></div> */}
                                {/* <div className="col-md-12"><label className="labels">Area</label><input type="text" className="form-control" placeholder="enter address line 2" value="" onChange={(event) => {}} /></div> */}
                                {/* <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" value="" onChange={(event) => {}} /></div> */}
                                {/* <div className="col-md-12"><label className="labels">Education</label><input type="text" className="form-control" placeholder="education" value="" onChange={(event) => {}} /></div> */}
                            </div>
                            <div className="row mt-3">
                                {/* <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" value="" onChange={(event) => {}} /></div> */}
                                {/* <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" value="" onChange={(event) => {}} placeholder="state" /></div> */}
                            </div>
                            <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center experience">
                                <span>Edit Experience</span><span className="border px-3 p-1 add-experience">
                                    <i className="fa fa-plus" />&nbsp;Experience
                                </span>
                            </div>
                            <br />
                            <div className="col-md-12">
                                <label className="labels">Experience in Designing</label>
                                <input type="text" className="form-control" placeholder="experience" value="" onChange={(event) => {}} />
                            </div>
                            <br />
                            <div className="col-md-12">
                                <label className="labels">Additional Details</label>
                                <input type="text" className="form-control" placeholder="additional details" value="" onChange={(event) => {}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}



export default UserProfile;