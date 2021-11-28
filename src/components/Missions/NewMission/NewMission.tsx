import React, { useState } from 'react'
import Style from './NewMission.module.scss'

const NewMission = ({setValidateMission}:any) => {


    const [mission, setMission] = useState({
        title: "",
        enterprise: "",
        contact: "",
        email: "",
        phone: "",
        description: "",
        billingMode: "Forfait",
        budgetMin: ""
    })
    const [budget, setBudget] = useState<boolean>(false)
    const [show, setShow] = useState(false)

    const handleChange = (e:any) => {
    
        setMission({
            ...mission,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e:any) => {
        e.preventDefault()
        console.log(mission)
        // setValidateMission(true)
    }

    const setBillingModeForfait= () => {
        setMission({
            ...mission,
            billingMode: "Forfait"
        })
    }

    const setBillingModeRegie= () => {
        setMission({
            ...mission,
            billingMode: "Regie"
        })
    }

    return (
        <div className={Style.containAll}>
            <div className={Style.container}>
                <div className={Style.form}>
                    <h1 className={Style.title}>Ma proposition de projet avec mon client</h1>
                    <div className={Style.barre}></div>
                    <form onSubmit={submit}>
                        <div className={Style.inputTitleGreen}>
                            <label htmlFor="title">Titre</label>
                            <input type="text" name="title" onChange={e => handleChange(e)}/>
                        </div>
                        <div className={Style.input}>
                            <label htmlFor="enterprise">Entreprise</label>
                            <input type="text" name="enterprise" onChange={e => handleChange(e)}/>
                        </div>
                        <div className={Style.input}>
                            <label htmlFor="contact">Contact client</label>
                            <input type="text" name="contact" onChange={e => handleChange(e)}/>
                        </div>
                        <div className={Style.twoInput}>
                            <div className={Style.input}>
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" onChange={e => handleChange(e)}/>
                            </div>
                            <div className={Style.input}>
                                <label htmlFor="phone">Téléphone</label>
                                <input type="text" name="phone" onChange={e => handleChange(e)}/>
                            </div>
                        </div>
                        <div className={Style.inputDescription}>
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="" cols={10} rows={5} onChange={e => handleChange(e)}/>
                        </div>
                        <h6 className={Style.question}>Sur quel mode de facturation je vais fonctionner?</h6>
                    <div className={Style.facturation}>
                        <div className={!show ? Style.forfait : Style.regie}>
                            <button className={Style.buttonForfait} onClick={e => { e.preventDefault(); setShow(false); setBillingModeForfait()}}>Forfait</button>
                        </div>
                        <div className={show ? Style.forfait : Style.regie}>
                            <button className={Style.buttonForfait} onClick={e => { e.preventDefault(); setShow(true); setBillingModeRegie()}}>Régie</button>
                        </div>
                    </div>
                    {
                        !show ?

                            !budget
                                ?
                                    <div className={Style.answer}>
                                        <p>Je peux évaluer mon budget TTC </p>
                                        <button className={Style.yes} onClick={e => {setBudget(true)}} >Oui</button>
                                        <button className={Style.notYet}>Pas encore</button>
                                    </div>
                                :
                                    <div className={Style.answer}>
                                        <p>Mon budget TTC est de</p>
                                        <input type="number" name="budgetMin" onChange={e => {handleChange(e)}} />
                                        <div>
                                            <label htmlFor="mois">Mois</label>
                                            <select name="" id="mois"></select>
                                        </div>
                                    </div>
                            :
                                !budget
                                    ?
                                        <div className={Style.answer}>
                                            <p>Je peux évaluer mon taux horaire journalier </p>
                                            <button className={Style.yes} onClick={e => {setBudget(true)}} >Oui</button>
                                            <button className={Style.notYet}>Pas encore</button>
                                        </div>
                                :

                                    <div className={Style.answer}>
                                        <p>j'évalue en TTC mon budget TJM à :</p>
                                        <input type="number" name="budgetMin" onChange={e => handleChange(e)} />
                                    </div>
                    }
                        <div className={Style.checkbox}>
                            <input type="checkbox" name="contact"/>
                            <label htmlFor="contact">Je souhaite être contacté par l’équipe Beadvize au sujet de cette nouvelle mission </label>
                        </div>
                        <button className={Style.button}>Envoyer</button>
                    </form>
                </div>
            </div>
            <div className={Style.advantage}>
                <div className={Style.containAdv}>
                    <h1>Les avantages de fonctionner avec BeAdvize dans vos projets clients </h1>
                    <div className={Style.barreWhite}></div>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
                </div>
            </div>
        </div>
    )
}

export default NewMission
