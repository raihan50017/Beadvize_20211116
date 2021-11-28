import React from 'react'
import Style from '../MyMissions/MyMissions.module.scss'
import bell from '../../../assets/Dashboard/iconBell.svg'
import tiret from '../../../assets/Dashboard/tiret.svg'
import etude from '../../../assets/Dashboard/etude.svg'
import chrono from '../../../assets/Dashboard/chrono.svg'
import { useHistory } from 'react-router'


const MyMission = ({isClient, missions, propositions} : any) => {

    const history = useHistory()
    // const [seeMission] = useState(true)
    const isConsultant = true
    const redirectMissionBeProcess = (id:string) => {
        history.push({
            pathname: '/detailMission',
            state: {
                green: true,
                id,
                isConsultant
            }
        })
    }

    const redirectCurrent = (id:string) => {
        history.push({
            pathname: '/detailMission',
            state: {
                gray: true,
                id,
                isConsultant
            }
        })
    }

    const redirectCurrent2 = () => {
        history.push({
            pathname: '/facturation',
        })
    }

    const redirectProfils = (id:string) => {
        history.push({
            pathname: '/profilsConsultant',
            state: id
        })
    }

    const redirectLookMission = (id:string) => {
        history.push({
            pathname: 'factureClient',
            state: id
        })
    }

    const rediretsourcing = (id:string) => {
        history.push({
            pathname: '/sourcing',
            state: id
        })
    }

    return (
        <div className={Style.container}>
            <div className={Style.containMissions}>
                <h1 className={Style.title}>Mes Missions</h1>
                <div className={Style.barre}></div>
                <h5 className={Style.subTitle}><img src={etude} alt="3 points"/> À L’ÉTUDE</h5>
                {
                    !isClient && propositions
                        ?
                            <div className={Style.missions}>
                                <h6 className={Style.titleMission}><img src={tiret} alt="tiret en forme de bulle"/>  Les propositions que j’ai reçu : <span>À traiter</span><img src={bell} alt="cloche" /></h6>
                                {
                                    propositions.map((propo:any, i:number) => {
                                        if(propo.meta && propo.meta.status === "hidden") {
                                            return (
                                                <div className={Style.detailMission} key={i}>
                                                    <p>{propo.project.title}</p>
                                                    <p>Forfait</p>
                                                    <p>3 a 5 mois</p>
                                                    <button className={Style.buttonGreen} onClick={() => redirectMissionBeProcess(propo._id)}>Voir mission</button>
                                                </div>
                                            )
                                        }
                                        else {
                                            return null
                                        }
                                    })
                                }
                               
                            </div>
                        :
                           missions
                            ?
                            <div className={Style.missions}>
                                <h6 className={Style.titleMission}>En cours de validation: </h6>
                                {
                                    missions.map((mission: any, i:number) => {
                                        if(mission.meta.status === "initial" && mission.propositionList.length === 0) {
                                            return (
                                                <div className={Style.detailMissionBlue} key={i}>
                                                    <p>{mission.title}</p>
                                                    <p>{mission.localisation.label}</p>
                                                    {
                                                        mission.duration.map((date: any, i:number) => (
                                                            <p key={i}>{date.label}</p>
                                                        ))
                                                    }
                                                    <button className={Style.buttonBlue} onClick={() => rediretsourcing(mission._id)}>Voir mission</button>
                                                </div>
                                            )
                                        }
                                        else {
                                            return null
                                        }
                                    })
                                }
                            </div>
                            : null
                }
                {
                    !isClient && propositions ? (
                        <div className={Style.missions}>
                            <h6 className={Style.titleMission}> <img src={tiret} alt="tiret en forme de bulle"/>  Les candidatures que j’ai envoyé : en délibération</h6>
                            {
                                propositions.map((propo:any, i:number) => {
                                    if(propo.meta && ( propo.meta.status === "validated" || propo.meta.status === "sent" || propo.meta.status === "shortlisted") && propo.project.meta.status !== "started" && propo.project.meta.status !== "ended") {
                                        return (
                                            <div className={Style.detailMissionBlue} key={i}>
                                                <p>{propo.project.title}</p>
                                                <p>Forfait</p>
                                                <p>3 a 5 mois</p>
                                                <button className={Style.buttonBlue} onClick={e => redirectCurrent(propo._id)}>Voir mission</button>
                                            </div>
                                        )
                                    }
                                    else {
                                        return null
                                    }
                                })
                            } 
                        </div>
                    )
                    : null
                }

                {
                    !isClient && missions
                        ?
                            <div className={Style.missions}>
                                <h6 className={Style.titleMission}> <img src={tiret} alt="tiret en forme de bulle"/>  Les missions que j’ai proposé : validation en cours</h6>
                                {/* {
                                    missions.map((mission:any, i:number) => {
                                        if(mission.meta.status === "sent") {
                                            return (
                                                <div className={Style.detailMissionBlue} key={i}>
                                                    <p>{mission.project.title}</p>
                                                    <p>Forfait</p>
                                                    <p>3 a 5 mois</p>
                                                    <button className={Style.buttonBlue} onClick={e => redirectCurrent(mission._id)} >Voir mission</button>
                                                </div>
                                            )
                                        }
                                        else {
                                            return null
                                        }
                                    })
                                } */}
                            </div>
                        :
                            missions
                                ?
                                    <div className={Style.missions}>
                                        <h6 className={Style.titleMission}>Sourcing en cours <img src={chrono} alt="un chronomètre"/></h6>
                                        {
                                            missions.map((mission: any, index:number) => {
                                                if((mission.meta.status === "validated" && mission.propositionList.length === 0)) {
                                                    return (
                                                        <div className={Style.detailMissionBlue} key={index} >
                                                            <p>{mission.title}</p>
                                                            <p>{mission.localisation.label}</p>
                                                            {
                                                                mission.duration.map((date: any, i:number) => (
                                                                    <p key={i}>{date.label}</p>
                                                                ))
                                                            }
                                                            <button className={Style.buttonBlue} onClick={() => rediretsourcing(mission._id)}>Voir mission</button>
                                                        </div>
                                                    )
                                                } 
                                                else {
                                                    return null
                                                }
                                                
                                            })
                                        }
                                        {
                                            propositions.map((propo: any, index:number) => {
                                                if((propo.project.meta.status === "validated" && propo.project.propositionList.length === 0) || (propo.project.meta.status === "validated" && propo.meta.status !== "validated" && propo.meta.status !== "shortlisted")) {
                                                    return (
                                                        <div className={Style.detailMissionBlue} key={index} >
                                                            <p>{propo.project.title}</p>
                                                            <p>{propo.project.localisation.label}</p>
                                                            {
                                                                propo.project.duration.map((date: any, i:number) => (
                                                                    <p key={i}>{date.label}</p>
                                                                ))
                                                            }
                                                            <button className={Style.buttonBlue} onClick={() => rediretsourcing(propo.project._id)}>Voir mission</button>
                                                        </div>
                                                    )
                                                }
                                                else {
                                                    return null
                                                }
                                                
                                            })
                                        }
                                    </div>
                            :
                                    null
                }

                <div className={Style.missions}>
                    {
                         isClient && propositions
                         ?
                         <div className={Style.missions}>
                             <h6 className={Style.titleMission}><span>Consultant à sélectionner</span><img src={bell} alt="cloche" /></h6>
                             {
                                 propositions.map((propo: any, i:number) => {
                                    if(propo.meta && (propo.meta.status === "validated" || propo.meta.status === "shortlisted") && propo.project.meta.status !== "started" && propo.project.meta.status !== "ended") {
                                        return (
                                            <div className={Style.detailMission} key={i}>
                                                <p>{propo.project.title}</p>
                                                <p>{propo.project.localisation.label}</p>
                                                {
                                                    propo.project.duration.map((date: any, i:number) => (
                                                        <p key={i}>{date.label}</p>
                                                    ))
                                                }
                                                <button className={Style.buttonGreen} onClick={e => redirectProfils(propo.project._id)}>Voir profil</button>
                                            </div>
                                        )
                                    }
                                    else {
                                        return null
                                    }
                                 })
                             }
                         </div>
                         : null
                    }
                </div>
               
                {
                    !isClient && missions
                        ?
                            <div className={Style.missions}>
                                <h5 className={Style.subTitle}><img src={etude} alt="3 points"/> EN COURS</h5>
                                {
                                    missions.map((mission:any, i:number) => {
                                        if(mission.meta && mission.meta.status === "started") {
                                            return (
                                                <div className={Style.detailMissionBlue} key={i}>
                                                    <p>{mission.title}</p>
                                                    <p>Forfait</p>
                                                    <p>20.12.21</p>
                                                    <button className={Style.buttonBlue} onClick={redirectCurrent2}>Voir mission</button>
                                                </div>
                                            )
                                        }
                                        else {
                                            return null
                                        }
                                    })
                                }
                               
                            </div>
                        :
                            missions
                                ?
                                <div className={Style.missions}>
                                    <h5 className={Style.subTitle}><img src={etude} alt="3 points"/> EN COURS</h5>
                                        {
                                            missions.map((mission: any, i:number) => {
                                                if(mission.meta && mission.meta.status === "started") {
                                                    return (
                                                        <div className={Style.detailMissionBlue} key={i} >
                                                            <p>{mission.title}</p>
                                                            <p>{mission.localisation.label}</p>
                                                            {
                                                                mission.duration.map((date: any, i:number) => (
                                                                    <p key={i}>{date.label}</p>
                                                                ))
                                                            }
                                                            <button className={Style.buttonBlue} onClick={() => redirectLookMission(mission._id)}>Voir mission</button>
                                                        </div>
                                                    )
                                                }
                                                else {
                                                    return null
                                                }     
                                            })
                                        }
                                    </div>
                            :
                                    null
                }
            </div>
        </div>
    )
}

export default MyMission
