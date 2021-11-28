import React, { useState } from 'react'
import { resetPass } from '../../../Utilities/utils'
import Style from './ChangePassword.module.scss'

const ChangePassword = () => {

    const [values, setValues] = useState<object>({
        password: "",
        confirmPassword: ""
    })

    const handlechange = (e:any) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const submit = () => {
        let password = (values as any).password
        let confirmPassword = (values as any).confirmPassword

        if(!!password && !!confirmPassword && password === confirmPassword) {
            resetPass(password)
        }
        else {
            alert("pb")
            console.log("nop")
        }
    }

    return (
        <div className={Style.section}>
            <div className={Style.container}>
                <h1 className={Style.title}>Nouveau mot de passe</h1>
                <div className={Style.barre} ></div>
                <div className={Style.containInput}>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" name="password" onChange={handlechange}/>
                    <label htmlFor="confirmPassword">Confirmation du mot de passe</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" onChange={handlechange}/>
                </div>
                <button className={Style.button} onClick={submit}>Confirmer</button>
            </div>
        </div>
    )
}

export default ChangePassword
