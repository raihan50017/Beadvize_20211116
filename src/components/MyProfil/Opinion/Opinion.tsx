import React from 'react'
import Style from './Opinion.module.scss'
import Profil from '../../../assets/Dashboard/profil.svg'

const Opinion = () => {
    return (
        <div className={Style.container}>
        <div className={Style.containDetails}>
            <h1 className={Style.title}>Mes avis</h1>
            <div className={Style.barre}></div>
            <div className={Style.profil}>
                <img src={Profil} alt="profil"/>
                <p>
                    Nom du client <br/> 
                    Entreprise
                </p>
            </div>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            
        </div>            
    </div>
    )
}

export default Opinion
