import React, { useEffect, useState } from 'react'
import Style from './FormProfil.module.scss'
import { getMe, saveFile } from '../../../Utilities/request'
import { getInitials } from '../../../Utilities/utils'
import Avatar from '@mui/material/Avatar';

const FormProfil = () => {

    const [img, setImg] = useState<string>()

    const handleChange = async (e:any) => {
        
        const data = saveFile(e.target.files[0])
        data.then(res=>{
           setImg(res.pictureUrl)
        //    console.log("url picture",res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    const [data, setData] = useState<any>()
    const getUser = () => {
        const data = getMe()
        data.then(res => {
            setData(res)
            console.log(res.profile.picture.pictureUrl)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => (getUser()),[])


    return (
        <div className={Style.container}>
            <h1 className={Style.title}>Photo</h1>
            <div className={Style.barre}></div>
            {
                data && data.profile.picture ? ( 
                    <Avatar  src={data.profile.picture.pictureUrl}  sx={{ width: 130, height: 130 }} />
                )
                : (
                    <div className={Style.initial}>{getInitials(data)}</div>
                )
            }
            
            <input type="file" id="file" className={Style.hidden} onChange={handleChange}  />
            <label className={Style.button} htmlFor="file">Ajouter / Modifier</label>
        </div>
    )
}

export default FormProfil
