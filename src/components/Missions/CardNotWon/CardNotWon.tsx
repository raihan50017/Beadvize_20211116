import React from 'react'
import { useHistory } from 'react-router'
import Style from './CardNotWon.module.scss'


const CardNotWon = ({propositions}:any) => {

    const history = useHistory()

    const redirect = (idPropo:string, idProject:string) => {
        history.push({
            pathname: '/MissionNotWon',
            state: {
                idPropo: idPropo,
                idProject : idProject
            }
        })
    }

    return (
        <div className={Style.width}>
            {
                propositions.map((propo:any, i:number) => {
                    if(propo.meta && (propo.meta.status === "rejected" || propo.meta.status === "refused")) {
                        console.log(propo)
                        return (
                            <div className={Style.container} key={i}>
                                <div className={Style.containCard}>
                                    <div className={Style.detailsCard} onClick={e => redirect(propo._id, propo.project._id)} >     
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
                                                        propo.project.duration.map((duration:any, i:number) => (
                                                            <p key={i}>{duration.value}</p>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Style.status}>
                                        <p>Mission non remportée</p>
                                </div>
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
}

export default CardNotWon
