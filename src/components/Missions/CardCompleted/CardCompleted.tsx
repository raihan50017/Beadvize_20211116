import React from 'react'
import { Link } from 'react-router-dom'
import Style from './CardCompleted.module.scss'

const CardCompleted = ({client, missions}: any) => {

    const boolean = true

    return (
        <div className={Style.width}>
            {
                 missions.map((mission:any, i:number) => {
                     if(mission.meta && mission.meta.status === "ended") {
                         return (
                            <div className={Style.containerBlue} key={i}>
                                <div className={Style.containCard}>
                                    <div className={Style.detailsCard}>
                                        <div className={Style.width}>
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
                                                {
                                                    !client
                                                        ?
                                                            <div className={Style.button}>
                                                                <Link  to={{
                                                                    pathname:"/facturation",
                                                                    state: boolean
                                                                }} >Factures</Link>
                                                            </div>
                                                        :
                                                            <div className={Style.button}>
                                                                <Link  to={{
                                                                    pathname:"/factureClient",
                                                                    state: boolean
                                                                }} >Factures</Link>
                                                            </div>
                                                }
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                                <div className={Style.status}>
                                        <p>Terminé</p>
                                </div>
                            </div>
                         )
                     }
                     else if (mission.project && mission.project.meta.status === "ended") {
                        return (
                            <div className={Style.containerBlue} key={i}>
                                <div className={Style.containCard}>
                                    <div className={Style.detailsCard}>
                                        <div className={Style.width}>
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
                                                {
                                                    !client
                                                        ?
                                                            <div className={Style.button}>
                                                                <Link  to={{
                                                                    pathname:"/facturation",
                                                                    state: boolean
                                                                }} >Factures</Link>
                                                            </div>
                                                        :
                                                            <div className={Style.button}>
                                                                <Link  to={{
                                                                    pathname:"/factureClient",
                                                                    state: boolean
                                                                }} >Factures</Link>
                                                            </div>
                                                }
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                                <div className={Style.status}>
                                        <p>Terminé</p>
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

export default CardCompleted
