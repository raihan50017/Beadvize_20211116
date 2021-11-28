import React, { useEffect, useState } from 'react'
import { getMe, updateUser } from '../../../Utilities/request'
import Style from './FormAdress.module.scss'

const FormAdressPro = () => {

    const [data, setData] = useState<any>()
    const getUser = () => {
        const data = getMe()
        data.then(res => {
            setData(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => (getUser()),[])

    const [adress, setAdress] = useState({
        address1: "",
        city: "",
        zipcode: "",
        country: ""
    })
    const handleChange = (e:any) => {
        const {name, value} = e.target

        setAdress({
            ...adress,
            [name]: value
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
        let state = {
            company: adress
        }
        const data = updateUser(state, config)
        data.then(res => {
            window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className={Style.container}>
            <h1 className={Style.title}>Adresse professionnel</h1>   
            <div className={Style.barre}>
                <div></div>
            </div>
            {
                data ? (
                    <form className={Style.form} onSubmit={submit} >
                        <label htmlFor="address1">Adresse</label>
                        <input type="text" id="address1"name="address1" defaultValue={data.company ? data.company.address1:  null} onChange={handleChange}/>
                        <div className={Style.lastinput}>
                            <div className={Style.cp}>
                                <label htmlFor="zipcode">Code postale</label>
                                <input type="text" id="zipcode" name="zipcode"  defaultValue={data.company ? data.company.zipcode : null} onChange={handleChange}/>
                            </div>
                            <div className={Style.date}>
                                <label htmlFor="city">ville</label>
                                <input type="text" id="city" name="city"  defaultValue={data.company ?  data.company.city :null } onChange={handleChange}/>
                            </div>
                            <div className={Style.cp}>
                                <label htmlFor="country">Pays</label>
                                <input type="text" id="country" name="country"  defaultValue={data.company ? data.company.country:null} onChange={handleChange}/>
                            </div>
                        </div>
                        <button className={Style.button}>Enregistrer</button>
                    </form>
                )
                : (
                    null
                )
            }
            
        </div>
    )
}

export default FormAdressPro
