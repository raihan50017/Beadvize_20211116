import React from 'react'
import { useHistory } from 'react-router'
import Style from './CardWaiting.module.scss'
import profil from '../../../assets/Dashboard/profil.svg'
import { color } from '@mui/system'

const CardWaiting = ({client, missions, propositions}:any) => {
    const history = useHistory()

    const showDetail = 1

    const redirect = () => {
        history.push({
            pathname:'/detailMission',
            state: showDetail
        })
    }

    const redirectWaiting = (id:string) => {
        history.push({
            pathname:'/detailMission',
            state: {
                id,
            },
        })
    }

    // const redirectProfils = () => {
    //     history.push({
    //         pathname: '/profilsConsultant',
    //     })
    // }

    const rediretsourcing = (id:string) => {
        history.push({
            pathname: 'sourcing',
            state: {
                id
            }
        })
    }


    return (
        <div className={Style.width}>
            {
                !client && propositions
                    ? (
                        propositions.map((propo:any, i:number) => {
                            if(propo.meta && propo.meta.status === "initial") {
                                
                                return (
                                    <div className={Style.container} key={i}>
                                        <div className={Style.containCard}>
                                            <div className={Style.detailsCard}>
                                                <div className={Style.width}>
                                                    <h1 className={Style.title}>{propo.project.title}</h1>
                                                    <div className={Style.detailsMission}>
                                                        <div>
                                                            <h6>Lieu de travail</h6>
                                                            <p>Paris</p>
                                                        </div>
                                                        <div>
                                                            <h6>Début de la mission</h6>
                                                            <p>Dès que Possible</p>
                                                        </div>
                                                        <div>
                                                            <h6>Durée de la mission</h6>
                                                            <p>3 a 5 mois</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={ Style.status }>
                                            <button onClick={redirect}>Répondre</button> 
                                        </div>
                                    </div>
                                )
                            }
                            else {
                                return null
                            }
                        })
                    )
                    : (
                         null
                    )
            }

            {
                propositions && client ? (
                    propositions.map((propo:any, i:number) => {
                        if(propo.meta && (propo.meta.status === "validated" || propo.meta.status === "shortlisted" || propo.meta.status === "refused") && propo.project.meta.status !== "started" && propo.project.meta.status !== "ended") {
                            return (
                                <div className={Style.container} key={i}>
                                    <div className={Style.containCardClient}>
                                        <div className={Style.detailsCard}>
                                            <div className={Style.width}>
                                                <h1 className={Style.title}>{propo.project.title}</h1>
                                                <div className={Style.detailsMission}>
                                                    <div>
                                                        <h6>Lieu de travail</h6>
                                                        <p>{propo.project.localisation.label}</p>
                                                    </div>
                                                    <div>
                                                        <h6>Début de la mission</h6>
                                                        <p>Dès que Possible</p>
                                                    </div>
                                                    <div>
                                                        <h6>Durée de la mission</h6>
                                                        {
                                                            propo.project.duration.map((duration: any, i:number) => (
                                                                <p key={i}>{duration.label}</p>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={Style.barrehorizontal}></div>
                                            <div className={Style.statusClient}>
                                                <div className={Style.containProfil}>
                                                    <div className={Style.imgProfil}>
                                                        <img src={profil} alt="profil"/>
                                                        <img src={profil} alt="profil"/>
                                                        <img src={profil} alt="profil"/>
                                                    </div>
                                                    <p>Sourcing réalisé</p>
                                                    <button >Sélectionner</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={ !client ? Style.status : Style.hidden}>
                                        <button onClick={redirect}>Répondre</button> 
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return 'toto'
                        }
                    })
                        
                ) : (
                    propositions.map((propo:any, i:number) => {
                        if((propo.meta.status === "sent" && propo.project.meta.status === "validated") || (propo.meta.status === "validated" && propo.project.meta.status === "validated")){
                            return (
                                <div className={Style.containerBlue} key={i}>
                                    <div className={Style.containCard}>
                                        <div className={Style.detailsCard}>
                                            <div className={Style.width}>  
                                                <h1 className={Style.title}>{propo.project.title}</h1>
                                                <div className={Style.detailsMission} onClick={e =>redirectWaiting(propo.project._id)}>
                                                    <div>
                                                        <h6>Lieu de travail</h6>
                                                        <p>{propo.project.localisation.label}</p>
                                                    </div>
                                                    <div>
                                                        <h6>Début de la mission</h6>
                                                        <p>Dès que Possible</p>
                                                    </div>
                                                    <div>
                                                        <h6>Durée de la mission</h6>
                                                        {
                                                            propo.project.duration.map((duration: any, i:number) => (
                                                                <p key={i}>{duration.label}</p>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                                        
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Style.status}>
                                        <p>En attente de délibération</p>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return  <p>En attente de délibération</p>
                        }
                    })
                )
            }
                
            {/* À PARTIR D'ICI C'EST POUR "EN ATTENTE DE VALIDATION" */}
            { 
                client && missions ? (
                    missions.map((mission:any, i:number) => {
                        if((mission.meta.status === "initial" && mission.propositionList.length === 0) || (mission.meta.status === "validated" && mission.propositionList.length === 0)){
                            
                            return (
                                <div className={Style.containerBlue} key={i}>
                                    <div className={Style.containCard}>
                                        <div className={Style.detailsCard}>
                                            <div className={Style.width}>
                                                
                                                {
                                                    !client ? (
                                                        <h1 className={Style.title}>{mission.project.title}</h1>
                                                    )
                                                    : (
                                                        <h1 className={Style.title}>{mission.title}</h1>
                                                    )
                                                }
                                                {
                                                    !client
                                                        ?
                                                            <div className={Style.detailsMission} onClick={e =>redirectWaiting(mission.project._id)}>
                                                                <div>
                                                                    <h6>Lieu de travail</h6>
                                                                    <p>Paris</p>
                                                                </div>
                                                                <div>
                                                                    <h6>Début de la mission</h6>
                                                                    <p>Dès que Possible</p>
                                                                </div>
                                                                <div>
                                                                    <h6>Durée de la mission</h6>
                                                                    <p>3 a 5 mois</p>
                                                                </div>
                                                            </div>
                                                        :
                                                            <div className={Style.detailsMission} onClick={e => rediretsourcing(mission._id)}>
                                                                <div>
                                                                    <h6>Lieu de travail</h6>
                                                                    <p>{mission.localisation.label}</p>
                                                                </div>
                                                                <div>
                                                                    <h6>Début de la mission</h6>
                                                                    <p>Dès que Possible</p>
                                                                </div>
                                                                <div>
                                                                    <h6>Durée de la mission</h6>
                                                                    {
                                                                        mission.duration.map((duration:any, i:number) => (
                                                                            <p key={i}>{duration.label}</p>
                                                                        ))
                                                                    }
                                                                </div>
                                                            </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        client
                                            ?
                                                <div className={Style.status}>
                                                    <p>Proposition envoyée</p>
                                                    <p>Sourcing en cours</p>
                                                </div>
                    
                                            :
                                                <div className={Style.status}>
                                                    <p>En attente de délibération</p>
                                                </div>
                                    }
                                </div>
                            )
                        }
                        else {
                            return  <p>En attente de délibération</p>
                        }
                    })
                ) : (
                    <p>En attente de délibération</p>
                )
               
            }
            
            {/* À PARTIR D'ICI C'EST POUR "VALIDATION EN COURS" */}
            {   
                !client && propositions ? (
                    propositions.map((propo:any, i:number) => {
                            if(propo.meta.status && propo.meta.status === "shortlisted" && propo.project.meta.status === "validated") {
                                return (
                                    <div className={ client ? Style.hidden : Style.containerLinear} key={i}>
                                        <div className={Style.containCard}>
                                            <div className={Style.detailsCard}>
                                                <div className={Style.width}>
                                                    <h1 className={Style.title}>{propo.project.title}</h1>
                                                    <div className={Style.detailsMission}>
                                                        <div>
                                                            <h6>Lieu de travail</h6>
                                                            <p>{propo.project.localisation.label}</p>
                                                        </div>
                                                        <div>
                                                            <h6>Début de la mission</h6>
                                                            <p>Dès que Possible</p>
                                                        </div>
                                                        <div>
                                                            <h6>Durée de la mission</h6>
                                                            {
                                                                propo.project.duration.map((duration: any, i:number) => (
                                                                    <p key={i}>{duration.label}</p>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Style.status}>
                                                <p>Validation en cours</p>
                                        </div>
                                    </div>
                                )
                            }
                            else {
                                return  <p>En attente de délibération</p>
                            }
                        })
                )
                : (
                    <p>En attente de délibération</p>
                )
                
            }
            

        </div>
    )
}

export default CardWaiting
