import React from 'react'
import Style from './SectionFourth.module.scss'
import free from '../../../assets/Concept/SectionFourth/free.svg'
import checked from '../../../assets/Concept/SectionSecond/checked.svg'
import discussion from '../../../assets/Concept/SectionFourth/discussion.svg'
import line from '../../../assets/Concept/SectionFourth/line.svg'

const SectionFourth = () => {
    return (
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.containCard}>
                <img src={line} alt="ligne svg" className={Style.svg}/>
                    <div className={Style.card}>    
                        <img alt=".." src={free} className={Style.imgContain} />
                        <p className={Style.titleCard}>Inscription gratuite</p>
                        <p className={Style.paraCard}>Inscrivez-vous gratuitement et soyez contacté dans les 48h par un de nos consultants experts.</p>
                    </div>
                    <div className={Style.card}>                       
                        <img src={checked} alt=".." className={Style.imgContainM}/>            
                        <p className={Style.titleCard}>Gestion de l’administratif</p>
                        <p className={Style.paraCard}>BeAdvize s’occupe de la vérification légale des freelances, et gère la logistique contractuelle et de facturation</p>
                    </div>
                    <div className={Style.card}>
                        <img src={discussion} alt=".." className={Style.imgContain} />
                        <p className={Style.titleCard}>Mission de conseil</p>
                        <p className={Style.paraCard}>BeAdvize n’est pas une simple marketplace de mise en relation, mais une vraie structure de conseil qui vous apporte l’accompagnement nécessaire pour bien identifier vos besoins et vous accompagner dans votre recherche de mission.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionFourth