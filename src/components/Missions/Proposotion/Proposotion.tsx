import React, { useState } from 'react'
import { useEffect } from 'react'
import history from '../../../history'
import { createProposition, updateProposition } from '../../../Utilities/request'
import Style from './Proposotion.module.scss'

const Proposotion = ({setSend, mission, proposition}:any) => {

    const redirect = () => {
        history.push('/missionsFreelance')
        window.location.reload()
    }

    const [form, setForm] = useState({
        feedback: "",
        pitch: ""
    })

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
                setSend(true)
            })
            .catch(err => {console.log(err)})
        })
        .catch(err => {
            console.log(err)
        })
    }

    const registerProposition = () => {
        const data = updateProposition(mission, form)
        data.then(res => {
           if(res) {
            redirect()
           }
        })
        .catch(err => {
            console.log("error", err)
        })
    }

    // retester l'envoie de proposition (update ...form)
    useEffect(() => {
        if((proposition && proposition.feedback) || (proposition && proposition.pitch)) {
            setForm({
                feedback: proposition.feedback,
                pitch: proposition.pitch
            })
        }
    }, [proposition])

    console.log(form)

    return (
        <div className={Style.container}>
            <div className={Style.containAll}>
                <div className={Style.containForm}>
                    <div>
                        <h1 className={Style.title}>Votre proposition</h1>
                        <div className={Style.barre}></div>
                        <div className={Style.inputdesc}>
                            <label>Vos retours sur cette mission : Interrogations, pertinence de votre profil, Intérêt professionnel</label>
                            <textarea cols={10} rows={5} name="feedback" value={form.feedback} onChange={handleChange}></textarea>
                        </div>
                        <div className={Style.inputdesc2}>
                            <label>Vos missions précédentes en lien avec le projet du client </label>
                            <textarea cols={10} rows={5} name="pitch" value={form.pitch} onChange={handleChange}></textarea>
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
                            <button className={Style.button2} onClick={e => {registerProposition()}} >Enregistrer et Quitter</button>
                        </div>              
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proposotion
