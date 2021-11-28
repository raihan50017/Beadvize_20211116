import React from 'react'
import Style from './Contact.module.scss'
import profil from '../../../assets/Dashboard/profil.svg'

const Contact = () => {
    return (
        <div className={Style.container}>
            <div className={Style.containDetails}>
                <h1 className={Style.title}>Mon contact Beadvize</h1>
                <div className={Style.barre}></div>
                <img src={profil} alt="profil"/>
                <h4>Issam Belfkira</h4>
                <h4>Email</h4>
                <h4>06 46 33 94 56</h4>
            </div>
        </div>
    )
}

export default Contact
