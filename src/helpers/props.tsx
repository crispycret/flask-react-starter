import {useState} from 'react'
import { PropsInterface } from 'helpers/interfaces';


import Auth from 'helpers/auth'
import Users from 'helpers/users'
import Nav, {Sidebar} from 'helpers/nav'
import Style from 'helpers/styles'

import {Errors, ErrorsInterface} from 'helpers/errors'




export const Props = () => {
    return {
        auth: Auth(),
        users: Users(),
        nav: Nav(),
        style: Style(),
        errors: Errors(),
    } as PropsInterface
}











