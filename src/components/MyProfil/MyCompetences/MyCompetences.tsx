import React, { useEffect, useState } from 'react'
import Style from './MyCompetences.module.scss'
import pencil from '../../../assets/Dashboard/pencil.svg'
import { technicalSkillsItems } from '../../../Utilities/options'
import { updateUser } from '../../../Utilities/request';
import CreatableSelect from 'react-select/creatable';  
import history from '../../../history'

const MyCompetences = ({consultant, client, setConsultant}:any) => {

    const [showForm, setShowForm] = useState(false)
    const [techni, setTechnicalSkills] = useState({
        technicalSkills: undefined,
    })

    const handleChange = (item:any) => {
        alert(JSON.stringify(item))
        setTechnicalSkills({
            ...techni,
            technicalSkills: item
        })
        alert(JSON.stringify(techni))

    }

    const submit = (e:any) => {
        e.preventDefault()

        let accessToken = localStorage.getItem('currentUser')
        let config = 
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }
        let profile = 
        {          
            "profile": techni
        }

        const data = updateUser(profile, config)
        data.then(res => {
            setShowForm(false) 
            setConsultant(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        setTechnicalSkills
            ({  
                technicalSkills: consultant.profile.technicalSkills
            })
    }, [consultant])

    return (
        <div className={Style.container}>
            {
                !showForm ? (
                    <div className={Style.containDetails}>
                        <h1 className={Style.title}>Mes compétences</h1>
                        <div className={Style.barre}></div>
                        {
                            !client ? (
                                <div className={Style.pencil}>
                                    <img src={pencil} alt="stylo" onClick={e => {setShowForm(true)}}/>
                                </div>
                            )
                            : (
                                null
                            )
                        }
                       
                        <div className={Style.skills}>
                           {
                               consultant.profile.technicalSkills.map((techni:any, i:number) => {
                                   return (
                                       <span key={i}>#{techni.value}  </span>
                                   )
                               })
                           }
                        </div>
                    </div>  
                )
                : (
                    <div className={Style.containDetails}>
                        <h1 className={Style.title}>Mes compétences</h1>
                        <div className={Style.barre}></div>
                        <div className={Style.pencil}>
                            <img src={pencil} alt="stylo" onClick={e => {setShowForm(true)}}/>
                        </div>
                        <form onSubmit={submit}>
                            <div className={Style.inputSkills}>
                                
                               {/*  <CreatableSelect
                                    className={Style.select}
                                    options={technicalSkillsItems}
                                    isMulti={true}
                                    onChange={handleChange}
                                /> */}

                                <CreatableSelect
                                    name="functionalSkills"
                                    className={Style.select}
                                    //classNamePrefix="form-control"
                                    isMulti={true} 
                                    closeMenuOnSelect = {true}
                                    options={technicalSkillsItems}
                                    //noOptionsMessage={() => 'Item non disponible'}
                                    //placeholder='Compétences'    
                                    value={techni.technicalSkills} 
                                    onChange={handleChange}
                                    formatCreateLabel={value => `Ajouter  "${value}"`}
                                    createOptionPosition='first'
                                />  
                            </div>
                            <div className={Style.containButton}>
                                <button className={Style.update}>Modifier</button>
                                <button className={Style.back} onClick={e => {setShowForm(false)}} >Annuler</button>
                            </div>
                        </form>
                    </div>  
                )
            }  
        </div>
    )   
}

export default MyCompetences
