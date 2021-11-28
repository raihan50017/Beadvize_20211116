import axios from "axios";
import jwtDecode from "jwt-decode"
import { parse } from "query-string";
import { resetPassword, resetPasswordToken } from "./request";
import * as dotenv from 'dotenv'

dotenv.config()
let url = process.env.REACT_APP_API_URL
let status=""

if(localStorage.getItem('currentUser')) {
    let token: any = localStorage.getItem('currentUser')
    let user: any = jwtDecode(token)
    status = user.type
    let tokenExpire = user.exp
    let expiresIn = ((tokenExpire * 1000) - 60000)
    if(Date.now() >= expiresIn) {
        localStorage.removeItem('currentUser')
        window.location.reload()
    }
}

// export const setLogout = () => {
//     if(localStorage.getItem('currentUser')) {
//         let token: any = localStorage.getItem('currentUser')
//         let user: any = jwtDecode(token)
//         status = user.type
//         let tokenExpire = user.exp
//         let expiresIn = ((tokenExpire * 1000) - 60000)
//         if(Date.now() >= expiresIn) {
//             localStorage.removeItem('currentUser')
//             return true
//         } else {
//             return false
//         }
//     }
//     else {
//         return false
//     }
// }

export const logout = () => {
    localStorage.removeItem('currentUser')
    window.location.reload()
}


export const isLogin = () => {
    if(status) {
        return true
    }
}

export const isLoginClient = () => {
    if(status === "client") {
        return true
    }
}

export const isLoginConsultant = () => {
    if(status === "consultant") {
        return true
    }
}

export const isValid = async () => {
    const accessToken = localStorage.getItem('register')
    let config = 
    {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }
    }
    
    if(accessToken) {  
        const result = await axios.get(url + 'api/v1/user/me', config)
        if(result.data.meta.status === "initial"){
           return true
        }
        else {
           localStorage.removeItem('register')
           return false
        }
    }
    else {
        return false
    }
}

export const checkRegister = () => {
    const firstPath = window.location.pathname.split('/')[1];
    if(firstPath === "registerClient" || firstPath === "registerFreelance"){
        return true
    }
    else{
        return false
    }
}


export const query = parse(window.location.search)
	
export const createPasswordToken = async (email: string) => {
    
    const user = {
        "email": email
    }

    const result = resetPasswordToken(user)
    result
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

export const resetPass = async (password: string) => {
    let token: any = query.resetPasswordToken

    if(token) {
        const result = resetPassword(password, token)
        result
            .then(res => {
                console.log(res)
                alert("retour du back bon")
            })
            .catch(err => {
                console.log(err)
            })
    }
}


export const  getInitials = (user:any) => {
  
    if(user) {
        return (
            (user.firstname ? user.firstname[0] : '') +
            (user.lastname ? user.lastname[0] : '')
            );
    }
}
