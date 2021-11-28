import React from 'react'
import { useHistory } from 'react-router'
import Style from './Thanks.module.scss'

const Thanks = () => {

    const history = useHistory()

    const redirect = () => {
        history.push('/dashboardFreelance')
    }

    return (
        <div className={Style.container}>
            <h6 className={Style.title}>Merci pour votre confiance! Nous revenons vers vous pour mettre en place cette mission avec votre client. </h6>
            <button onClick={redirect}>Retour au Dashboard</button>
        </div>
    )
}

export default Thanks
