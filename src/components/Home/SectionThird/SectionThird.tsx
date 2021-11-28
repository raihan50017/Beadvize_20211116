import React from 'react'
import Style from './SectionThird.module.scss'
import LogoExpertiseConseil from '../../../assets/Home/SectionThird/logoExpertiseConseil.svg'
import LogoGestionProjet from '../../../assets/Home/SectionThird/test2.svg'
import LogoGestionProjetIT from '../../../assets/Home/SectionThird/LogoGestionProjetIT.svg'
import LogoAudit from '../../../assets/Home/SectionThird/LogoAuditRH.svg'
import LogoForm from '../../../assets/Home/SectionThird/LogoFormCoatching.svg'
import LogoTransformDigit from '../../../assets/Home/SectionThird/LogoTransformDigit.svg'


const ThirdSection = () => {
    const datas = [ 
        {
            logo: LogoExpertiseConseil,
            title: "Expertise & Conseil",
            paragraphe: "Stratégie et Business Plan Etudes sectorielles et analyse de cible Audit et Etudes d’opportunité Aide au choix et Cadrage ..",
            alt: "Images décrivant une personne donnant un conseil à une autre"
        },
        {
            logo: LogoGestionProjet,
            title: "Gestion de projet",
            paragraphe: "Structure organisationnelle Etudes sectorielles et analyse de cible Optimisation de la performance & Gestion des processus  Pilotage de programme ou projet et PMO … ",
            alt: "Images décrivant un planning pour la gestion de projet"
        },
        {
            logo: LogoGestionProjetIT,
            title: "Gestion de Projet IT",
            paragraphe: "Gouvernance SI et cadrage Urbanisation et schéma directeur Maîtrise d’ouvrage MOA et AMOA Recette et formation …",
            alt: "Images décrivant un projet IT"
        },
        {
            logo: LogoTransformDigit,
            title: "Trasformation digitale",
            paragraphe: "Stratégie Digitale Digitalisation des processus  Big Data et Data Marketing Mobilité et Cloud",
            alt: "Images décrivant un téléphone portable et un ordinateur portable"
        },
        {
            logo: LogoForm,
            title: "Formation / Coatching",
            paragraphe: "Coatching individuel et équipes Conseil en communication Accompagnement professionnel ..",
            alt: "Images décrivant plusieurs personne à une table entrain de discuter"
        },
        {
            logo: LogoAudit,
            title: "Audit RH/SIRH",
            paragraphe: "Audit des organisations Transformation RH Digitalisation du recrutement RSE, social media & community management ..",
            alt: "Images décrivant un curriculum vitae"
        },
    ]

    return (
        <section className={Style.section}>
            <div className={Style.container}>
                <h4 className={Style.title}>Les domaines d'expertise</h4>
                <div className={Style.barre}>
                    <p></p>
                </div>
                <div className={Style.containerCard}>
                {
                    datas.map((data, i) => (
                        <div className={Style.card} key={i}>
                            <div className={Style.LogoExpertiseConseil}>
                                <img src={data.logo} className={Style.img} alt={data.alt}/>
                            </div>
                            <div className={Style.divBarre}>
                                <p className={Style.barreCard}></p>
                            </div>
                            <div className={Style.titleCard}>
                                <h4>{data.title}</h4>
                            </div>
                            <div className={Style.paragraphe}>
                                <p>{data.paragraphe}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </section>
    )
}

export default ThirdSection