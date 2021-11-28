import React, { useState } from 'react'
import Style from './MyPresentation.module.scss'
import pencil from '../../../assets/Dashboard/pencil.svg'
import { updateUser } from '../../../Utilities/request'
import { useEffect } from 'react';

const MyPresentation = ({consultant, client}:any) => {

    const [showform, setShowForm] = useState(false)
    const [description, setDesc] = useState({
        description : ""
    })

    const handleChange = (e:any) => {
        setDesc({
            description: (e.target as any).value
        })
    } 


    const submit = (e:any) => {
        e.preventDefault()
        let accessToken = localStorage.getItem('currentUser')
        let config = {headers: {Authorization: `Bearer ${accessToken}`,}}

        let profile = 
        {   
           
            "profile": description
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
       
        setDesc({
            description: consultant.profile.description
        })
        }, [consultant])

    return (
        <div className={Style.container}>
            {
                !showform ? (
                    <div className={Style.containDetails}>
                        <h1 className={Style.title}>Ma présentation</h1>
                        <div className={Style.barre}></div>
                        {
                            !client ? (
                                <div className={Style.containImg}>
                                    <img src={pencil} alt="un stylo en guise de bouton"  onClick={e => {setShowForm(true)}}/>
                                </div>
                            ) : (
                                null
                            )
                        }
                       
                        <p>{consultant.profile.description}</p>
                    </div>  
                )
                :
                (
                    <div className={Style.containDetails}>
                        <h1 className={Style.title}>Ma présentation</h1>
                        <div className={Style.barre}></div>
                        <form onSubmit={submit}>
                            <div  className={Style.description}>
                                <label>Compétences mises en oeuvres</label>
                                <textarea cols={10} rows={5} className={Style.inputExp}  name="description" autoComplete="off" onChange={handleChange} value={description.description}/>
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

export default MyPresentation
