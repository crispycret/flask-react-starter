
import {useState, useEffect} from 'react'
import {PropsInterface} from 'helpers/interfaces';


export interface UserInterface { 
    email: string,
    username: string,
    created?: string,
    updated?: string,
    public_id?:string,
    password?:string,
}



export const UserList = (props: PropsInterface) => {

    // Fetch User list on component load
    useEffect(() => {

        props.style.darkMode.elements.push(['user-results', 'dark'])
        props.style.darkMode.elements.push(['user-results-table', 'table-dark'])

        console.log(props.users.users)

        let res = props.users.fetchAllUsers()
        if (res == null) return

        console.log(props.users.users)
        res.then((response) => {

            // setUsers(response.data.users)
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    return (
        <div id="user-results">

            <div style={{paddingTop: '25px'}}></div>
            <h2 className="text-center">User List</h2>
            
            <div>
                {/* <p>{props.auth.token}</p> */}
                <p>{JSON.stringify(props.auth.user)}</p>

            <table id='user-results-table' className="table table-striped">
                <thead>
                    <tr>
                    <th className="text-center" scope="col">#</th>
                    <th className="text-center" scope="col">username</th>
                    <th className="text-center" scope="col">email</th>
                    <th className="text-center" scope="col">password</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.users.map((user, idx) => (
                        <tr key={idx} onClick={() => props.nav.redirect(`/users/${user.username}`)}>
                            <th scope="row">{idx}</th>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            {/* <td>{user.password !== undefined && user.password?.length > 36 ? user.password?.substring(0,36) + "..." : user.password}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>

            </div>
        </div>
    )
}



export default UserList;