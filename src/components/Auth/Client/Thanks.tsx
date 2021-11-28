import React from 'react'
import Style from './Thanks.module.scss'
import history from '../../../history'

const redirect = () => {
    history.push('/')
    window.location.reload()
}

const Thanks = ({ next }:any) => {
    return (
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.containAll}>
                    <h1 className={Style.title}>Merci pour vos informations !</h1>
                    <div className={Style.barre} ></div>
                    <h3 className={Style.subTitle}>Nous étudions votre projet et revenons vers vous très rapidement </h3>
                    <div className={Style.containButton}>
                        <button className={Style.btnFinal} onClick={e=> {redirect()}}>Accéder a la plateforme</button>
                        <button className={Style.btnLater} onClick={e=> {redirect()}}>Quitter</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Thanks
