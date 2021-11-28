import { useState } from 'react'
import Style from './PasswordForgot.module.scss'
import Cross from '../../../assets/Auth/Cross.svg'

const PasswordForgot = ({setResetPasswordToken, setShowModal, email}: any) => {

    const [mail, setMail] = useState({
        email: "",
        send: false
    })

    const handleChange = (e:any) => {
        const {value} = e.target
        setMail({
            ...mail,
            email: value
        })
    }

    const handleClick = () => {
        if(mail.email) {
            setMail({
                ...mail,
                send: true
            })
        }
    }


    return (
        <div className={Style.section}>
            {
                mail.send  ? (
                    <div className={Style.container}>
                        <h1 className={Style.title}>Réinitialisation de votre mot de passe</h1>
                        <div className={Style.barre}></div>
                        <p className={Style.para}>Si l’adresse {email || mail.email} est valide, vous recevrez un email de récupération de mot de passe d’ici quelques minutes.</p>
                        <div className={Style.containButton}>
                            <button className={Style.button} onClick={e => {setResetPasswordToken(false); setShowModal(true)}}>Revenir à la connexion</button>
                        </div>
                    </div>
                ) : (
                    <div className={Style.container}>
                        <div className={Style.containCross} onClick={() => setResetPasswordToken(false)}>
                            <img src={Cross} alt="croix pour quitter la modale" />
                        </div>
                        <h1 className={Style.title}>Réinitialisation de votre mot de passe</h1>
                        <div className={Style.barre}></div>
                        <p className={Style.para} >Entrez l'adresse e-mail associée à votre compte, et nous vous enverrons par e-mail un lien pour réinitialiser votre mot de passe.</p>
                        <input type="email" placeholder="E-mail professionnel" className={Style.input} name="email" onChange={handleChange}></input>
                        <div className={Style.containButton}>
                            <button className={Style.button} onClick={handleClick}>réinitialiser mon mot de passe</button>
                        </div>
                        
                    </div>
                )
            }
           
        </div>
    )
}

export default PasswordForgot
