import React, { useState } from 'react'
import Style from './Certification.module.scss'
import pencil from '../../../assets/Dashboard/pencil.svg'
import { updateUser } from '../../../Utilities/request'
import moment from 'moment';
import { useEffect } from 'react';
import { DateInput } from '../../Input/InputDate';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Certification = ({consultant, client, setConsultant}:any) => {

    const [showFormCertif, setShowFormCertif] = useState(false)
    const [showNewFormCertif, setShowNewFormCertif] = useState(false)
   

    const [certifConsultant, setCertifConsultant] = useState<Array<Object>>([])
    const [indexCertif, setIndexCertif] = useState(0)
    const [certifications, setCertif] = useState({
        title: "",
        obtainDate: new Date()
    })

    const handleChangeCertif = (e:any) => {
        setCertif({
            ...certifications,
            [e.target.name]: e.target.value
        })
    }

    const handleObtainDateChange = (date: Date) => {
        setCertif({
            ...certifications,
            obtainDate:  date
        })
    }
    
    const sendCertif = (e:any) => {
        e.preventDefault()
        let accessToken = localStorage.getItem('currentUser')
        let config = {headers: {Authorization: `Bearer ${accessToken}`,}}

        certifConsultant.push(certifications)
        
        let profile = 
        {   
            "profile": {
                certification : certifConsultant
            }
        }

        const data = updateUser(profile, config)
        data.then(res => {
            setShowNewFormCertif(!showNewFormCertif)
            setConsultant(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const updateCertif = (e:any) => {
        e.preventDefault()
        let accessToken = localStorage.getItem('currentUser')
        let config = {headers: {Authorization: `Bearer ${accessToken}`,}}

        certifConsultant[indexCertif] = certifications
        
        let profile = 
        {     
            "profile": {
                certification : certifConsultant
            }
        }

        const data = updateUser(profile, config)
        data.then(res => {
            setShowFormCertif(!showFormCertif)
            setConsultant(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const deleteCertif = (e:any) => {
        e.preventDefault()
        let accessToken = localStorage.getItem('currentUser')
        let config = {headers: {Authorization: `Bearer ${accessToken}`,}}



        certifConsultant.splice(indexCertif, 1);

      
        let profile = 
        {     
            "profile": {
                certification : certifConsultant
            }
        }

        

        const data = updateUser(profile, config)
        data.then(res => {
            alert(JSON.stringify(profile))
            setShowFormCertif(!showFormCertif)
            setConsultant(res)
        })
        .catch(err => {
            console.log(err)
        })
    }


    useEffect(() => {
        if(consultant) {
            setCertifConsultant(consultant.profile.certification)
        }
    }, [consultant])

    return (
        <div className={Style.container}>
            <div className={Style.containDetails}>
                <div className={Style.containImg}>
                    <h5 className={Style.title}>Certifications</h5>
                    <div className={Style.barre}></div>
                </div>
                {
                    showNewFormCertif ? (
                        <form onSubmit={sendCertif}>
                            <div className={Style.input}>
                                <label htmlFor="title">Certification</label>
                                <input type="text" id="title" name="title"  autoComplete="off" onChange={handleChangeCertif}/>
                            </div>
                            <div className={Style.input}>
                                <label htmlFor="obtainDate">Date d'obtention</label>
                                <DateInput
                                    edit={true}
                                    name='obtainDate'
                                    handleDateChange={handleObtainDateChange}
                                    value={certifications.obtainDate ? new Date(certifications.obtainDate) : certifications.obtainDate }
                                    showMonthYearPicker
                                    dateFormat='MM/yyyy'
                                />
                            </div>
                            <div className={Style.containButton}>
                                <button className={Style.button} onClick={e => sendCertif(e)}>Ajouter</button>
                                <button className={Style.button2} onClick={e => setShowNewFormCertif(!showNewFormCertif)}>Annuler</button>
                            </div>
                        </form>
                    )
                    : (
                        <div>
                            {
                                !client ? (
                                    <button className={Style.addCertif} onClick={e => setShowNewFormCertif(!showNewFormCertif)}>Ajouter une certification</button>
                                ): (
                                    null
                                )
                            }
                            
                        </div>
                    )
                }
                {
                    showFormCertif ? (
                        <form onSubmit={updateCertif}>
                            <div className={Style.input}>
                                <label htmlFor="title">Certification</label>
                                <input type="text" id="title" name="title"  autoComplete="off" value={certifications.title} onChange={handleChangeCertif}/>
                            </div>
                            <div className={Style.date}>
                                <label htmlFor="obtainDate">Date d'obtention</label>
{/*                                 <input type="text" name="obtainDate" id="obtainDate" autoComplete="off" value={moment(certifications.obtainDate).format('DD/MM/YYYY')} placeholder="Format : JJ/MM/AA"  onChange={handleChangeCertif}/>
 */}                                <DateInput
                                            edit={true}
                                            name='obtainDate'
                                            handleDateChange={handleObtainDateChange}
                                            value={certifications.obtainDate ? new Date(certifications.obtainDate) : certifications.obtainDate}
                                            showMonthYearPicker
                                            dateFormat='MM/yyyy'
                                        />
                            </div>
                            <div className={Style.containButton}>
                                <a onClick={deleteCertif} > <DeleteOutlineIcon />Supprimer</a> 
                                <button className={Style.button} onClick={e => updateCertif(e)}>Modifier</button>
                                <button className={Style.button2} onClick={e => setShowFormCertif(!showFormCertif)}>Annuler</button>
                            </div>
                        </form>
                    ) : (
                        certifConsultant.map((certif:any, i:number) => { 
                            if(certif) {
                                return(
                                    <div key={i} className={Style.nameDegree}>
                                        <div className={Style.divPencil}>
                                            <p className={Style.weigth}>{certif.title}</p>
                                            {
                                                !client ? (
                                                    <img src={pencil} alt="représente un stylo" onClick={e => {setShowFormCertif(!showFormCertif); setCertif(certif); setIndexCertif(i)}}/>   
                                                ) : (
                                                    null
                                                )
                                            }
                                            
                                        </div>
                                        <p>{moment(certif.obtainDate).format('DD/MM/YYYY')} {" - "} {moment(certif.endDate).format('DD/MM/YYYY')}</p>
                                    </div>
                                ) 
                            }
                            else {
                                return null
                            }           
                        })
                    )
                }
            </div>
        </div>
    )
}

export default Certification
