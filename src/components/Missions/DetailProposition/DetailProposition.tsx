import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import history from '../../../history'
import { createProposition, getPropositionById, updateProposition } from '../../../Utilities/request'
import Style from './DetailProposition.module.scss'

const DetailProposition = ({proposition, missionNotWon, mission}: any) => {

    const redirect = () => {
        history.push('/dashboardFreelance')
        window.location.reload()
    }

    const [propo, setProposition] = useState<any>({})
    const [updatePropo, setUpdate] = useState(false)
    const [form, setForm] = useState({})

    const getPropo = useCallback(() => {
        const data = getPropositionById(mission)
        data.then(res => {
            setProposition(res)
        })
        .catch(err => {
            console.log(err)
        })
    }, [mission])

    useEffect(() => (getPropo()), [getPropo])
   
console.log(propo.feedback)

    const handleChange = (e:any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submit = () => {

        const update = updateProposition(mission, form)
        update.then(res => {
            const send = createProposition(mission)
            send.then(res => {
                console.log(res)
            })
            .catch(err => {console.log(err)})
        })
        .catch(err => {
            console.log(err)
        })
    }


    return (
        <div className={Style.container}>
            <div className={Style.containAll}>
                {
                    updatePropo ? (
                        <div className={Style.containForm}>
                            <div>
                                <h1 className={Style.title}>Votre proposition</h1>
                                <div className={Style.barre}></div>
                                <div className={Style.inputdesc}>
                                    <label>Vos retours sur cette mission : Interrogations, pertinence de votre profil, Intérêt professionnel</label>
                                    <textarea cols={10} rows={5} name="feedback" defaultValue={propo.feedback} onChange={handleChange}></textarea>
                                </div>
                                <div className={Style.inputdesc2}>
                                    <label>Vos missions précédentes en lien avec le projet du client </label>
                                    <textarea cols={10} rows={5} name="pitch" defaultValue={propo.pitch} onChange={handleChange}></textarea>
                                </div>
                                <div className={Style.upload}>
                                    <h6>Ajouter un document</h6>
                                    <label htmlFor="file">Joindre</label>
                                    <input type="file" id="file"/>
                                </div> 
                                <h6>A quelle moment pouvez-vous commencer cette mission ?</h6>
                                <div className={Style.date}>
                                    <button>Immédiatement</button>
                                    <label htmlFor="date">Dès le </label>
                                    <input type="date" name="choosingDate" onChange={handleChange}/>
                                </div> 
                                <div className={Style.send}>
                                    <button className={Style.button1} onClick={e => {submit()}}>Envoyer</button>
                                    <button className={Style.buttonForm2} onClick={redirect} >Enregistrer et Quitter</button>
                                </div>              
                            </div>
                        </div>
                    )
                    : (
                        <div className={Style.containForm}>
                        <div>
                            {
                                missionNotWon 
                                    ?
                                        <h1 className={Style.titleNotWon}>Mission non remporté</h1>
                                    :
                                        null
                            }
                            <h1 className={Style.title}>Votre proposition</h1>
                            <div className={Style.barre}></div>
                            <div className={Style.inputdesc}>
                                <label>Vos retours sur cette mission : Interrogations, pertinence de votre profil, Intérêt professionnel</label>
                                {
                                    propo.feedback ? (
                                        <p>{propo.feedback}</p>
                                    )
                                    :
                                        null
                                }
                                
                            </div>
                            <div className={Style.inputdesc2}>
                                <label>Vos missions précédentes en lien avec le projet du client </label>
                                {
                                    propo.pitch ? (
                                        <p>{propo.pitch}</p>
                                    )
                                    :
                                        null
                                }
                            </div>
                            {
                                !proposition
    
                                    ?
                                        <div className={Style.facturation}>
                                            <h6>Mode de facturation</h6>
                                            <p>Forfait</p>
                                        </div>
                                    :
                                        <div className={Style.TJM}>
                                            <div className={Style.detailTjm}>
                                                <h6>TJM</h6>
                                                <p className={Style.fontWeight}>450,00 €</p>
                                            </div>
                                            <div className={Style.detailTjm}>
                                                <h6>Disponibilite</h6>
                                                <p>Semaine prochaine</p>
                                            </div>
                                        </div>
                            }
    
                            {
                                missionNotWon 
                                    ?
                                        <div className={Style.containTab}>
                                            <div>
                                                <h6 className={Style.title}>Chiffrage</h6>
                                                <div className={Style.secondBarre}></div>
                                                <div className={Style.tab}>
                                                    <table>
                                                        <thead>
                                                            <tr className={Style.row}>
                                                                <th>Etape</th>
                                                                <th>Description</th>
                                                                <th>Montant HT</th>
                                                                <th>Montant TTC</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className={Style.row}>
                                                                <td className={Style.fontWeight}>#1</td>
                                                                <td>Lorem ipsum dolor sit amet, consetetur </td>
                                                                <td className={Style.fontWeight}>375,00 €</td>
                                                                <td className={Style.fontWeight}>450,00 €</td>
                                                            </tr>
                                                            <tr className={Style.row}>
                                                                <td className={Style.fontWeight}>#2</td>
                                                                <td>Lorem ipsum dolor sit amet, consetetur </td>
                                                                <td className={Style.fontWeight}>7 916,67 €</td>
                                                                <td className={Style.fontWeight}>9500,00 €</td>
                                                            </tr>
                                                            <tr className={Style.row}>
                                                                <td className={Style.fontWeight}>#3</td>
                                                                <td>Lorem ipsum dolor sit amet, consetetur </td>
                                                                <td className={Style.fontWeight}>7 916,67 €</td>
                                                                <td className={Style.fontWeight}>9500,00 €</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className={Style.detailTotal}>
                                                    <h6>Total Facture </h6>
                                                    <p>19 450,00 €</p>
                                                </div>
                                                <div className={Style.containButton}>
                                                    <Link className={Style.button} to={{
                                                        pathname:"/dashboardFreelance"
                                                    }}>
                                                        Retour au dashboard
                                                    </Link>
                                                </div>  
                                            </div>
                                        </div>
                                    :
                                        null
                            }
                            
                            <div className={!proposition ? Style.send : Style.hidden}>
                                <button className={Style.button1} onClick={e => {redirect()}}>Retour au Dashboard</button>
                                <button className={Style.button2} onClick={e => {setUpdate(true)}} >Modifier</button>
                            </div>              
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default DetailProposition
