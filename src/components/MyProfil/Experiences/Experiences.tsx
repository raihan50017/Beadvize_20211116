import React, { useState } from 'react'
import Style from './Experiences.module.scss'
import pencil from '../../../assets/Dashboard/pencil.svg'
import bat from '../../../assets/Dashboard/bat.svg'
import { useEffect } from 'react'
import { updateUser } from '../../../Utilities/request'
import moment from 'moment';
import { DateInput } from '../../Input/InputDate';
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CreatableSelect from 'react-select/creatable';  
import { technicalSkillsItems } from '../../../Utilities/options'




const Experiences = ({consultant, client, setConsultant}:any) => {

    const [showform, setshowForm] = useState(false)
    const [updateForm, setUpdateForm] = useState(false)
    const [expConsultant, setExpConsultant] = useState<Array<Object>>([])
    const [index, setIndex] = useState(0)
    const [experience, setExperience] = useState({
        title: "",
        company: "",
        startDate: new Date(),
        endDate: new Date(),
        description: "",
        skills: []
    })

    const handleChange = (e:any) => {
        setExperience({
            ...experience,
            [e.target.name]: e.target.value
        })
    }

    const handleListChange = (item:any) => {
        setExperience({
            ...experience,
            skills: item
        })
        
    }

    const handleStartDateChange = (date: Date) => {
        setExperience({...experience, startDate: date})
    };

    const handleEndDateChange = (date: Date) => {
        setExperience({...experience, endDate: date})
    };
    


    useEffect(() => {
        if(consultant) {
            setExpConsultant(consultant.profile.experience)
        }
    }, [consultant])


    const createExp = (e:any) => {
        e.preventDefault()
        let accessToken = localStorage.getItem('currentUser')
        let config = 
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }

        expConsultant.push(experience)
               
        let profile = 
        {   
            "profile": {
                experience : expConsultant
            }
        }
        
        const data = updateUser(profile, config)
        data.then(res => {
            setConsultant(res)
            setshowForm(!showform)
        })
        .catch(err => {
            console.log(err)
        })
    }

    

    const updateExp = (e:any) => {
        e.preventDefault()
        let accessToken = localStorage.getItem('currentUser')
        let config = {headers: {Authorization: `Bearer ${accessToken}`,}}
       
        expConsultant[index] = experience
        
        let profile = 
        {   
            "profile": {
                experience : expConsultant
            }
        }
        
        const data = updateUser(profile, config)
        data.then(res => {
            setConsultant(res)
            setUpdateForm(!updateForm)
        })
        .catch(err => {
            console.log(err)
        })
    }


    const deleteExperience = (e:any) => {
        e.preventDefault()
        let accessToken = localStorage.getItem('currentUser')
        let config = {headers: {Authorization: `Bearer ${accessToken}`,}}
       
        expConsultant.splice(index, 1);
        
        let profile = 
        {   
            "profile": {
                experience : expConsultant
            }
        }
        
        const data = updateUser(profile, config)
        data.then(res => {
            setConsultant(res)
            setUpdateForm(!updateForm)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className={Style.container}>
            <div className={Style.containDetails}>
                <h1 className={Style.title}>Mes expériences</h1>
                <div className={Style.barre}></div>
                {
                    showform ? (
                        <form>
                                    <div className={Style.input}>
                                        <label htmlFor="company">Entreprise</label>
                                        <input type="text" name="company" id="company" autoComplete="off" onChange={handleChange}/>
                                    </div>
                                 
                                    <div className={Style.input}>
                                        <label htmlFor="title">Titre</label>
                                        <input type="text" name="title" id="title" autoComplete="off" onChange={handleChange}/>
                                    </div>
                                   
                                    {/* <div className={Style.check}>
                                        <input type="checkbox" name="freeLance"  />
                                        <label>En tant que free-lance</label> 
                                    </div>
                                    <div className={Style.check}>
                                        <input type="checkbox" name="positionCurrently"/>
                                        <label>J’occupe actuellement ce poste</label> 
                                    </div> */}
                                      <div className={Style.date}>
                                <label htmlFor="startDate">Date de début</label>
                                <DateInput
                                            edit={true}
                                            name='availableDate'
                                            handleDateChange={handleStartDateChange}
                                            value={experience.startDate ? new Date(experience.startDate) : experience.startDate }
                                            showMonthYearPicker
                                            dateFormat='MM/yyyy'
                                        />
                                <label htmlFor="endDate">Date de fin</label>
                                <DateInput
                                            edit={true}
                                            name='availableDate'
                                            handleDateChange={handleEndDateChange}
                                            value={experience.endDate ? new Date(experience.endDate) : experience.endDate }
                                            showMonthYearPicker
                                            dateFormat='MM/yyyy'
                                        />
                            </div>
                                    {/* {errorsExp.startOfExp && <p className={Style.errors}>{errorsExp.startOfExp}</p>}
                                    {errorsExp.endOfExp && <p className={Style.errors}>{errorsExp.endOfExp}</p>} */}
                                    <div className={Style.description}>
                                        <label htmlFor="description">Description</label>
                                        <textarea id="description" cols={10} rows={5} className={Style.inputExp} name="description"  autoComplete="off" onChange={handleChange}/>
                                    </div>
                                    {/* {errorsExp.description && <p className={Style.errors}>{errorsExp.description}</p>} */}
                                    {/* <div  className={Style.description}>
                                        <label>Compétences mises en oeuvres</label>
                                        <textarea cols={10} rows={5} className={Style.inputExp}  name="skillsImplemented" autoComplete="off"/>
                                    </div> */}
                                    {/* {errorsExp.skillsImplemented && <p className={Style.errors}>{errorsExp.skillsImplemented}</p>} */}
                                    <div className={Style.description}>
                                        <label htmlFor="description">skills</label>
                                            <CreatableSelect
                                            name="functionalSkills"
                                            className={Style.select}
                                            //classNamePrefix="form-control"
                                            isMulti={true} 
                                            closeMenuOnSelect = {true}
                                            options={technicalSkillsItems}
                                            //noOptionsMessage={() => 'Item non disponible'}
                                            //placeholder='Compétences'    
                                            //value={experience.skills ? experience.skills : null } 
                                            onChange={handleListChange}
                                            formatCreateLabel={value => `Ajouter  "${value}"`}
                                            createOptionPosition='first'
                                        />  
                                    </div>

                                    <div className={Style.buttonExperience}>
                                        {/* <button className={Style.btnSupp}><img src={bin} alt="poubelle"/> Supprimer</button> */}
                                        <div className={Style.btnExp}>
                                            <button className={Style.btnStop} onClick={e => {setshowForm(!showform)}}>Annuler</button>
                                            <button type="submit" className={Style.btnValid} onClick={createExp}>Valider</button>
                                        </div>
                                    </div>
                                </form>
                    )
                    :(
                        <div>
                            {
                                !client ? (

                                <>
                                        <a  onClick={() => setshowForm(!showform)} /* className={Style.buttonAdd} */> <AddCircleIcon />  Ajouter une expérience</a></>
                                
                                    )
                                : (
                                    null
                                )
                            }
                            
                        </div>
                    ) 
                }






                {
                    updateForm ? (
                        <form>
                            <div className={Style.input}>
                                <label htmlFor="company">Entreprise</label>
                                <input type="text" name="company" id="company" autoComplete="off" onChange={handleChange} value={experience.company}/>
                            </div>
                            {/* {errorsExp.enterprise && <p className={Style.errors}>{errorsExp.enterprise}</p>} */}
                            <div className={Style.input}>
                                <label htmlFor="title">Titre</label>
                                <input type="text" name="title" id="title" autoComplete="off" onChange={handleChange} value={experience.title}/>
                            </div>
                            {/* {errorsExp.title && <p className={Style.errors}>{errorsExp.title}</p>} */}
                            {/* <div className={Style.check}>
                                <input type="checkbox" name="freeLance"  />
                                <label>En tant que free-lance</label> 
                            </div>
                            <div className={Style.check}>
                                <input type="checkbox" name="positionCurrently"/>
                                <label>J’occupe actuellement ce poste</label> 
                            </div> */}
                            <div className={Style.date}>
                                <label htmlFor="startDate">Début</label>
                                <DateInput
                                            edit={true}
                                            name='availableDate'
                                            handleDateChange={handleStartDateChange}
                                            value={experience.startDate ? new Date(experience.startDate) : experience.startDate }
                                            showMonthYearPicker
                                            dateFormat='MM/yyyy'
                                        />
                                <label htmlFor="endDate">Fin</label>
                                <DateInput
                                            edit={true}
                                            name='availableDate'
                                            handleDateChange={handleEndDateChange}
                                            value={experience.endDate ? new Date(experience.endDate) : experience.endDate }
                                            showMonthYearPicker
                                            dateFormat='MM/yyyy'
                                        />
                            </div>
                            {/* {errorsExp.startOfExp && <p className={Style.errors}>{errorsExp.startOfExp}</p>}
                            {errorsExp.endOfExp && <p className={Style.errors}>{errorsExp.endOfExp}</p>} */}
                            <div className={Style.description}>
                                <label htmlFor="description">Description</label>
                                <textarea id="description" cols={10} rows={5} className={Style.inputExp} name="description"  autoComplete="off" onChange={handleChange} value={experience.description}/>
                            </div>

                            {/* <div  className={Style.description}>
                                <label>Compétences mises en oeuvres</label>
                                <textarea cols={10} rows={5} className={Style.inputExp}  name="skillsImplemented" autoComplete="off"/>
                            </div> */}
                            {/* {errorsExp.skillsImplemented && <p className={Style.errors}>{errorsExp.skillsImplemented}</p>} */}

                            <div className={Style.description}>
                                        <label htmlFor="description">skills</label>
                                            <CreatableSelect
                                            name="functionalSkills"
                                            className={Style.select}
                                            //classNamePrefix="form-control"
                                            isMulti={true} 
                                            closeMenuOnSelect = {true}
                                            options={technicalSkillsItems}
                                            //noOptionsMessage={() => 'Item non disponible'}
                                            //placeholder='Compétences'    
                                            value={experience.skills ? experience.skills : null } 
                                            onChange={handleListChange}
                                            formatCreateLabel={value => `Ajouter  "${value}"`}
                                            createOptionPosition='first'
                                        />  
                                    </div>

                            <div className={Style.buttonExperience}>
                                {/* <button className={Style.btnSupp}><img src={bin} alt="poubelle"/> Supprimer</button> */}
                                <div className={Style.btnExp}>
                                    <a onClick={deleteExperience} > <DeleteOutlineIcon />Supprimer</a>    
                                    <button className={Style.btnStop} onClick={e => {setUpdateForm(!updateForm)}}>Annuler</button>
                                    <button type="submit" className={Style.btnValid} onClick={updateExp}>Valider</button>
                                </div>
                            </div>
                        </form>
                    )
                    : (
                        expConsultant.map((exp:any, i:number) => (         
                            <div className={Style.enterprise} key={i}>
                                <div className={Style.containImg}>
                                    <h6 className={Style.title}> <img src={bat} alt="bâtiment"/> {exp.company}</h6>
                                    {
                                        !client ? (
                                            <img src={pencil} alt="un stylo en guise de bouton" onClick={e => {setUpdateForm(!updateForm); setIndex(i); setExperience(exp)}}/>
                                        )
                                        : (
                                            null
                                        )
                                    }
                                    
                                </div>
                                
                                <div className={Style.detailEnterprise}>
                                    <h6 className={Style.weight}>{exp.title}</h6>
                                    <h6>{moment(exp.startDate).format('MM/YYYY')} {" - "} {moment(exp.endDate).format('MM/YYYY')}</h6>
                                </div>
                                <p>
                                   {exp.description}
                                </p>
                                <div className={Style.skills}>
                                    {   
                                        exp.skills ?
                                        exp.skills.map((skill:any, i:number) => {
                                            return (
                                                <span key={i}>#{skill.value}  </span>
                                            )
                                        })
                                        : null
                                    }
                        </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default Experiences
