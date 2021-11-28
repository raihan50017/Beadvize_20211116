import React, { useEffect, useState } from 'react'
import { getMe, updateUser } from '../../../Utilities/request'
import Style from './FormAccount.module.scss'
import { DateInput } from '../../Input/InputDate';


const FormAccount = () => {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        birthDate: new Date()  //RBE 10/08
    })
    
    //const [data, setData] = useState<any>()
    const getUser = () => {
        const data = getMe()
        data.then(res => {
            //setData(res)
            setUser(res)
        })
        .catch(err => {
            console.log(err)
        })
     
    }

    useEffect(() => (getUser()),[])

    const handleChange = (e:any) => {
        const { name, value } = e.target
        setUser({
            ...user,
           [name] : value
        })
    }

    
    const handleDateChange = (date: Date) => {
        setUser({...user, birthDate: date})
    };

    const submit = async (e:any) => {
        e.preventDefault()
        let accessToken = localStorage.getItem('currentUser')
        let config = 
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }  
        const data = updateUser(user, config)
        data.then(res => {
            console.log(res)
        //    window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })
        
    }


        

 
    return (        
        <div className={Style.containAll}>
            <h1 className={Style.title}>Idendité</h1>   
            <div className={Style.barre}>
                <div></div>
            </div>
            {
                //data 
                user ? (
                    <form className={Style.form} onSubmit={submit}>
                        <label htmlFor="lastname">Nom</label>
                        <input type="text" id="lastname" name="lastname" defaultValue={user.lastname} onChange={handleChange}/>
                        <label htmlFor="firstname">Prénom</label>
                        <input type="text" id="firstname" name="firstname" defaultValue={user.firstname} onChange={handleChange}/>
                        <div className={Style.lastinput}>
                            <div className={Style.date}>
                                <label htmlFor="date">Date de naissance</label>
                             
                                <DateInput
                                    edit={true}
                                    name='availableDate'
                                    handleDateChange={handleDateChange}
                                    value={user.birthDate ? new Date(user.birthDate) : user.birthDate }
                                    //showMonthYearPicker
                                    dateFormat='dd/MM/yyyy'
                                />
                            
                                {/* <input type="date" name="birthDate" defaultValue={data.birthDate}  onChange={handleChange}/> */}
                            </div>
                            <button className={Style.button}>Enregistrer</button>
                        </div>
                    </form>
                )
                : (
                    null
                )
            }
            
        </div>
    )
}

export default FormAccount