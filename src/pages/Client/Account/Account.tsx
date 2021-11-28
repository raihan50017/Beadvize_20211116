import React from 'react'
import { useState } from 'react'
import FormAccount from '../../../components/Account/FormAccount/FormAccount'
import FormAdress from '../../../components/Account/FormAdress/FormAdress'
import FormAdressPro from '../../../components/Account/FormAdress/FormAdressPro'
import FormDelete from '../../../components/Account/FormDelete/FormDelete'
import FormPassword from '../../../components/Account/FormPassword/FormPassword'
import FormProfil from '../../../components/Account/FormProfil/FormProfil'
import Style from './Account.module.scss'

const Account = () => {

    const [index, setIndex] = useState<number>(0)
    const buttons = [

        {
            name: "Compte",
            class: Style.button,
            classBlue: Style.buttonBlue
        },
        {
            name: "Mot de passe",
            class: Style.button,
            classBlue: Style.buttonBlue
        },
        {
            name: "Suppression",
            class: Style.button,
            classBlue: Style.buttonBlue
        }
    ]

   

    const handleChangeForm = () => {
        switch(index) {
            case 0:
                return ( 
                        <div className={Style.firstDiv}>
                            <FormAccount />
                            <FormProfil />
                            <FormAdress />
                          {/*   <FormAdressPro /> */}
                        </div>
                    )
                case 1:
                        return (
                            <div className={Style.firstDiv}>
                                <FormPassword />
                            </div>
                        )
                case 2:
                    return (
                        <div className={Style.firstDiv}>
                            <FormDelete />
                        </div>
                    )
            default:
                throw new Error('Unknown step');
        }
    }

    return (
        <div className={Style.container}>
            <div className={Style.containAll}>
                <div className={Style.status}>
                    <div className={Style.containButton}>
                        {
                            buttons.map((button, i) => (
                                <button key={i} className={index === i ? button.classBlue : button.class} onClick={e => {setIndex(i)}}>{button.name}</button>
                            ))
                        }
                    </div>
                </div>
                <div className={Style.Card}>
                    {   
                        handleChangeForm()
                    }
                </div>
            </div>
        </div>
    )
}

export default Account
