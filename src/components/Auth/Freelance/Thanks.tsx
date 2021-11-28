import React from 'react'
import history from '../../../history'
import Style from './Thanks.module.scss'

const redirect = () => {
  
    history.push('/')
    //window.location.reload() 
    
}

const Thanks = () => {
    return (
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.containAll}>
                    <h1 className={Style.title}>Merci pour vos informations !</h1>
                    <div className={Style.barre} ></div>
                    <h3 className={Style.subTitle}>Démarrons ensemble dès aujourd’hui.</h3>
                    <p className={Style.para}>Afin que nos équipes puissent définir votre profil dès aujourd’hui et vous proposer une mission en accord avec ce que vous recherchez. <span>Finalisez le processus avec les essentiels de votre profil.</span> </p>
                    <div className={Style.containButton}>
                        <button className={Style.btnFinal} onClick={e => {redirect()}}>Renseigner mon profile</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Thanks
