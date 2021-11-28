import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { endProject } from '../../../Utilities/request'
import Style from './CardCurrent.module.scss'

const CardCurrent = ({client, missions}: any) => {

    const end = (id:string) => {
        const data = endProject(id)
        data.then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    
    return (
        <div className={Style.width}>
            {
                missions ? (
                    missions.map((mission:any, i:number) => {
                        if((mission.meta && mission.meta.status === "started")) {
                            return (
                                <div className={Style.containerBlue} key={i}>
                                    <div className={Style.containCard}>
                                        <div className={Style.detailsCard}>
                                            <div className={Style.width} key={i}>
                                                <h1 className={Style.title}>{mission.title}</h1>
                                                <div className={Style.detailsMission}>
                                                    <div>
                                                        <h6 className={Style.total}>Total TTC</h6>
                                                        <p>19 450,00 €</p>
                                                    </div>
                                                    <div>
                                                        <h6>Départ</h6>
                                                        <p>20.12.21</p>
                                                    </div>
                                                    <div>
                                                        <h6>Factures</h6>
                                                    </div>
                                                    <div>
                                                        {
                                                            !client 
                                                                ?
                                                                    <Link  className={Style.button} to={{
                                                                        pathname: "/facturation",
                                                                    }}>Terminer la mission</Link>
                                                                :
                                                                    <Link onClick={e => end(mission._id)} className={Style.button} to={{
                                                                        pathname: "/factureClient",
                                                                    }}>Terminer la mission</Link>
                                                        }
                                                        
                                                    </div>
                                                </div>  
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Style.status}>
                                            <p>En cours</p>
                                    </div>
                                </div>
                            )
                            
                        }
                        else if((mission.project && mission.project.meta.status === "started")) {
                            return (
                                <div className={Style.containerBlue} key={i}>
                                    <div className={Style.containCard}>
                                        <div className={Style.detailsCard}>
                                            <div className={Style.width} key={i}>
                                                <h1 className={Style.title}>{mission.project.title}</h1>
                                                <div className={Style.detailsMission}>
                                                    <div>
                                                        <h6 className={Style.total}>Total TTC</h6>
                                                        <p>19 450,00 €</p>
                                                    </div>
                                                    <div>
                                                        <h6>Départ</h6>
                                                        <p>20.12.21</p>
                                                    </div>
                                                    <div>
                                                        <h6>Factures</h6>
                                                    </div>
                                                    <div>
                                                        {
                                                            !client 
                                                                ?
                                                                    <Link className={Style.button} to={{
                                                                        pathname: "/facturation",
                                                                    }}>Terminer la mission</Link>
                                                                :
                                                                    <Link className={Style.button} to={{
                                                                        pathname: "/factureClient",
                                                                    }}>Terminer la mission</Link>
                                                        }
                                                        
                                                    </div>
                                                </div>  
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Style.status}>
                                            <p>En cours</p>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return (
                                <h1 key={i}>Aucun projet en cours</h1>
                            )
                        }
    
                    })
                )
                : (
                   null
                )
            }
        </div>
        
    )
}

export default CardCurrent
