import React from 'react'
import Style from './SectionThird.module.scss'
import one from '../../../assets/Concept/SectionThird/one.svg'
import two from '../../../assets/Concept/SectionThird/two.svg'
import three from '../../../assets/Concept/SectionThird/three.svg'
import tab from '../../../assets/Concept/SectionThird/tableau.svg'
import People from '../../../assets/Concept/SectionThird/Homme.svg'
import money from '../../../assets/Concept/SectionThird/money.svg'
import tracking from  '../../../assets/Concept/SectionThird/trackingRecord.svg'

const SectionThird = () => {
    return (
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.contain}>
                    <div className={Style.textContain}>
                        <p className={Style.titleContain}>Vous êtes freelance</p>
                        <p className={Style.barreContain}></p>
                        <p className={Style.subtileContain}>Des missions qui matchent</p>
                        <p className={Style.bigParaContain}>Quand un client nous mandate pour sa recherche de freelance, on l’étudie avec soin pour proposer la mission uniquement à nos membres qui peuvent correspondre. Ainsi on améliore le matching entre le besoin de notre client et la recherche de mission des freelances.</p>
                        <div className={Style.count}>
                            <img src={one} alt="logo du chiffre 01" className={Style.one}/>
                            <p>Créez votre profil</p>
                        </div>
                        <div className={Style.count}>
                            <img src={two} alt="logo du chiffre 02" className={Style.one}/>
                            <p>Rencontrez un de nos consultants experts</p>
                        </div>
                        <div className={Style.count}>
                            <img src={three} alt="logo du chiffre 03" className={Style.one}/>
                            <p>Recevez des missions sur mesure</p>
                        </div>
                    </div>
                    <div className={Style.logoContainD}>
                        <img src={tab} alt="logo représentant un tableau" className={Style.tab}/>
                        <img src={People} alt="logo représentant une personne pointé du doigt le tableau" className={Style.people}/>
                    </div>
                </div>
                <div  className={Style.containMD}>
                    <div className={Style.logoContainMd}>
                        <img src={money} alt="représente un billet de banque"/>
                    </div>
                    <div className={Style.textContainMd}>
                        <p className={Style.titleContain}>Facture & paiement</p>
                        <p>Notre équipe est constituée de consultants experts qui maîtrisent parfaitement les enjeux des projets en entreprise, tout en les alignant avec les recherches et compétences des consultants freelances.</p>
                        <p>Cette équipe vous accompagnera ainsi dès le début de votre recherche jusqu’à la livraison.</p>
                    </div>
                </div>
                <div className={Style.containEnd}>
                    <div className={Style.textContainEnd}>
                        <p className={Style.titleContainEnd}>Une plateforme dédiée et une équipe à votre écoute</p>
                        <p>Des outils dédiés pour le suivi de vos missions</p>
                        <p>Une équipe de consultants experts  qui vous accompagne dès votre inscription</p>
                    </div>
                    <div className={Style.logoContainEnd}>
                        <img src={tracking} alt="représente une fiche de suivie" className={Style.tracking}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionThird