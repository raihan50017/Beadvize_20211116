import React, { useCallback, useEffect, useState } from 'react'
import Style from './CardProfil.module.scss'
import Profil from '../../../assets/Dashboard/profil.svg'
import { useHistory } from 'react-router'
import { getUser, shortlister, rejectProp, startMission } from '../../../Utilities/request'


const CardProfil = ({data}:any) => {
    
    const [show, setShow] = useState(false)
    const [shorlister, setShortlister] = useState(false)
    const [decline, setDecline] = useState(false)
    const history = useHistory()
    const [user, setUser] = useState<any>()

    const getConsultant = useCallback(() => {
        const result = getUser(data.consultantId)
        result.then(res => {
            console.log(res)
            setUser(res)
        })
        .catch(err => {
            console.log(err)
        })
    },[data.consultantId])

    useEffect(() => (getConsultant()),[getConsultant])
    useEffect(()=> {
        if(data.meta.status === "shortlisted") {
            setShortlister(true)
        }
        if(data.meta.status === "rejected") {
            setDecline(true)
        }
    }, [data.meta.status])

    const shortlistProposition = (id:string) => {
        const data = shortlister(id)
        data.then(res =>{
            setShortlister(true)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const rejectProposition = (id:string) => {
        const data = rejectProp(id)
        data.then(res =>{
            setDecline(true)
        })
        .catch(err => {
            console.log(err)
        })
    }


    const redirectFacture = () => {
        history.push({
            pathname:'factureClient',
            state: data.project._id
        })
    }
    
    const start = () => {
        const result = startMission(data.project._id)
        result.then(res => {
            redirectFacture()
        })
        .catch(err => {
            console.log(err)
        })
    }

    const redirectConsultant = (user:any) => {
        history.push({
           pathname: '/profil',
           state: user
        })
    }

    console.log(user)

    return (
        <div className={Style.all}>
            {
                !shorlister || decline
                    ?
                        <div className={ !decline ? Style.container : Style.containerGray}>
                            <div className={Style.containAll}>
                                <div className={Style.details}>
                                    <div className={Style.img}>
                                        <img src={Profil} alt="profil"/>
                                    </div>
                                    {
                                        user ? (
                                            <div className={Style.detailConsultant}>
                                                <button className={Style.button} onClick={e => redirectConsultant(user)}>{user.firstname} {" "} {user.lastname}{", "}<span>voir profil</span></button>
                                                <div className={Style.spaceBetween}>
                                                    <div>
                                                        <h6>Séniorité </h6>
                                                        <p>5 ans</p>
                                                    </div>
                                                    <div>
                                                        <h6>TJM</h6>
                                                        <p>{data.project.budgetMin}</p>
                                                    </div>
                                                    <div>
                                                        <h6>Disponibilité</h6>
                                                        <p>Immédiate</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        : (
                                            null
                                        )
                                    }
                                    
                                    {
                                        decline 
                                            ?
                                                <div className={Style.containButtons}>
                                                    <button className={Style.button2} onClick={e => {setShortlister(true); setDecline(false)}}>Shortlister</button>
                                                    <p>Candidature déclinée</p>
                                                </div>
                                            :
                                                <div className={Style.containButtons}>
                                                    <button className={Style.button1} onClick={e => {setDecline(true); rejectProposition(data._id)}}  >Décliner</button>
                                                    <button className={Style.button2} onClick={e => {setShortlister(true); setDecline(false); shortlistProposition(data._id)}}>Shortlister</button>
                                                </div>
                                    }
                                </div>
                                <div className={show && !decline ? Style.detailMission : Style.hidden}>
                                    <h6>Vos retours sur cette mission : Interrogations, pertinence de votre profil, Intérêt professionnel</h6>
                                    <p>{data.feedback}</p>
                                    <h6>Vos missions précédente en lien avec le projet du client </h6>
                                    <p>{data.pitch}</p>
                                </div> 
                                <div className={Style.showDetail}>
                                    {
                                        decline 
                                            ?
                                                <button onClick={e => {setShow(!show)}} disabled>Voir candidature</button>
                                            :
                                                <button onClick={e => {setShow(!show)}}>{show ? "Fermer" : "Voir candidature"}</button>
                                    }
                                </div>
                            </div>
                        </div>
                    :
                        <div className={ Style.containerBlue}>
                            {
                                user ? (
                                    <div className={Style.containAll}>
                                        <div className={Style.details}>
                                            <div className={Style.img}>
                                                <img src={Profil} alt="profil"/>
                                            </div>
                                            <div className={Style.detailConsultant}>
                                                <button className={Style.button} onClick={e => redirectConsultant(user)}>{user.firstname} {" "} {user.lastname}{", "} <span>voir profil</span></button>
                                                <div className={Style.spaceBetween}>
                                                    <div>
                                                        <h6>Séniorité </h6>
                                                        <p>5 ans</p>
                                                    </div>
                                                    <div>
                                                        <h6>TJM</h6>
                                                        <p>{data.dailyPrice}</p>
                                                    </div>
                                                    <div>
                                                        <h6>Disponibilité</h6>
                                                        <p>Immédiate</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={Style.barreHori}></div>
                                            <div className={Style.containButtons}>
                                                <h6>Candidature shortlistée </h6>
                                                <button className={Style.button1} onClick={!decline ? e => {start()} : undefined} >{decline ? "Shortlister" : "Démarrer la mission"}</button>
                                                <button className={Style.button2} onClick={e => {setDecline(true)}}>Décliner ce profil</button>
                                            </div>
                                        </div>
                                        <div className={show ? Style.detailMission : Style.hidden}>
                                            <h6>Vos retours sur cette mission : Interrogations, pertinence de votre profil, Intérêt professionnel</h6>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
                                            <h6>Vos missions précédente en lien avec le projet du client </h6>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
                                        </div> 
                                        <div className={Style.showDetail}>
                                            {
                                                decline 
                                                    ?
                                                        <button onClick={e => {setShow(!show)}} disabled>Voir candidature</button>
                                                    :
                                                        <button onClick={e => {setShow(!show)}}>{show ? "Fermer" : "Voir détails"}</button>
                                            }
                                        </div>
                                    </div>
                                )
                                : (
                                    null
                                )
                            }
                            
                        </div>
            }
        </div>
    )
}

export default CardProfil
