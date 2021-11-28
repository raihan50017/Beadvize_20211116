import React, {useRef, useState} from 'react'
import Style from './RegisterForm2Client.module.scss'
import useForm from './ValidateForm/useFormstep2/useForm'
import Validate from './ValidateForm/useFormstep2/Validate'
import {hidden, updateUser} from '../../../Utilities/request'
import CreatableSelect from 'react-select/creatable';   
import { durationItems, place, technicalSkillsItems, seniority, frequency, startProject } from '../../../Utilities/options'
import Geosuggest, { Suggest } from 'react-geosuggest';
// import './RegisterForm2Client.css'

const RegisterForm2Client = ({next, step, updateProfil}:any) => {

    const geosuggestEl = useRef(null);
    const [showForm, setshowForm] = useState(false)
    
        const submit =  async () => {
            alert('submit')
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
            let signupStep = {
                "signUpStep": step
            }

            let data =  hidden(valuesSecondStepClient, config)
            data.then(res => {
                alert('envoi requete')
                let changeStep = updateUser(signupStep, config)
                changeStep.then(result => {
                    alert('envoi ok')
                    next()
                })
                .catch(err => {
                    console.log(err)
                    alert('envoi KO')
                }) 
            })
            .catch(err => {
                console.log(err)
            })
    }

    const setTechnicalSkills = (techni:any) => {
        setValuesSecondStepClient({
            ...valuesSecondStepClient,
            technicalSkills: techni
        })
    }
    const setDuration = (duration: any) => {
        setValuesSecondStepClient({
            ...valuesSecondStepClient,
            duration: duration
        })
    }

    const onSuggestSelect = (suggest: Suggest) => {
        if(suggest) {
            setValuesSecondStepClient({
                ...valuesSecondStepClient,
                localisation: {
                    label: suggest.label,
                    location: {
                        lat: suggest.location.lat,
                        lng: suggest.location.lng
                    }
                }
                
            })
        }
    };

    const setPlace = (places:any) => {
        setValuesSecondStepClient({
            ...valuesSecondStepClient,
            place: places
        })
    }

/*     const setBillingModeForfait = () => {
        setValuesSecondStepClient({
            ...valuesSecondStepClient,
            billingMode: "Forfait"
        })
    }

    const setBillingModeRegie = () => {
        setValuesSecondStepClient({
            ...valuesSecondStepClient,
            billingMode: "Regie"
        })
    } */
    
    const { handleChangeSecondStepClient, errors, handleSubmit, valuesSecondStepClient, setValuesSecondStepClient} = useForm(submit, Validate)

    

    return (
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.containAll}>
                    <h1 className={Style.title}>Mon projet</h1>
                    <div className={Style.barre}></div>
                    <form>
                        <div className={Style.inputTitre}>
                            <label>Titre</label>
                            <input type="text" name="title" onChange={handleChangeSecondStepClient}/>
                        </div>
                        {errors.title && <p className={Style.errors}>{errors.title}</p>}
                        <div className={Style.inputDescription}>
                            <label>Description</label>
                            <textarea name="description" id="" cols={10} rows={5} onChange={handleChangeSecondStepClient}></textarea>
                        </div>
                        {errors.description && <p className={Style.errors}>{errors.description}</p>}
                        <div className={Style.inputDescription}>
                            <label>Quelles compétences je cherche ?</label>
                            {/* <textarea name="searchSkills" id="" cols={10} rows={5} onChange={handleChangeSecondStepClient}></textarea> */}
                             <CreatableSelect
                                name="functionalSkills"
                                className={Style.select}
                                //classNamePrefix="form-control"
                                isMulti={true} 
                                closeMenuOnSelect = {true}
                                options={technicalSkillsItems}
                                noOptionsMessage={() => 'Item non disponible'}
                                placeholder='Compétences fonctionelles'    
                                //value={valuesSecondStepClient.technicalSkills  ? valuesSecondStepClient.technicalSkills : null} 
                                onChange={setTechnicalSkills}
                                formatCreateLabel={value => `Ajouter  "${value}"`}
                                createOptionPosition='first'
                                />
                        </div>
                        {errors.technicalSkills && <p className={Style.errors}>{errors.technicalSkills}</p>}
                        <div className={Style.inputDescription}>
                            <label>Zone Géographique</label>
                                <Geosuggest
                                    ref={geosuggestEl}
                                    placeholder="Lieu de la mission"
                                    location={new google.maps.LatLng(53.558572, 9.9278215)}
                                    radius={20}
                                    onSuggestSelect={onSuggestSelect}
                                    autoComplete="off"
                                    country="Fr"
                                />
                                
                        </div>
                        {/* {errors.localisation && <p className={Style.errors}>{errors.localisation}</p>} */}

                        <div className={Style.containInput}>

                            <div className={Style.inputDescription}>
                                <label>Télétravail</label>
                                <div>
                                    <CreatableSelect 
                                        options={place}
                                        // isMulti={true}
                                        onChange={setPlace}
                                    />
                                </div>
                            </div>
                            {errors.place && <p className={Style.errors}>{errors.place}</p>}
                            <div className={Style.inputDescription}>
                                <label>Durée du projet </label>
                                <CreatableSelect 
                                    options={durationItems}
                                    // isMulti={true}
                                    onChange={setDuration}
                                />
                            </div>
                            {errors.duration && <p className={Style.errors}>{errors.duration}</p>}

                        </div>
        
                        <div className={Style.containInput}>
                            <div className={Style.inputDescription}>
                                <label>Séniorité</label>
                                <div>
                                    <CreatableSelect 
                                        options={seniority}
                                        // onChange={setPlace}
                                    />
                                </div>
                            </div>
                            <div className={Style.inputDescription}>
                                <label>Fréquence</label>
                                <div>
                                    <CreatableSelect 
                                        options={frequency}
                                        // onChange={setPlace}
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div className={Style.inputDescription}>
                            <label>Début du projet</label>
                            <div>
                                <CreatableSelect 
                                    options={startProject}
                                    // onChange={setPlace}
                                />
                            </div>
                        </div>
                     {/*    <div className={Style.containButton}>
                            <a className={!showForm ? Style.buttonActive : Style.buttonNoActive} onClick={() => {setshowForm(false); setBillingModeForfait()}}>Forfait</a>
                            <a className={showForm ? Style.buttonActive :  Style.buttonNoActive} onClick={() => {setshowForm(true); setBillingModeRegie()}}>Regie</a>
                        </div>
                        {errors.billingMode && <p className={Style.errors}>{errors.billingMode}</p>}
                        {
                            !showForm ? (
                                <div className={Style.inputBudget}>
                                    <label htmlFor="budget">Budget</label>
                                    <input type="number" id="budget" name="budgetMin" onChange={handleChangeSecondStepClient}/>
                                </div>
                            ) : (
                                <div className={Style.inputBudget}>
                                    <label htmlFor="TJM">TJM</label>
                                    <input type="number" id="TJM" name="budgetMin"  onChange={handleChangeSecondStepClient}/>
                                </div>
                            )
                        }
                        {errors.budgetMin && <p className={Style.errors}>{errors.budgetMin}</p>} */}
                        <button className={Style.button} onClick={handleSubmit}>Continuer</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default RegisterForm2Client
