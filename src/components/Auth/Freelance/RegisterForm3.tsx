import React, { useRef } from 'react'
import Style from './RegisterForm3.module.scss'
import Validate from './ValidateForm//useFormStep3/Validate'
import useForm from './ValidateForm//useFormStep3/useForm'
import {updateUser} from '../../../Utilities/request'
import Geosuggest, { Suggest } from 'react-geosuggest';
import CreatableSelect from 'react-select/creatable';   
import { technicalSkillsItems } from '../../../Utilities/options'

const RegisterForm3 = ({ next, previus, categories, spe, index, setIndex, step, updateProfil }: any) => {

    // const [index, setIndex] = useState<number>()

    const buttons = [
        {
            name: "1-2 ans",
            class: Style.option,
            classBlue: Style.optionBlue     
        },
        {
            name: "3-5 ans",
            class: Style.option,
            classBlue: Style.optionBlue     
        },
        {
            name: "< 5 ans",
            class: Style.option,
            classBlue: Style.optionBlue     
        }
    ]
    const geosuggestEl = useRef(null);

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

        let profile = 
        {   
            "signUpStep": step,
            "profile": valuesStep3Free
        }
        let data =updateUser(profile, config)
        
        data.then(res => {
            next()
        })
        .catch(err => {
            console.log(err)
        })
    }

    const getExp = (e:any) => {
        e.preventDefault();
        setStep3Free({
            ...valuesStep3Free,
            [e.target.name]: e.target.value
        })
    }
    
    // const test = (e:any) => {
    //     console.log(e.target.name)
    //     setStep3Free({
    //         ...valuesStep3Free,
    //         [e.target.name]: e.target.value
    //     })
        
    // }

    const setTechnicalSkills = (techni:any) => {
        setStep3Free({
            ...valuesStep3Free,
            technicalSkills: techni
        })
    }

    const onSuggestSelect = (suggest: Suggest) => {
        if(suggest) {
            setStep3Free({
                ...valuesStep3Free,
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

    const { errors, handleSubmit, valuesStep3Free,setStep3Free, handleChangeStep3} = useForm(submit, Validate)

    return (
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.containAll}>
                    <h1 className={Style.title}>Mon profil BeAdvize</h1>
                    <div className={Style.barre}></div>
                    <form onSubmit={handleSubmit}>
                        {
                            !updateProfil ? (
                                <div className={Style.containCard}>
                                     <h3>Vos Catégories</h3>
                                     <div className={Style.withCard}>
                                        {
                                            categories.map((cate:any, i:number) => (
                                                <div className={Style.card} key={i}>
                                                    <img src={cate.img} className={Style.img} alt="correspond à la categorie choisie dans le formulaire précédent"/>
                                                    <p>{cate.title}</p>
                                                </div>
                                            ))
                                        }
                                     </div>
                                   
                                    
                                    {/* <div className={Style.containBarreHorison}>  
                                        <div className={Style.barreHorizon}></div>
                                    </div>
                                    <div className={Style.card}>
                                        <h3>Votre Spécialisation</h3>
                                        <p>{spe}</p>
                                    </div> */}
                                </div>
                            )
                            : (
                                null
                            )
                        }
                        
                        <div className={Style.input}>
                            <label>Titre de votre profil</label>
                            <input type="text" name="title" onChange={handleChangeStep3} placeholder="Ex : Consultant études sectorielles"/>
                        </div>
                        {errors.title && <p className={Style.errors}>{errors.title}</p>}
                        <div className={Style.inputLocalisation}>
                            <label>Zone Géographique</label>
                            {/* <input type="text" name="geozone" onChange={handleChangeStep3} placeholder="Ex : Paris" /> */}
                            <Geosuggest
                                className={Style.geosuggest}
                                ref={geosuggestEl}
                                placeholder="Saisir"
                                location={new google.maps.LatLng(53.558572, 9.9278215)}
                                radius={20}
                                onSuggestSelect={onSuggestSelect}
                                autoComplete="off"
                                country="Fr"
                            />
                        </div>
                        {/* {errors.localisation && <p className={Style.errors}>{errors.localisation}</p>} */}
                        <div className={Style.inputExp}>
                            <label>Niveau d'expérience</label>
                            <div>
                                {
                                    buttons.map((button, i) => (
                                        <button key={i} name="segnority" className={index === i ? button.classBlue : button.class} value={button.name} onClick={e => {setIndex(i); getExp(e)}} >{button.name}</button>
                                    ))
                                }
                            </div>
                        </div>
                        {errors.segnority && <p className={Style.errors}>{errors.segnority}</p>}
                        <div className={Style.inputSkills}>
                            <p>Mes compétences en mots-clés (séparer les mots d’une virgule)</p>
                            
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
                        <div className={Style.inputTJM}>
                            <label>Votre Tarif Journalier</label>
                            <input type="number" name="dailyPriceMin" onChange={handleChangeStep3} pattern="[0-9]" />
                            <div>€</div>
                        </div>
                        {errors.dailyPriceMin && <p className={Style.errors}>{errors.dailyPriceMin}</p>}
                      {/*   <div className={Style.input}>
                            <label>Votre téléphone</label>
                            <input type="tel" name="number" onChange={handleChangeStep3}/>
                        </div>
                        {errors.number && <p className={Style.errors}>{errors.number}</p>} */}
                        <div className={Style.containButton}>
                            <button className={Style.button1} onClick={e => {previus()}}>Retour aux catégories</button>
                            <button className={Style.button2} type="submit">Continuer</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default RegisterForm3
