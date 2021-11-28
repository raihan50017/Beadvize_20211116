import React,{ useState,useRef } from 'react'
import Style from './CreateMission.module.scss'
import CreatableSelect from 'react-select';
import { durationItems, place, technicalSkillsItems, startProject, seniority, frequency } from '../../../Utilities/options'
import Geosuggest, { Suggest } from 'react-geosuggest';
import '../../Auth/Client/RegisterForm2Client.css'
import useForm from './ValidateForm/useForm'
import { hidden } from '../../../Utilities/request';
import Validate from './ValidateForm/Validate'
import { useHistory } from 'react-router';


const CreateMission = () => {


    const [budget, setBudget] = useState<boolean>(false)
    const geosuggestEl = useRef(null);
    const [showForm, setshowForm] = useState(false)
    const [message, setMessage] = useState(false)
    // const [forfait, setForfait] = useState(false)

    const history = useHistory()


    const submit =  async () => {

        let accessToken = localStorage.getItem('currentUser')
        let config = 
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }
        

        let data =  hidden(valuesSecondStepClient, config)
        data.then(res => {
            setMessage(true)
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

    const setBillingModeForfait= () => {
        setValuesSecondStepClient({
            ...valuesSecondStepClient,
            billingMode: "Forfait"
        })
    }

    const setBillingModeRegie= () => {
        setValuesSecondStepClient({
            ...valuesSecondStepClient,
            billingMode: "Regie"
        })
    }

    const redirect = () => {
        history.push('/')
    }

    const { handleChangeSecondStepClient, handleSubmit, valuesSecondStepClient, setValuesSecondStepClient} = useForm(submit, Validate)

    return (
        <div className={Style.container}>
            <div className={!message ? Style.containAll : Style.hidden}>
                <h1 className={Style.title}>Ma définition du projet</h1>
                <div className={Style.barre}></div>
                <form onSubmit={handleSubmit}>
                    <div className={Style.inputTitre}>
                        <label>Titre</label>
                        <input type="text" name="title" onChange={handleChangeSecondStepClient}/>
                    </div>
                    {/* {errors.title && <p className={Style.errors}>{errors.title}</p>} */}
                    <div className={Style.inputDescription}>
                        <label>Description</label>
                        <textarea name="description" id="" cols={10} rows={5}  onChange={handleChangeSecondStepClient}></textarea>
                    </div>
                    {/* {errors.description && <p className={Style.errors}>{errors.description}</p>} */}
                    <div className={Style.inputDescription}>
                            <label>Quelles compétences je recherche ?</label>
                            <CreatableSelect 
                                options={technicalSkillsItems}
                                isMulti={true}
                                onChange={setTechnicalSkills}
                            />
                        </div>
                    {/* {errors.searchSkills && <p className={Style.errors}>{errors.searchSkills}</p>} */}
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
                            {/* {errors.place && <p className={Style.errors}>{errors.place}</p>} */}
                            <div className={Style.inputDescription}>
                                <label>Durée du projet </label>
                                <CreatableSelect 
                                    options={durationItems}
                                    // isMulti={true}
                                    onChange={setDuration}
                                />
                            </div>
                            {/* {errors.duration && <p className={Style.errors}>{errors.duration}</p>} */}

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
                        <div className={Style.containButton}>
                            <a className={!showForm ? Style.buttonActive : Style.buttonNoActive} onClick={() => {setshowForm(false); setBillingModeForfait()}}>Forfait</a>
                            <a className={showForm ? Style.buttonActive :  Style.buttonNoActive} onClick={() => {setshowForm(true); setBillingModeRegie()}}>Regie</a>
                        </div>
                        {/* {errors.billingMode && <p className={Style.errors}>{errors.billingMode}</p>} */}
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


                    {/* {errors.StartOfProject && <p className={Style.errors}>{errors.StartOfProject}</p>} */}
                    <button className={Style.button}>Continuer</button>
                </form>
            </div>
            <div className={message ? Style.message : Style.hidden}>
                <h1>Merci pour votre proposition ! Nous sourçons les candidats. Vous serez notifié une fois que la shortlist sera constituée !</h1>
                <div className={Style.barre}></div>
                <button onClick={redirect}>Retour au dahsboard</button>
            </div>        
        </div>
    )
}

export default CreateMission
