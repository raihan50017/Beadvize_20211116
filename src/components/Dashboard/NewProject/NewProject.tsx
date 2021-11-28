import React from 'react'
import { useHistory } from 'react-router'
import Style from './NewProject.module.scss'

const NewProject = () => {

    const history = useHistory()

    const redirect = () => {
        history.push('/missionsClient')
    }

    return (
        <div className={Style.container}>
            <div className={Style.containDetails}>
                <h1 className={Style.title}>Nouveau projet</h1>
                <div className={Style.barre}></div>
                <button className={Style.button} onClick={redirect}>Soumettre ma proposition</button>
            </div>
        </div>
    )
}

export default NewProject
