
import {useState, useEffect} from 'react'
import {PropsInterface} from 'helpers/PropInterfaces';


export interface UserInterface { 
    email: string,
    username: string,
    created?: string,
    updated?: string,
    public_id?:string,
    password?:string,
}

export const UserList = (props: PropsInterface) => {

    const [users, setUsers] = useState<Array<UserInterface>>([])

    // Fetch User list on component load
    useEffect(() => {
        props.user.users = users
        props.user.fetchAllUsers()
        .then(_users => {
            setUsers(_users)
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    return (
        <div id="user-results">

            <h2 className="text-center">User List</h2>
            
            <div>

                {/* <p>{props.auth.token}</p> */}

            <table className="table">
                <thead>
                    <tr>
                    <th className="text-center" scope="col">#</th>
                    <th className="text-center" scope="col">username</th>
                    <th className="text-center" scope="col">email</th>
                    <th className="text-center" scope="col">password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, idx) => (
                        <tr key={idx}>
                            <th scope="row">{idx}</th>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.password !== undefined && user.password?.length > 36 ? user.password?.substring(0,36) + "..." : user.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            </div>
        </div>
    )
}



export default UserList;