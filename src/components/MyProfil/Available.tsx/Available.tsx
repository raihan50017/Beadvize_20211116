import React, { useEffect, useState } from 'react'
import Style from './Available.module.scss'
import Profil from '../../../assets/Dashboard/profil.svg'
import Avatar from '@mui/material/Avatar';
import pencil from '../../../assets/Dashboard/pencil.svg'
import { updateUser } from '../../../Utilities/request';

const Available = ({consultant, client, setConsultant}: any,) => {

    const [updateForm, setUpdateForm] =  useState(false)
    const [title, setTitle] =  useState(
        {title: ""}
    )

    const handleChange = (e:any) => {
        setTitle({ 
            title : (e.target as any).value
        })
    } 

    const submit = (e:any) => {
        e.preventDefault()
        let accessToken = localStorage.getItem('currentUser')
        let config = {headers: {Authorization: `Bearer ${accessToken}`,}}
        
        let profile = 
        {     
            "profile": title
        }

        const data = updateUser(profile, config)
        data.then(res => {
           setUpdateForm(false) 
           setConsultant(res)
        })
        .catch(err => {
            console.log(err)
        })
    }


    useEffect(() => {
        setTitle
            ({  ...title,
                 title : consultant.profile.title
               }   )
    }, [consultant])

    return (
        <div className={Style.container}>
            <div className={Style.containDetails}>
                <div className={Style.containImg}>
                {
                    consultant && consultant.profile.picture ? ( 
                        <Avatar  src={consultant.profile.picture.pictureUrl}  sx={{ width: 130, height: 130 }} />
                    )
                    : (
                     <img src={Profil} alt="avatar"/>
                    )
                 }
                <h5 className={Style.name}>{consultant.firstname} {" "} {consultant.lastname}</h5>  
                {
                    updateForm   ? (
                        <><input className={Style.job} value={title.title} onChange={handleChange} /><button className={Style.update} onClick={submit}>Modifier</button><button className={Style.back} onClick={() => setUpdateForm(false)}>Annuler</button></>
                    )
                    : (
                        <><p className={Style.job}>{consultant.profile.title}</p><button onClick={()=> setUpdateForm(true)}><img src={pencil} alt=''/></button></>
                    )

                }
                    <div className={Style.barre}></div>
                </div>
                {
                    !client && !consultant.profile.availableDate ? (
                        <div className={Style.disponibility}>
                            <a href="/">Actuellement indisponible <br/> <span>Mettre à jour sur le <span> Dasboard</span></span></a>
                        </div>
                    )
                    : (
                        null
                    )
                }
            </div>
        </div>
    )
}

export default Available