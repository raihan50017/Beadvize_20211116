import React from 'react'
import Style from './NoActive.module.scss'

const NoActive = ({setNoActive}:any) => {

    return (
        <div className={Style.section}>
            <div className={Style.container}>
                <h1>
                    Votre compte n'est toujours pas activé, veuillez regarder vos mails, <br/>
                    cliquez pour recevoir un email si vous n'avez rien reçu.
                </h1>
                <div className={Style.containButtons}>
                    <button className={Style.quit}>Renvoyez un mail de confirmation</button>
                </div>
            </div>
        </div>
    )
}

export default NoActive
