import React from "react";
import Style from './SectionSecond.module.scss'
import girl from '../../../assets/Concept/SectionSecond/girl.svg'
import first from '../../../assets/Concept/SectionSecond/first.svg'
import second from '../../../assets/Concept/SectionSecond/second.svg'
import third from '../../../assets/Concept/SectionSecond/third.svg'
import fourth from '../../../assets/Concept/SectionSecond/fourth.svg'
import Description from '../../../assets/Concept/SectionSecond/description.svg'
import Select from '../../../assets/Concept/SectionSecond/sourcing.svg'
import checked from '../../../assets/Concept/SectionSecond/checked.svg'
import expert from '../../../assets/Concept/SectionSecond/expert.svg'
import line from '../../../assets/Concept/SectionSecond/line.svg'


const SectionSecond = () => {
    return ( 
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.head}>
                    <h5 className={Style.title}>Vous êtes une entreprise cliente</h5>
                    <p className={Style.barre}></p>
                    <p className={Style.para}>Une procédure de sélection rigoureuse pour travailler avec les meilleurs consultants</p>
                    <div className={Style.imgPara}>
                        <img src={first} alt="numéro 1" className={Style.img}/>
                        <p>Examen du profil (Nous examinons le CV, le niveau d’expérience ainsi que les projets effectués)</p>
                    </div>
                    <div className={Style.imgPara}>
                        <img src={second} alt="numéro 1" className={Style.img}/>
                        <p>Entretien individuel (les candidats sélectionnés sont invités à des entretiens par nos consultants experts qui vont les aider pour leurs recherches et durant leurs missions)</p>
                    </div>
                    <div className={Style.imgPara}>
                        <img src={third} alt="numéro 1" className={Style.img}/>
                        <p>Identification des hard et soft skills (on fait le bilan des compétences et expériences du candidat ainsi que de sa personnalité et méthode de travail)</p>
                    </div>
                    <div className={Style.imgPara}>
                        <img src={fourth} alt="numéro 1" className={Style.img}/>
                        <p>Évaluation en fin de mission (tous les consultants sont évalués en fin de projet par le client pour nous aider à améliorer ses prochaines interventions)</p>
                    </div>
                </div>
                <div className={Style.logo}>
                        <img src={girl} className={Style.girl} alt="logo décrivant une fille tenant un téléphone portable"/>
                </div>
                <div className={Style.innovation}>
                    <h5 className={Style.titleInno}>Simplicité et innovation</h5>
                    <div className={Style.blockInno}>
                        <div className={Style.barreInno}>
                            <div className={Style.barre}></div>
                        </div>
                        <div className={Style.paraInno}>
                            <p>Dans un processus classique, trouver un consultant c’est plus de 50 CVs reçus pour un appel d’offres, des recherches interminables sur les joboards, et des heures perdues à trier le bon du mauvais.</p>
                            <p>Notre longue expérience du consulting nous a permis de construire des processus et outils de match-making robustes qui nous permettent de vous proposer directement les 3 meilleurs profils qui correspondent parfaitement à votre recherche. Vous n’avez plus qu’à choisir !</p>
                        </div>
                    </div>
                </div>
                <div className={Style.schema}>
                    <img src={line} alt="ligne svg" className={Style.svg}/>
                    <div className={Style.card}>
                        <img alt=".." src={Description} className={Style.imgContain}/>
                        <p className={Style.titleCard}>Description projet et profil</p>
                        <p className={Style.paraCard}>Un consultant expert vous contacte dans les 24h pour afficher votre recherche</p>
                    </div>
                    <div className={Style.card}>
                        
                            <img src={Select} alt="logo qui décrit la recherche de profil" className={Style.imgContain}/>
                       
                        <p className={Style.titleCard}>Sélection de 3 profils</p>
                        <p className={Style.paraCard}>Sélection de 3 profils (on vous présente uniquement les profils qui correspondent, qui sont disponibles et motivés par votre mission)</p>
                    </div>
                    <div className={Style.card}>
                        
                            <img src={checked} alt=".." className={Style.imgContain}/>
                        
                        <p className={Style.titleCard}>Dès que ça marche !</p>
                        <p className={Style.paraCard}>On s’occupe de la partie contractuelle, et on vous accompagne jusqu’à la fin du projet</p>
                    </div>
                </div>
                <div className={Style.expert}>
                    <div className={Style.textExpert}>
                        <h4>Une équipe d’experts avec une vision 360° du projet</h4>
                        <p>Notre équipe est constituée de consultants experts qui maîtrisent parfaitement les enjeux des projets en entreprise, tout en les alignant avec les recherches et compétences des consultants freelances.</p>
                        <p>Cette équipe vous accompagnera ainsi dès le début de votre recherche jusqu’à la livraison.</p>
                        
                    </div>
                    <div className={Style.logoExpert}>
                        <img src={expert} alt="plusisuers personne à une table pendant une réunion" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionSecond;
