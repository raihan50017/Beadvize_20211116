import React from 'react'
import Style from './Active.module.scss'

const Active = ({setActive, setShowModal}: any) => {

    const redirect = () => {
        setActive(false)
        setShowModal(true)
    }

    return (
        <div className={Style.section}>
            <div className={Style.container}>
                <h1>Votre compte est maintenant actif</h1>
                <button className={Style.active} onClick={redirect}>Connexion</button>
            </div>
        </div>
    )
}

export default Active
