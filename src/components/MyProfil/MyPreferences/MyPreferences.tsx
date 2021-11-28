import React, { useRef, useState } from 'react'
import Style from './MyPreferences.module.scss'
import pencil from '../../../assets/Dashboard/pencil.svg'
import Geosuggest, { Suggest } from 'react-geosuggest';
import { updateUser } from '../../../Utilities/request';
import { sectorItems } from '../../../Utilities/options'
import { useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';  

const MyPreferences = ({consultant, client}:any) => {

    const [showZone, setShowZone] = useState(false)
    const [showTJM, setShowTJM] = useState(false)
    const [showSector, setShowSector] = useState(false)
    const [valueTjm, setValueTjm] = useState()
    const geosuggestEl = useRef(null)

    const [localisation, setValue] = useState({
        profile : {
            localisation: {
                label: "",
                location: { 
                    lat: 0,
                    lng: 0 
                }
            }
        }
    })

    const [sectorActiviti, setSector] = useState({
        sector: undefined,
    })

    const handleChange = (item:any) => {
        console.log(item)
        setSector({
            ...sectorActiviti,
            sector: item
        })
    }

    const handleChangeTjm = (e:any) => {
        setValueTjm(e.target.value)
    }

    const onSuggestSelect = (suggest: Suggest) => {
        if(suggest) {
            setValue({
                ...localisation,
                profile :{
                    localisation: {
                        label: suggest.label,
                        location: {
                            lat: suggest.location.lat,
                            lng: suggest.location.lng
                        }
                    }
                }
            })
        }
    };

    const saveLocalisation = (value:object) => {
        let accessToken = localStorage.getItem('currentUser')
        let config = 
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }
       
        const data = updateUser(value, config)
        data.then(res => {
            window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })
    }

    const saveSector = (e:any) => {
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
           
            "profile": sectorActiviti
        }

        const data = updateUser(profile, config)
        data.then(res => {
            window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })
    }

    const saveTjm = () => {
        let accessToken = localStorage.getItem('currentUser')
        let config = 
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }
        
        const profile = {
            "profile":  {
                dailyPriceMin: valueTjm
            }
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
        setValueTjm(consultant.profile.dailyPriceMin)
        setSector({
            sector: consultant.profile.sector
        })
        setValue({
            profile : consultant.profile.localisation
        })
    }, [consultant])


    return (
        <div className={Style.container}>
            {
                !client ? (
                    <div className={Style.containDetails}>
                            {
                                !showZone ? (
                                    <button onClick={e => {setShowZone(!showZone);setShowTJM(!showTJM);setShowSector(!showSector)}}><img src={pencil} alt="représente un stylo"/></button>
                                )
                             : (
                                null
                            )
                             }
                        <h1 className={Style.title}>Mes préférences de mission</h1>
                        <div className={Style.barre}></div>
                        <div className={showZone ? Style.divinput2 : Style.divinput}>
                            <label htmlFor="zone">Zone d’activite</label>
                            {
                                !showZone  ? (
                                    <p>{ consultant.profile.localisation ? consultant.profile.localisation.label  : null}</p>
                                )
                                : (
                                    <Geosuggest
                                        ref={geosuggestEl}
                                        location={new google.maps.LatLng(53.558572, 9.9278215)}
                                        radius={20}
                                        placeholder="Saisir"
                                        onSuggestSelect={onSuggestSelect}
                                        autoComplete="off"
                                        country="Fr"
                                    />
                                )
                            }
                           {/*  {
                                !showZone ? (
                                    <button onClick={e => {setShowZone(!showZone);}}><img src={pencil} alt="représente un stylo"/></button>
                                )
                                : (
                                    <button onClick={e => {setShowZone(!showZone); saveLocalisation(localisation)}}>Modifier</button>
                                )
                            } */}
                        
                        </div>
                        <div className={Style.divinputTJM}>
                            <label htmlFor="tjm">TJM</label>
                            {
                                !showTJM ? (
                                    <p>{consultant.profile.dailyPriceMin} €</p>
                                )
                                : (
                                    <input type="number" name="tjm" value={valueTjm} onChange={handleChangeTjm}/>
                                )
                            }
                            {/* { 
                                !showTJM ? (
                                    <button><img src={pencil} alt="représente un stylo" onClick={e => setShowTJM(!showTJM)}/></button>
                                )
                                : (
                                    <button><img src={pencil} alt="représente un stylo" onClick={e => {setShowTJM(!showTJM); saveTjm()}}/></button>
                                )
                            } */}
                        
                        </div>
                        <div className={Style.divinputSecteur}>
                            <div className={Style.label}>
                                <label htmlFor="secteur">Secteur d’activite </label>
                                {/* <button className={Style.buttonImg}><img src={pencil} alt="représente un stylo" onClick={e => setShowSector(!showSector)} /></button> */}
                            </div>
                            <div className={Style.containeForm}>
                                {
                                    !showSector ? (
                                        consultant.profile.sector.map((sector:any, i:number) => {
                                            return <p key={i}>{sector.value}</p>
                                    })
                                    )
                                    : (
                                        <form onSubmit={saveSector}>
                                            <div className={Style.inputSkills}>
                                                <p>Mes secteurs en mots-clés</p>
                                                
                                                <CreatableSelect
                                                    className={Style.select}
                                                    options={sectorItems}
                                                    isMulti={true}
                                                    onChange={handleChange}
                                                    value={sectorActiviti.sector ? sectorActiviti.sector : null}
                                                    formatCreateLabel={value => `Ajouter  "${value}"`}
                                                    createOptionPosition='first'
                                                />
                                            </div>
                                            <div className={Style.containButton}>
                                                <button onClick={e => {saveTjm() ;saveLocalisation(localisation);}} type="submit" className={Style.update}>Modifier</button>
                                                <button className={Style.back} onClick={e => {setShowSector(!showSector);setShowZone(!showZone);setShowTJM(!showTJM)}} >Annuler</button>
                                            </div>
                                        </form>
                                    )
                                }
                                
                            </div> 
                        </div>
                    </div>
                )
                : (
                    <div className={Style.containDetails}>
                        <h1 className={Style.title}>Mes préférences de mission</h1>
                        <div className={Style.barre}></div>
                        <div className={showZone ? Style.divinput2 : Style.divinput}>
                            <label htmlFor="zone">Zone d’activite</label>
                                {consultant.profile.localisation && <p>{consultant.profile.localisation.label}</p>}
                        </div>
                        <div className={Style.divinputTJM}>
                            <label htmlFor="tjm">TJM</label>
                           {consultant.profile.dailyPriceMin &&  <p> {consultant.profile.dailyPriceMin} €</p>} 
                        </div>
                        <div className={Style.divinputSecteur}>
                            <div className={Style.label}>
                                <label htmlFor="secteur">Secteur d’activite </label>
                            </div>
                            <div className={Style.containeForm}>
                                { 
                                        consultant.profile.sector.map((sector:any, i:number) => {
                                            return <p key={i}>{sector.value}</p>
                                    })
                                
                                }
                            </div> 
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default MyPreferences
