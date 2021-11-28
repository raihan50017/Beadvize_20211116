import React, { useCallback, useEffect, useState } from 'react'
import Style from './DetailMission.module.scss'
import Chrono from '../../../assets/Dashboard/chronoSourcing.svg'
import { getProjectById, getPropositionById } from '../../../Utilities/request'

const DetailMission = ({showProposition, proposition, client, sourcing, mission, isConsultant, gray}:any) => {
    
    const [detailMission, setDetail] = useState<any>()

    const getMission = useCallback(() => {
        const data = getProjectById(mission)
        data.then(res => {
            setDetail(res)
        })
        .catch(err => {
            console.log(err)
        })
    }, [ mission ])

    const getProposition = useCallback(() => {
            const data = getPropositionById(mission)
            data.then(res => {
                setDetail(res)
            })
            .catch(err => {
                console.log(err)
            })
        },
        [mission]
    )

    useEffect(() => {
        if(isConsultant === true) {
            getProposition()
        }
        else {
            getMission()
        }
       
    }, [ getMission, getProposition, isConsultant ])


    return (
        <div className={showProposition || proposition || client || gray ? Style.containerGray : Style.container}>
            {
                isConsultant ? (
                    <div className={Style.containAll}>
                        {
                            detailMission
                                ?
                                    <div className={Style.containDetails}>
                                        <div className={Style.width}>
                                            {
                                                sourcing ? <h1 className={Style.sourcing}>Sourcing consultant en cours <img src={Chrono} alt="représente une horloge"/> </h1> : null
                                            }
                                            <h1 className={Style.title}><span>Titre </span> {detailMission.project.title}</h1>
                                            <div className={Style.barre}></div>
                                            <div className={Style.detailsMission}>
                                                <div className={Style.detail}>
                                                    <h6>Poste proposé </h6>
                                                    <p>{detailMission.project.title}</p>
                                                </div>
                                                <div className={Style.detail}>
                                                    <h6>Séniorité du consultant</h6>
                                                    <p>3 / 5 ans</p>
                                                </div>
                                                <div className={Style.detail}>
                                                    <h6>Fréquence par semaine</h6>
                                                    <p>Temps Plein</p>
                                                </div>
                                            </div>
                                            <div className={Style.detailsMission}>
                                                <div className={Style.detail}>
                                                    <h6>Lieu de travail</h6>
                                                    <p>Paris</p>
                                                </div>
                                                <div className={Style.detail}>
                                                    <h6>Début de la mission</h6>
                                                    <p>Des que Possible</p>
                                                </div>
                                                <div className={Style.detail}>
                                                    <h6>Durée de la mission</h6>
                                                    <p>3 a 5 mois</p>
                                                </div>  
                                            </div>
                                            <div className={Style.detailsMissionLast}>
                                                {
                                                    !proposition && !client
                                                        ?
                                                            <div className={Style.detail}>
                                                                <h6>Mode de facturation</h6>
                                                                <p>Forfait</p>
                                                            </div>
                                                        :
                                                            <div className={Style.detail}>
                                                                <h6>TJM</h6>
                                                                {
                                                                    client 
                                                                        ?
                                                                        <p>Selon Expérience</p>
                                                                        :
                                                                        <p>450 Euros</p>
                                                                }
                                                            </div>
                                                }
                                                
                                            </div>
                                            <h6>Description</h6>
                                            <div className={Style.barre}></div>
                                            <p className={Style.para}>
                                            {detailMission.project.description}
                                            </p>                 
                                        </div>
                                    </div>
                            : 
                                null
                        }
                        
                    </div>
                )
                :
                (
                    <div className={Style.containAll}>
                        {
                            detailMission
                                ?
                                    <div className={Style.containDetails}>
                                        <div className={Style.width}>
                                            {
                                                sourcing ? <h1 className={Style.sourcing}>Sourcing consultant en cours <img src={Chrono} alt="représente une horloge"/> </h1> : null
                                            }
                                            <h1 className={Style.title}><span>Titre </span> {detailMission.title}</h1>
                                            <div className={Style.barre}></div>
                                            <div className={Style.detailsMission}>
                                                <div className={Style.detail}>
                                                    <h6>Poste proposé </h6>
                                                    <p>{detailMission.title}</p>
                                                </div>
                                                <div className={Style.detail}>
                                                    <h6>Séniorité du consultant</h6>
                                                    <p>3 / 5 ans</p>
                                                </div>
                                                <div className={Style.detail}>
                                                    <h6>Fréquence par semaine</h6>
                                                    <p>Temps Plein</p>
                                                </div>
                                            </div>
                                            <div className={Style.detailsMission}>
                                                <div className={Style.detail}>
                                                    <h6>Lieu de travail</h6>
                                                    <p>Paris</p>
                                                </div>
                                                <div className={Style.detail}>
                                                    <h6>Début de la mission</h6>
                                                    <p>Des que Possible</p>
                                                </div>
                                                <div className={Style.detail}>
                                                    <h6>Durée de la mission</h6>
                                                    <p>3 a 5 mois</p>
                                                </div>  
                                            </div>
                                            <div className={Style.detailsMissionLast}>
                                                {
                                                    !proposition && !client
                                                        ?
                                                            <div className={Style.detail}>
                                                                <h6>Mode de facturation</h6>
                                                                <p>Forfait</p>
                                                            </div>
                                                        :
                                                            <div className={Style.detail}>
                                                                <h6>TJM</h6>
                                                                {
                                                                    client 
                                                                        ?
                                                                        <p>Selon Expérience</p>
                                                                        :
                                                                        <p>450 Euros</p>
                                                                }
                                                            </div>
                                                }
                                                
                                            </div>
                                            <h6>Description</h6>
                                            <div className={Style.barre}></div>
                                            <p className={Style.para}>
                                            {detailMission.description}
                                            </p>                 
                                        </div>
                                    </div>
                            : 
                                null
                        }
                        
                    </div>
                )
            }
            
        </div>
    )
}

export default DetailMission
