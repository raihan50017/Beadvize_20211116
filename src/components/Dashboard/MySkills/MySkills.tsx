import React, { useState } from 'react'
import Style from './MySkills.module.scss'
import pencil from '../../../assets/Dashboard/pencil.svg'
import CreatableSelect from 'react-select';
import { updateUser } from '../../../Utilities/request';
import { technicalSkillsItems } from '../../../Utilities/options'
import { useEffect } from 'react';

const MySkills = ({consultant}:any) => {

    const [showForm, setShowForm] = useState(false)
    const [techni, setTechnicalSkills] = useState({
        technicalSkills: undefined,
    })

    const handleChange = (item:any) => {
        setTechnicalSkills({
            ...techni,
            technicalSkills: item
        })
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
            window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        setTechnicalSkills({
            technicalSkills: consultant.profile.technicalSkills
        })
    }, [consultant])

    return (
        <div className={Style.container}>
            {
                !showForm && consultant.profile.technicalSkills.length ? (
                    <div className={Style.containDetails}>
                        <img src={pencil} alt="stylo" onClick={e => {setShowForm(true)}}/>
                        <h1 className={Style.title}>Mes compétences</h1>  
                        <div className={Style.barre}></div>
                            
                        <div className={Style.skills}>
                            {
                                consultant.profile.technicalSkills.length > 0 ? ( 
                                    consultant.profile.technicalSkills.map((tech:any, i:number) => {
                                       return  <span key={i}>#{tech.value}  </span>
                                       {/* <p key={i}>{tech.value}</p> */}
                                    })
                                )
                                : (
                                    null
                                )
                            }
                           
                        </div>
                    </div>  
                )
                : (
                    <div className={Style.containDetails}>
                        <h1 className={Style.title}>Mes compétences</h1>
                        <div className={Style.barre}></div>
                        <form onSubmit={submit}>
                            <div className={Style.inputSkills}>
                                <p>Mes compétences en mots-clés</p>
                                
                                <CreatableSelect
                                    className={Style.select}
                                    options={technicalSkillsItems}
                                    isMulti={true}
                                    onChange={handleChange}
                                    value={techni.technicalSkills ? techni.technicalSkills : null}
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

export default MySkills
