import React from 'react'
import Style from './CardCancelled.module.scss'

const CardCancelled = ({missions}:any) => {

    return (
        <div className={Style.width}>
            {   
                missions ? (
                    missions.map((mission:any, i:number) => {
                        if(mission.meta && mission.meta.status === "canceled") {
                            return(
                                <div className={Style.container}  key={i}>
                                    <div className={Style.containCard}>
                                        <div className={Style.detailsCard}>
                                            <div className={Style.width}>
                                                <h1 className={Style.title}>{mission.title}</h1>
                                                <div className={Style.detailsMission}>
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
                                                                <p key={i}>{duration.value}</p>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Style.status}>
                                        <p>Mission annulée</p>
                                    </div>
                                </div>
                            )
                        }
                        else if(mission.project && mission.project.meta.status === "canceled"){
                            return(
                                <div className={Style.container} key={i}>
                                    <div className={Style.containCard}>
                                        <div className={Style.detailsCard}>
                                            <div className={Style.width}>
                                                <h1 className={Style.title}>{mission.project.title}</h1>
                                                <div className={Style.detailsMission}>
                                                    <div>
                                                        <h6>Lieu de travail</h6>
                                                        <p>{mission.project.localisation.label}</p>
                                                    </div>
                                                    <div>
                                                        <h6>Début de la mission</h6>
                                                        <p>Dès que Possible</p>
                                                    </div>
                                                    <div>
                                                        <h6>Durée de la mission</h6>
                                                        {
                                                            mission.project.duration.map((duration:any, i:number) => (
                                                                <p key={i}>{duration.value}</p>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Style.status}>
                                        <p>Mission annulée</p>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return null
                        }
                    })
                ) : (
                    null
                )
            }
        </div>
    )
}

export default CardCancelled
