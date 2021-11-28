import React, { useState } from 'react'
import Style from './RegisterForm4.module.scss'
import bin from '../../../assets/Auth/Bin.svg'
// import {updateUser} from '../../../untils/request'
import Validate from './ValidateForm//useFormStep4/Validate'
import ValidateExp from './ValidateForm//useFormStep4/ValidateExp'
import useForm from './ValidateForm//useFormStep4/useForm'
import history from '../../../history'


const RegisterForm4 = ({idUser}:any) => {

    const [experiences, setExperiences] = useState<object[]>([])

    let myRef: any
    // eslint-disable-next-line 
    // const update = async (id:string, user:Object ) => {
    //     const obj = {
    //         "keysElements": {
    //             presentation,
    //             EnteEnterpriseExp: experiences
    //         }
    //     }
    //     const userUpdated = await updateUser(id, obj)
    //     return userUpdated
    // }


    function submit() {
       
        // let data = update(idUser, experience)
        // data.then(res => {
        //   if(res._id) {
        //     history.push('/')
        //     window.location.reload()
        //   }
        // })
        // .catch(err => {
        //     console.log(err)
        // })
        history.push('/')
        //window.location.reload() RBE
    }

    const getExp = () => {
        setExperiences(arr => [...arr, experience])
        myRef.reset()
        if(experiences.length >= 1) {
            setPresentation({
                ...presentation,
                exp: true
            })
        }
        setExperience({ 
            enterprise: "",
            title: "",
            freeLance: "",
            positionCurrently: "",
            startOfExp: "",
            endOfExp: "",
            description: "",
            skillsImplemented: ""
        })
    }

    
    const {
        errorsExp, 
        errors, 
        handleSubmit, 
        experience, 
        getCheck, 
        handleChangeExp, 
        handleChangePresentation, 
        presentation, 
        handleSubmitExp, 
        setExperience, 
        setPresentation
    } = useForm(submit, Validate, ValidateExp, getExp, experiences)

    return (
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.containAll}>
                    <h1 className={Style.title}>Les éléments clés de mon profil BeAdvize</h1>
                    <div className={Style.barre}></div>
                    <h3 className={Style.subTitle}>Mes compétences en mots-clés (séparer les mots d’une virgule)</h3>
                    <h3 className={Style.subTitle}>#agile #organisation #RH #recrutement </h3>
                    <h3 className={Style.subTitle}>Ma présentation professionnelle en quelques mots et le type de mission que je recherche</h3>
                    <textarea cols={10} rows={5} name="presentation" className={Style.inputExp} onChange={handleChangePresentation} autoComplete="off"/>
                    {errors.presentation && <p className={Style.errors}>{errors.presentation}</p>}
                    <h3 className={Style.subTitle}>Mes 2 ou trois expériences les plus pertinentes</h3>
                    <h3 className={Style.secondTitle}>Ajouter / modifier une expérience</h3>
                    {
                        experiences.map((experience, i) => (
                            <form onSubmit={handleSubmitExp} ref={(el) => myRef = el} key={i}>
                                <div className={Style.input}>
                                    <label>Entreprise</label>
                                    <input type="text" name="enterprise" value={(experiences[i] as any).enterprise} disabled/>
                                </div>
                                
                                <div className={Style.input}>
                                    <label>Titre</label>
                                    <input type="text" name="title" value={(experiences[i] as any).title} disabled/>
                                </div>
                                
                                <div className={Style.check}>
                                    <input type="checkbox" name="freeLance"  checked={(experiences[i] as any).freeLance ? true : false} disabled/>
                                    <label>En tant que free-lance</label> 
                                </div>
                                <div className={Style.check}>
                                    <input type="checkbox" name="positionCurrently"  checked={(experiences[i] as any).positionCurrently ? true : false} disabled/>
                                    <label>J’occupe actuellement ce poste</label> 
                                </div>
                                <div className={Style.date}>
                                    <label>Début</label>
                                    <input type="text" name="startOfExp" value={(experiences[i] as any).startOfExp} disabled/>
                                    <label>Fin</label>
                                    <input type="text" name="endOfExp" value={(experiences[i] as any).endOfExp} disabled/>
                                </div>
                                
                                <div className={Style.description}>
                                    <label>Description</label>
                                    <textarea cols={10} rows={5} className={Style.inputExp} name="description" value={(experiences[i] as any).description} disabled/>
                                </div>
                                <div  className={Style.description}>
                                    <label>Compétences mises en oeuvres</label>
                                    <textarea cols={10} rows={5} className={Style.inputExp}  name="skillsImplemented" value={(experiences[i] as any).skillsImplemented} disabled/>
                                </div>
                                <div className={Style.buttonExperience}>
                                    <button className={Style.btnSupp}><img src={bin} alt="poubelle"/> Supprimer</button>
                                </div>
                            </form>
                        ))
                    }
                    <form onSubmit={handleSubmitExp} ref={(el) => myRef = el}>
                        <div className={Style.input}>
                            <label>Entreprise</label>
                            <input type="text" name="enterprise" onChange={handleChangeExp} autoComplete="off"/>
                        </div>
                        {errorsExp.enterprise && <p className={Style.errors}>{errorsExp.enterprise}</p>}
                        <div className={Style.input}>
                            <label>Titre</label>
                            <input type="text" name="title" onChange={handleChangeExp} autoComplete="off"/>
                        </div>
                        {errorsExp.title && <p className={Style.errors}>{errorsExp.title}</p>}
                        <div className={Style.check}>
                            <input type="checkbox" name="freeLance"  onClick={e => getCheck(e)}/>
                            <label>En tant que free-lance</label> 
                        </div>
                        <div className={Style.check}>
                            <input type="checkbox" name="positionCurrently"  onClick={e => getCheck(e)}/>
                            <label>J’occupe actuellement ce poste</label> 
                        </div>
                        <div className={Style.date}>
                            <label>Début</label>
                            <input type="text" name="startOfExp" onChange={handleChangeExp} autoComplete="off"/>
                            <label>Fin</label>
                            <input type="text" name="endOfExp" onChange={handleChangeExp} autoComplete="off"/>
                        </div>
                        {errorsExp.startOfExp && <p className={Style.errors}>{errorsExp.startOfExp}</p>}
                        {errorsExp.endOfExp && <p className={Style.errors}>{errorsExp.endOfExp}</p>}
                        <div className={Style.description}>
                            <label>Description</label>
                            <textarea cols={10} rows={5} className={Style.inputExp} name="description" onChange={handleChangeExp} autoComplete="off"/>
                        </div>
                        {errorsExp.description && <p className={Style.errors}>{errorsExp.description}</p>}
                        <div  className={Style.description}>
                            <label>Compétences mises en oeuvres</label>
                            <textarea cols={10} rows={5} className={Style.inputExp}  name="skillsImplemented" onChange={handleChangeExp} autoComplete="off"/>
                        </div>
                        {errorsExp.skillsImplemented && <p className={Style.errors}>{errorsExp.skillsImplemented}</p>}
                        <div className={Style.buttonExperience}>
                            <button className={Style.btnSupp}><img src={bin} alt="poubelle"/> Supprimer</button>
                            <div className={Style.btnExp}>
                                <button className={Style.btnStop}>Annuler</button>
                                <button type="submit" className={Style.btnValid}>Valider</button>
                            </div>
                        </div>
                    </form>
                    {errors.exp && <p className={Style.errors}>{errors.exp}</p> }
                    <form onSubmit={handleSubmit}>
                        <div className={Style.containBtn}>
                            <button className={Style.btnValidate} type="submit">Valider mon profil</button>
                            <button className={Style.btnLater}>Plus tard</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default RegisterForm4
