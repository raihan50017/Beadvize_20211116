import React from 'react'
import Style from './MyCompany.module.scss'
import cross from '../../../assets/Dashboard/cross.svg'
import validate from '../../../assets/Dashboard/Icon-awesome-check.svg'
import { useHistory } from 'react-router-dom'

const MyCompany = ({client}:any) => {

    const history = useHistory()
    const redirect = () => {
        history.push('/myEnterprise')
    }
    return (
        <div className={Style.container}>
            {
                
            }
            <div className={Style.containDetails}>
                <h1 className={Style.title}>Mon entreprise</h1>
                <div className={Style.barre}></div>
                <div className={Style.Div}>
                    <p>Nom</p>
                    {
                        (client.company && client.company.companyName) ? (
                            <img src={validate} alt="signe validé vert"/>
                        )
                        : (
                            <img src={cross} alt="une croix rouge"/>
                        )
                    }
                   
                </div>
                <div className={Style.Div}>
                    <p>Forme juridique</p>
                    {
                         (client.company && client.company.companyName) ? (
                            <img src={validate} alt="signe validé vert"/>
                        )
                        : (
                            <img src={cross} alt="une croix rouge"/>
                        )
                    }
                </div>
                <div className={Style.Div}>
                    <p>Coordonnées bancaires</p>
                    {
                        (client.company && client.company.card) ? (
                            <img src={validate} alt="signe validé vert"/>
                        )
                        : (
                            <img src={cross} alt="une croix rouge"/>
                        )
                    }
                </div>
                <button onClick={redirect}>Modifier / Ajouter</button>
            </div>
        </div>
    )
}

export default MyCompany
