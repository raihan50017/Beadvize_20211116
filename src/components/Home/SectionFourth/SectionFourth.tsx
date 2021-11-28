import React from 'react'
import Style from './SectionFourth.module.scss'
import LogoModeleAgil from '../../../assets/Home/SectionFourth/LogoModeleAgile.svg'
import LogoEfficience from '../../../assets/Home/SectionFourth/LogoEfficience.svg'
import LogoCommunauté from '../../../assets/Home/SectionFourth/LogoCommunaute.svg'
import trait from '../../../assets/Home/SectionFourth/trait.svg'

const FourthSection = () => {
    return (
        <section className={Style.section}>
            <div className={Style.container}>
                <h4 className={Style.title}>Le modèle BeAdvize</h4>
                <div className={Style.barre}>
                    <p></p>
                </div>
                <div className={Style.containerDiv}>
                    <div className={Style.text}>
                        <h4 className={Style.textTitle}>Un modèle agile pour des projets sur mesure</h4>
                        <div className={Style.textPara}>
                            <p>PME ou grand groupe, vos besoins sont différents et uniques. Notre modèle agile peut s’adapter à vos enjeux et contraintes :</p>
                            <p> <img src={trait} alt="tiret" className={Style.imgTrait}/> En sélectionnant parmi notre communauté de consultants le ou les talents avec le savoir-faire que vous recherchez.</p>
                            <p> <img src={trait} alt="tiret"  className={Style.imgTrait}/> En vous accompagnant aussi bien lors de la construction de votre projet que pendant sa mise en place.</p>
                        </div>
                    </div>
                    <div className={Style.logo}>
                        <img src={LogoModeleAgil} alt="Logo décrivant la méthode agile, avec deux personnes entrain de dialoguer"/>
                    </div>
                </div>
                <div className={Style.containerDivMd}>
                    <div className={Style.logoMd}>
                        <img src={LogoEfficience} alt="Logo décrivant deux mains qui se serrent"/>
                    </div>
                    <div className={Style.textMd}>
                        <h4 className={Style.textTitle}>L’efficience du modèle BeAdvize</h4>
                        <div className={Style.textPara}>
                            <p>Le modèle de notre plateforme repose sur le meilleur de la technologie et de l’humain :</p>
                            <p><img src={trait} alt="tiret"  className={Style.imgTrait}/>Une équipe de consultant experts pour accompagner nos entreprises partenaires et faciliter le match-making.</p>
                            <p><img src={trait} alt="tiret"  className={Style.imgTrait}/>des outils intelligents pour faciliter la pré-sélection des candidats, et le suivi de mission.</p>
                        </div>
                    </div>

                </div>
                <div className={Style.containerDiv}>
                    <div className={Style.text}>
                        <h4 className={Style.textTitle}>Une communauté de consultants et experts indépendants de haut niveau</h4>
                        <div className={Style.textPara}>
                            <p>Les indépendants sur BeAdvize sont sélectionnés et évalués pour leurs expertises et qualités humaines. Le processus de référencemment sur la plateforme permet :</p>
                            <p><img src={trait} alt="tiret"  className={Style.imgTrait}/>De jauger les qualités professionnelles et humaines, conditions sinequanones pour répondre aux enjeux des clients.</p>
                            <p><img src={trait} alt="tiret"  className={Style.imgTrait}/>De cibler finement la recherche en terme de type de missions</p>
                        </div>
                    </div>
                    <div className={Style.logo}>
                        <img src={LogoCommunauté} alt="Logo décrivant 3 personnes représentant des experts discuter"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FourthSection
