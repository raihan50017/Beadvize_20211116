import React from 'react'
import Style from './MyConsultants.module.scss'
import profil from '../../../assets/Dashboard/profil.svg'
import { useState } from 'react'
import { shortlister } from '../../../Utilities/request'

const MyConsultants = ({missions, propositions}: any) => {


    const [showShortliste, setShowShortliste] = useState<boolean>(true)
    const [showMission, setShowMission] = useState(false)

    return (
        <div className={Style.container}>
            <div className={Style.containDetails}>
                <h1 className={Style.title}>Mes consultants</h1>
                <div className={Style.barre}></div>
                <div className={Style.facturation}>
                    <div className={showShortliste ? Style.forfait : Style.regie} onClick={() => setShowShortliste(true)}>
                        <h6>Shortlistés</h6>
                    </div>
                    <div className={!showShortliste ? Style.forfait : Style.regie} onClick={() => setShowShortliste(false)}>
                        <h6>Avec qui je travaille</h6>
                    </div>
                </div>
                <div className={Style.answer}>

                    {
                        missions || propositions ? (
                            showShortliste ? (
                                propositions && propositions.length > 0 ? (
                                    propositions.map((propo:any, i:number) => {
                                        if(propo && propo.meta.status === "shortlised") {
                                            return (
                                                <div className={Style.detailAnswer} key={i}>
                                                    <img src={profil} alt=""/>
                                                    <div>
                                                        <h6>Myriam Martin shortlised</h6>
                                                        <p>Coach Agile</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        else {
                                            return (
                                                <p>Aucun consultant séléctionné</p>
                                            )
                                        }
                                    })
                                )
                                : (
                                   null
                                )
                            )
                            : (
                                missions && missions.length > 0 ? (
                                    missions.map((mission:any, i:number) => {
                                        if (mission && mission.meta.status === "started") {
                                            return (
                                                <div className={Style.detailAnswer} key={i}>
                                                    <img src={profil} alt=""/>
                                                    <div>
                                                        <h6>Myriam Martin started</h6>
                                                        <p>Coach Agile</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        else {
                                            return ( 
                                                // <p>Aucun consultant séléctionné</p>
                                                null
                                            )
                                        }
                                    })
                                ) : (
                                    null
                                )
                            )
                        )
                        : (
                           null
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default MyConsultants
