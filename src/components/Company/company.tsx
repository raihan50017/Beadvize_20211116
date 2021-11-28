import React, { useEffect, useState } from 'react'
import {getMe, saveFile, updateUser } from '../../Utilities/request'
import Style from './company.module.scss'


const MyEnterprise = () => {

    const [user, setUser] = useState<any>()
    const getUser = () => {
        const data = getMe()
        data.then(res => {
            setUser(res)
            setCompany({
                companyName: res.company.companyName,
                companyCode:   res.company.companyCode,
                address1:  res.company.address1,
                city:  res.company.city,
                zipcode:  res.company.zipcode
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => (getUser()),[])

    const [fileName, setFileName] = useState<Array<Object>>([])
    const [company, setCompany] = useState({
        companyName: "",
        companyCode: "",
        address1: "",
        city: "",
        zipcode: ""
    })

    let data:any = []
    const getFile = (e:any) => {
       
        data.push(e.target.files[0])
        if(data.length === 2) {
            setFileName(data)
        }
        
    }
 
    const handleChange = (e:any) => {
        const {name, value} = e.target
        
        setCompany({
            ...company,
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
        let dataCompany = {
            company
        }
        const data = updateUser(dataCompany, config)
        data.then(res => {
            window.location.reload()
            
        })
        .catch(err => {
            console.log(err)
        })
        // const file = saveFile(fileName)
        //     file.then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }

    // useEffect(() => {
    //     if(user) {
    //         setCompany({
    //             companyName: user.company.companyName,
    //             companyCode:   user.company.companyCode,
    //             address1:  user.company.address1,
    //             city:  user.company.city,
    //             zipcode:  user.company.zipcode
    //         })
    //     }
       
    // }, [user])

    return (
        <div className={Style.container}>
            <div className={Style.containAll}>
                <h1 className={Style.title}>Mon entreprise</h1>
                <div className={Style.barre}></div>
                {
                    user ? (
                        <form onSubmit={submit}>
                            <div className={Style.input}>
                                <label htmlFor="companyName">Nom de l’entreprise</label>
                                <input type="text" id="companyName" name="companyName" value={company.companyName} onChange={handleChange} />
                            </div>
                            <div className={Style.input}>
                                <label htmlFor="companyCode">Forme Juridique</label>
                                <input type="text" id="companyCode" name="companyCode" value={company.companyCode} onChange={handleChange} />
                            </div>
                            <div className={Style.input}>
                                <label htmlFor="">Représentant Légal</label>
                                <input type="text"/>
                            </div>
                            <div className={Style.input}>
                                <label htmlFor="address1">Adresse</label>
                                <input type="text" id="address1" name="address1" value={company.address1} onChange={handleChange} />
                            </div>
                            <div className={Style.contain3input}>
                                <div className={Style.input}>
                                    <label htmlFor="zipcode">Code Postal</label>
                                    <input type="text" id="zipcode" name="zipcode" value={company.zipcode} onChange={handleChange} />
                                </div>
                                <div className={Style.input}>
                                    <label htmlFor="city">Ville</label>
                                    <input type="text" id="city" name="city" value={company.city} onChange={handleChange} />
                                </div>
                                <div className={Style.input}>
                                    <label htmlFor="">Pays</label>
                                    <input type="text"/>
                                </div>
                            </div>
                        {/*     <div className={Style.containCard}>
                                <div className={Style.card}>
                                    <div>
                                        <h6 className={Style.color}>Pièce d’identité (recto / verso)</h6>
                                        <label htmlFor="file">Ajouter / Modifier</label>
                                        <input type="file" id="file" onChange={getFile}/>
                                    </div> 
                                    <div className={Style.border}></div>
                                    <p>Lorem Ipsum.pdf</p>
                                </div>
                                <div className={Style.card}>
                                    <div>
                                        <h6 className={Style.color}>Numéro Kbis)</h6>
                                        <label htmlFor="file">Ajouter / Modifier</label>
                                        <input type="file" id="file" onChange={getFile}/>
                                    </div> 
                                    <div className={Style.border}></div>
                                    <p>Lorem Ipsum.pdf</p>
                                </div>
                                <div className={Style.card}>
                                    <div>
                                        <h6 className={Style.color}>Relevé d’identité Bancaire</h6>
                                        <label htmlFor="file">Ajouter / Modifier</label>
                                        <input type="file" id="file" onChange={getFile}/>
                                    </div> 
                                    <div className={Style.border}></div>
                                    <p>Lorem Ipsum.pdf</p>
                                </div>
                                <div className={Style.card}>
                                <div>
                                    <h6 className={Style.color}>RCP</h6>
                                    <label htmlFor="file">Ajouter / Modifier</label>
                                    <input type="file" id="file" onChange={getFile}/>
                                </div> 
                                <div className={Style.border}></div>
                                <p>Lorem Ipsum.pdf</p>
                            </div> 
                            </div>*/}
                            <button className={Style.button}>Envoyer</button>
                        </form>
                    )
                    : (
                        null
                    )
                }
                
            </div>
        </div>
    )
}

export default MyEnterprise
