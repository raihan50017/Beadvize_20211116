import React, { useState } from 'react'
import Style from './MyDegree.module.scss'
import pencil from '../../../assets/Dashboard/pencil.svg'
import { updateUser } from '../../../Utilities/request'
import moment from 'moment';
import { useEffect } from 'react';
import { DateInput } from '../../Input/InputDate';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const MyDegree = ({consultant, client, setConsultant}:any) => {

    const [showFormEducation, setShowForm] = useState(false)
    const [showNewFormEducation, setShowNewForm] = useState(false)

  /*   const [showFormCertif, setShowFormCertif] = useState(false)
    const [showNewFormCertif, setShowNewFormCertif] = useState(false)
    */

    const [degreeConsultant, setDegreeConsultant] = useState<Array<Object>>([])
    const [index, setIndex] = useState(0)
    const [degree, setDegree] = useState({
        school: "",
        title: "",
        startDate: new Date(),
        endDate: new Date(),
    })

/*     const [certifConsultant, setCertifConsultant] = useState<Array<Object>>([])
    const [indexCertif, setIndexCertif] = useState(0)
    const [certifications, setCertif] = useState({
        title: "",
        obtainDate: new Date()
    }) */



    const handleStartDateChange = (date: Date) => {
        setDegree({
            ...degree,
            startDate:  date
        })
    }

    const handleEndDateChange = (date: Date) => {
        setDegree({
            ...degree,
            endDate  : date
        })
    }

    const handleChange = (e:any) => {
        setDegree({
            ...degree,
            [e.target.name]: e.target.value
        })
    }

  /*   const handleChangeCertif = (e:any) => {
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
    } */
    


    const submit = (e:any) => {
        e.preventDefault()
        let accessToken = localStorage.getItem('currentUser')
        let config = 
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }

        degreeConsultant[index] = degree
        
        let profile = 
        {   
            "profile": {
                education : degreeConsultant
            }
        }

        const data = updateUser(profile, config)
        data.then(res => {
            setShowForm(!showFormEducation)
            setConsultant(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const addSubmit = (e:any) => {
        e.preventDefault()
        let accessToken = localStorage.getItem('currentUser')
        let config = 
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }

        degreeConsultant.push(degree)
        
        let profile = 
        {   
           
            "profile": {
                education : degreeConsultant
            }
        }
        const data = updateUser(profile, config)
        data.then(res => {
            setShowNewForm(!showNewFormEducation)
            setConsultant(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const deleteEducation = (e:any) => {
        e.preventDefault()
        let accessToken = localStorage.getItem('currentUser')
        let config = 
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }

        degreeConsultant.splice(index, 1);

        let profile = 
        {   
            "profile": {
                education : degreeConsultant
            }
        }

        const data = updateUser(profile, config)
        data.then(res => {
            setShowForm(!showFormEducation)
            setConsultant(res)
        })
        .catch(err => {
            console.log(err)
        })
    }


 /*    const sendCertif = (e:any) => {
        e.preventDefault()
        let accessToken = localStorage.getItem('currentUser')
        let config = 
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }

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
        })
        .catch(err => {
            console.log(err)
        })
    }

    const updateCertif = (e:any) => {
        e.preventDefault()
        let accessToken = localStorage.getItem('currentUser')
        let config = 
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }

        certifConsultant[indexCertif] = certifications
        
        let profile = 
        {   
           
            "profile": {
                certifications : certifConsultant
            }
        }

        const data = updateUser(profile, config)
        data.then(res => {
            setShowFormCertif(!showFormCertif)
        })
        .catch(err => {
            console.log(err)
        })
    }
 */
    useEffect(() => {
        if(consultant) {
            setDegreeConsultant(consultant.profile.education)
          //  setCertifConsultant(consultant.profile.certification)
        }
    }, [consultant])

    return (
        <div className={Style.container}>
            <div className={Style.containDetails}>
                <div className={Style.containImg}>
                    <h5 className={Style.title}>Diplômes</h5>
                    <div className={Style.barre}></div>
                </div>
                {
                    showNewFormEducation ? (
                        <form>
                           <div className={Style.input}>
                               <label htmlFor="school">École</label>
                               <input type="text" id="school" name="school"  autoComplete="off"  onChange={handleChange}/>
                           </div>
                           <div className={Style.input}>
                               <label htmlFor="title">Diplôme</label>
                               <input type="text" id="title" name="title"  autoComplete="off"  onChange={handleChange}/>
                           </div>
                           <div className={Style.date}>
                                <label htmlFor="startDate">Début totot</label>
                               {/*  <input type="text" name="startDate" id="startDate" autoComplete="off"  placeholder="Format : JJ/MM/AA"  onChange={handleChange}/> */}
                               <DateInput
                                            edit={true}
                                            name='availableDate'
                                            handleDateChange={handleStartDateChange}
                                            value={degree.startDate ? new Date(degree.startDate) : degree.startDate }
                                            showMonthYearPicker
                                            dateFormat='MM/yyyy'
                                        />
                                <label htmlFor="endDate">Fin</label>
                                {/* <input type="text" name="endDate" id="endDate" autoComplete="off" placeholder="Format : JJ/MM/AA" onChange={handleChange}/> */}
                                <DateInput
                                            edit={true}
                                            name='availableDate'
                                            handleDateChange={handleEndDateChange}
                                            value={degree.endDate ? new Date(degree.endDate) : degree.endDate }
                                            showMonthYearPicker
                                            dateFormat='MM/yyyy'
                                        />
                            </div>
                            <div className={Style.containButton}>
                                <button className={Style.button} onClick={e => addSubmit(e)}>Ajouter</button>
                                <button className={Style.button2} onClick={e =>{ setShowNewForm(!showNewFormEducation)}}>Annuler</button>
                            </div>
                        </form>
                    )
                    : (
                        <div>
                            
                            {
                                !client ? (
                                    <button className={Style.addDegree} onClick={e => setShowNewForm(!showNewFormEducation)}>Ajouter un Diplôme</button>
                                )
                                : (
                                    null
                                )
                            }
                        </div>
                    )
                }
                {
                    showFormEducation ? (
                        <form onSubmit={submit}>
                           <div className={Style.input}>
                               <label htmlFor="school">École</label>
                               <input type="text" id="school" name="school"  autoComplete="off" value={degree.school} onChange={handleChange}/>
                           </div>
                           <div className={Style.input}>
                               <label htmlFor="title">Diplôme</label>
                               <input type="text" id="title" name="title"  autoComplete="off" value={degree.title}  onChange={handleChange}/>
                           </div>
                           <div className={Style.date}>
                                <label htmlFor="startDate">Début </label>
                                <DateInput
                                            edit={true}
                                            name='availableDate'
                                            handleDateChange={handleStartDateChange}
                                            value={degree.startDate ? new Date(degree.startDate) : degree.startDate }
                                            showMonthYearPicker
                                            dateFormat='MM/yyyy'
                                        />
                                <label htmlFor="endDate">Fin</label>
                                <DateInput
                                            edit={true}
                                            name='availableDate'
                                            handleDateChange={handleEndDateChange}
                                            value={degree.endDate ? new Date(degree.endDate) : degree.endDate }
                                            showMonthYearPicker
                                            dateFormat='MM/yyyy'
                                        />
                            </div>
                            <div className={Style.containButton}>
                                <a onClick={deleteEducation} > <DeleteOutlineIcon />Supprimer</a> 
                                <button className={Style.button} onClick={e => submit(e)}>Modifier</button>
                                <button className={Style.button2} onClick={e =>{ setShowForm(!showFormEducation)}}>Annuler</button>
                            </div>
                        </form>
                    ) : (
                        degreeConsultant.map((education:any, i:number) => (
                            <div key={i} className={Style.nameDegree}>
                                <div className={Style.divPencil}>
                                    <p className={Style.weigth}>{education.title}</p>
                                    {
                                        !client ? (
                                            <img src={pencil} alt="représente un stylo" onClick={e => {setShowForm(!showFormEducation);  setIndex(i); setDegree(education)}}/>   
                                        ) : (
                                            null
                                        )
                                    }
                                    
                                </div>
                            
                                <p>{education.school}</p>
                                <p>{moment(education.startDate).format('MM/YYYY')} {" - "} {moment(education.endDate).format('MM/YYYY')}</p>
                            </div> 
                        ))
                    )
                }
                
{/* 
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-   CERTIFICATION
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 */}
              {/*   <div className={Style.containImg}>
                    <h5 className={Style.title}>Certifications</h5>
                    <div className={Style.barre}></div>
                </div>
                {
                    showNewFormCertif ? (
                        <form onSubmit={submit}>
                            <div className={Style.input}>
                                <label htmlFor="title">École</label>
                                <input type="text" id="title" name="title"  autoComplete="off" onChange={handleChangeCertif}/>
                            </div>
                            <div className={Style.input}>
                                <label htmlFor="obtainDate">Début</label> */}
{/*                                 <input type="text" name="obtainDate" id="obtainDate" autoComplete="off" placeholder="Format : JJ/MM/AA"  onChange={handleChangeCertif}/>
 */}  {/*                               <DateInput
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
                        <form onSubmit={submit}>
                            <div className={Style.input}>
                                <label htmlFor="title">École</label>
                                <input type="text" id="title" name="title"  autoComplete="off" value={certifications.title} onChange={handleChangeCertif}/>
                            </div>
                            <div className={Style.date}>
                                <label htmlFor="obtainDate">Début</label> */}
{/*                                 <input type="text" name="obtainDate" id="obtainDate" autoComplete="off" value={moment(certifications.obtainDate).format('DD/MM/YYYY')} placeholder="Format : JJ/MM/AA"  onChange={handleChangeCertif}/>
 */}                {/*                 <DateInput
                                            edit={true}
                                            name='obtainDate'
                                            handleDateChange={handleObtainDateChange}
                                            value={certifications.obtainDate ? new Date(certifications.obtainDate) : certifications.obtainDate}
                                            showMonthYearPicker
                                            dateFormat='MM/yyyy'
                                        />
                            </div>
                            <div className={Style.containButton}>
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
                                                    <img src={pencil} alt="représente un stylo" onClick={e => {setShowFormCertif(!showFormEducation); setCertif(certif); setIndexCertif(i)}}/>   
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
                } */}
            </div>
        </div>
    )
}

export default MyDegree
