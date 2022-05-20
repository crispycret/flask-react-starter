import {PropsInterface} from 'helpers/PropInterfaces';


export const Authentication = (props: PropsInterface, {pageState='login'}) => {
// export const Authentication = (props: any,  {pageState='login'}) => {


    return (
        <div id='authentication'>
            AUTHENTICATION
            Token: {props.auth.token}
        </div>
    )
}



export default Authentication;