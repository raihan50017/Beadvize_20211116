import React from 'react'
import Style from './SectionSecond.module.scss'
import Img from '../../../assets/Home/SectionSecond/ImgSecondSection.svg'
import consultant from '../../../assets/Home/SectionSecond/ConsultantMobile.svg'
import search from '../../../assets/Home/SectionSecond/Search.svg'
import table from '../../../assets/Home/SectionSecond/table.svg'
import team from '../../../assets/Home/SectionSecond/team.svg'
import rocket1 from '../../../assets/Home/SectionSecond/rocket1.svg'
import rocket2 from '../../../assets/Home/SectionSecond/rocket2.svg'
import girlClient from '../../../assets/Home/SectionSecond/girlClient.svg'
import ligth from '../../../assets/Home/SectionSecond/ligth.svg'
import table2 from '../../../assets/Home/SectionSecond/table2.svg'
import target from '../../../assets/Home/SectionSecond/target.svg'
import arrow from '../../../assets/Home/SectionSecond/arrow.svg'

const SecondSection = () => {
    return (
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.title}>
                    <h4>Comment ça marche ?</h4>
                </div>
                <div className={Style.barre}>
                    <p></p>
                </div>

                <img className={Style.img} src={Img} alt="logo de 'entreprise BeAdvize" />
                <div className={Style.containMobile}>
                    <img src={consultant} alt="décrit un consultant"/>
                    <p className={Style.consultant}>Je suis consultant</p>
                    <img src={search} alt="logo rechercher"/>
                    <p className={Style.titleMobile}>Je recherche une mission</p>
                    <p className={Style.para}>J’ai un projet à développer, ou une mission à pourvoir : je m’inscris et dépose mon projet ou mission en quelques clics.</p>
                    <img src={table} alt="deux personnes discutent à table"/>
                    <p className={Style.titleMobile}>BeAdvize me contacte</p>
                    <p className={Style.para}>Les équipes me contactent rapidement pour mieux définir ma recherche.</p>
                    <img src={team} alt="une équipe entrain de discuter"/>
                    <p className={Style.titleMobile}>Ma recherche est étudiée par l’équipe</p>
                    <p className={Style.para}>Je reçois des appels d’offre qui correspondent parfaitement à ma recherche de mission. Je définie ma réponse avec une méthodologie et un tarif. Les équipes BeAdvize m’accompagnent durant toute cette étape.</p>
                    <img src={rocket1} alt="une fusée"/>
                    <p className={Style.titleMobile}>Le projet peut commencer</p>
                    <p className={Style.barre2}></p>
                    <img src={girlClient} alt="fille"/>
                    <p className={Style.paraClient}>Je suis client</p>
                    <img src={ligth} alt="ampoule"/>
                    <p className={Style.titleMobile2}>J'ai un projet à développer</p>
                    <p className={Style.para}>J’ai un projet à développer, ou une mission à pourvoir : je m’inscris et dépose mon projet ou mission en quelques clics</p>
                    <img src={table2} alt="table avec des personne qui discutent"/>
                    <p className={Style.titleMobile2}>BeAdvize me contacte</p>
                    <p className={Style.para}>Les équipes me contactent rapidement pour mieux définir ma recherche</p>
                    <img src={target} alt="une cible"/>
                    <p className={Style.titleMobile2}>BeAdvize sélectione Mes consultants</p>
                    <p className={Style.para}>Mon projet est étudié par les équipes afin de me proposer une sélection très fine de consultants. Ces derniers me répondront avec une méthodologie, une roadmap et un budget. Je sélectionne ceux avec qui je souhaite travailler.</p>
                    <img src={rocket2} alt="autre fusée"/>
                    <p className={Style.titleMobile2}>Le projet peut commencer</p>
                </div>
                <div >
                    <a href="/concept" className={Style.button}>
                        Comprendre le concept en détails
                        <img src={arrow} alt="flèche vers la droit"/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default SecondSection
