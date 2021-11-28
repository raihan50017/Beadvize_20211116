import React, { useEffect, useState } from 'react'
import { getMe, updateUser } from '../../../Utilities/request'
import Style from './FormAdress.module.scss'

const FormAdress = () => {

    //const [data, setData] = useState<any>()
    const [data, setData] = useState({
        address: { address1: "",
        city: "",
        zipcode: "",
        country: ""
    }
    })

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

    
    const handleChange = (e:any) => {
        const {name, value} = e.target
        setData({
            ...data,
            address:{...data.address,
            [name]: value}
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
        
        const result = updateUser(data, config)
        result.then(res => {
           //window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className={Style.container}>
            <h1 className={Style.title}>Adresse du domicile</h1>   
            <div className={Style.barre}>
               <div></div>
            </div>
            {
                data && data.address ? (
                    <form className={Style.form} onSubmit={submit} >
                        <label htmlFor="address1">Adresse</label>
                        <input type="text" id="address1"name="address1" defaultValue={data.address.address1} onChange={handleChange}/>
                        <div className={Style.lastinput}>
                            <div className={Style.cp}>
                                <label htmlFor="zipcode">Code postale</label>
                                <input type="text" id="zipcode" name="zipcode" defaultValue={data.address.zipcode} onChange={handleChange}/>
                            </div>
                            <div className={Style.date}>
                                <label htmlFor="city">ville</label>
                                <input type="text" id="city" name="city" defaultValue={data.address.city} onChange={handleChange}/>
                            </div>
                            <div className={Style.cp}>
                                <label htmlFor="country">Pays</label>
                                <input type="text" id="country" name="country" defaultValue={data.address.country} onChange={handleChange}/>
                            </div>
                        </div>
                        <button className={Style.button}>Enregistrer</button>
                    </form>
                )
                : (
                    <form className={Style.form} onSubmit={submit} >
                        <label htmlFor="address1">Adresse</label>
                        <input type="text" id="address1"name="address1"  onChange={handleChange}/>
                        <div className={Style.lastinput}>
                            <div className={Style.cp}>
                                <label htmlFor="zipcode">Code postale</label>
                                <input type="text" id="zipcode" name="zipcode"  onChange={handleChange}/>
                            </div>
                            <div className={Style.date}>
                                <label htmlFor="city">ville</label>
                                <input type="text" id="city" name="city"  onChange={handleChange}/>
                            </div>
                            <div className={Style.cp}>
                                <label htmlFor="country">Pays</label>
                                <input type="text" id="country" name="country" onChange={handleChange}/>
                            </div>
                        </div>
                        <button className={Style.button}>Enregistrer</button>
                    </form>
                )
            }
           
        </div>
    )
}

export default FormAdress
