import {useState} from 'react'


export const Errors = () => {
    const [message, setMessage] = useState('')
    
    function has (){
        return message !== '' && message !== null && message !== undefined
    }

    return {
        message,
        has,
    } as ErrorsInterface
}




export interface ErrorsInterface {

    message: string,
    setMessage: (message: string) => void,
    has: () => boolean,

}



export default Errors;



