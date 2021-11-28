import React from 'react'
import Style from './SectionFirst.module.scss'
import Img from '../../../assets/Concept/SectionFirst/plateforme.svg'
import arrowGreen from '../../../assets/Home/SectionFirst/arrowGreen.svg'
import arrowBleue from '../../../assets/Home/SectionFirst/arrowBleu.svg'

const SectionFirst = () => {
    return (
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.firstBlock}>
                    <h4 className={Style.title}>
                        Travailler avec les freelances, c’est
                        faire appel aux compétences de la 
                        plus grande communauté d’experts.
                    </h4>
                    <p className={Style.barre}></p>
                    <p className={Style.para}>
                        Nous accompagnons les freelances dans leurs
                        recherches de missions, tout en apportant l’expertise
                        nécessaire aux entreprises.
                    </p>
                    <div className={Style.button}>
                        <a href="/registerClient" className={Style.btnConsultant}>Je cherche un freelance <img src={arrowBleue} alt="flèche de couleur bleu foncé"/></a>
                        <a href="/registerFreelance" className={Style.btnClient}>Je cherche une mission <img src={arrowGreen} alt="flèche de couleur verte clair"/></a>
                    </div>
                </div>
                <div className={Style.secondBlock}>
                    <img src={Img} alt="tableau de bord beadvize"/>
                </div>
            </div>
        </section>
    )
}

export default SectionFirst
