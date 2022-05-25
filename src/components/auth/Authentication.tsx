import { useEffect } from "react";
import { PropsInterface } from 'helpers/interfaces';
 

export const Authentication = (props: PropsInterface) => {

    useEffect(() => {

        props.auth.validate()

    }, [])



    return (
        <>
        </>
    )



}



export default Authentication;



