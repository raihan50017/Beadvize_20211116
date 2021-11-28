import React, { useState } from 'react'
import Style from './RegisterForm3Client.module.scss'
import useForm from './ValidateForm/useFormstep3/useForm'
import Validate from './ValidateForm/useFormstep3/Validate'
import {updateUser} from '../../../Utilities/request'

const RegisterForm3Client = ({next, step, updateProfil}:any) => {

    const [index, setIndex] = useState<number>()

    const buttons = [
        {
            name: "Par Email",
            class: Style.button,
            classBlue: Style.buttonBlue
        },
        {
            name: "Par Téléphone",
            class: Style.button,
            classBlue: Style.buttonBlue
        }
    ]

    function submit() {
        let accessToken = localStorage.getItem('register')
        if(updateProfil) {
            accessToken = localStorage.getItem('currentUser')
        }
        let config = 
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }
        let comp = {
            "signUpStep": step,
            company: {
                companyName : (valuesStep3Client as any).companyName,
                companyCode: (valuesStep3Client as any).companyCode,
                phone: (valuesStep3Client as any).phone,
            }
        }
        let data =  updateUser(comp, config)
        data.then(res => {
            console.log(res)
            next() 
        })
        .catch(err => {
            console.log(err)
        })
    }

    const { handleChangeStep3Client, errors, handleSubmit, setValuesStep3Client, valuesStep3Client} = useForm(submit, Validate)

    const getContact = (e:any) => {
        e.preventDefault()
        setValuesStep3Client({
            ...valuesStep3Client,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.containAll}>
                    <h1 className={Style.title}>Mes informations de contact</h1>
                    <div className={Style.barre}></div>
                    <form onSubmit={handleSubmit} noValidate>
                        <h3 className={Style.subTitle}>Votre Entreprise</h3>
                        <div className={Style.input}>
                            <label>Raison Sociale</label>
                            <input type="text" name="companyName" onChange={handleChangeStep3Client}/>
                        </div>
                        {errors.companyName && <p className={Style.errors}>{errors.companyName}</p>}
                        <h3 className={Style.subTitle}>Vos coordonnées</h3>
                        <div className={Style.input}>
                            <label>Adresse</label>
                            <input type="text" name="companyCode"  onChange={handleChangeStep3Client}/>
                        </div>
                        {errors.companyCode && <p className={Style.errors}>{errors.companyCode}</p>}
                        <h6 className={Style.subTitle}> Comment souhaitez-vous être contacté ?</h6>
                        <div className={Style.containButton}>
                            {
                                buttons.map((button, i) => (
                                    <button name="phone" key={i} value={button.name} className={index === i ? button.classBlue : button.class} onClick={e => {setIndex(i); getContact(e)}}>{button.name}</button>        
                                ))
                            }
                        </div>
                        {errors.phone && <p className={Style.errors}>{errors.phone}</p>}
                        <div className={Style.containButtonValidate}>
                            <button className={Style.buttonValidate}>Valider mon profil client</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default RegisterForm3Client
