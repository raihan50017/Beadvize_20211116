import React, { useState } from 'react'
import Style from './RegisterForm2.module.scss'
import expertise from '../../../assets/Auth/expertise.svg'
import gestion from '../../../assets/Auth/gestion.svg'
import gestionIT from '../../../assets/Auth/gestionIT.svg'
import transition from '../../../assets/Auth/transition.svg'
import formation from '../../../assets/Auth/formation.svg'
import audit from '../../../assets/Auth/audit.svg'
import useForm from './ValidateForm/useFormStep2/useForm'
import Validate from './ValidateForm//useFormStep2/Validate'
import { updateUser } from '../../../Utilities/request'

const RegisterForm2 = ({ next, getCategories, getSpecial, step, updateProfil }:any ) => {
    const [buttonCard, setbuttonCard] = useState<boolean>(false)
    const [, setIndex] = useState<number>(0)
    const [show, setShow] = useState<boolean>(false)
    // eslint-disable-next-line 
    const [check, setCheck] = useState<number>()
    const [inde, setInde] = useState<Array<number>>([])
    const [categorie, setCate] = useState<Array<Object>>([])

    const datas = [
        {   
            id: 0,
            img: expertise,
            title: "Expertise Conseil",
            spe: [
                {1:"Stratégie et Business"},
                {1:"Plan Etudes sectorielles et analyse de cible"},
                {1:"Audit et Etudes d’opportunité"},
                {1:"Aide au choix et Cadrage .."}
            ]
        },
        {   
            id: 1,
            img: gestion,
            title: "Gestion de projet",
            spe: [
                {1:"Structure organisationnelle"},
                {1:"Etudes sectorielles et analyse de cible"},
                {1:"Optimisation de la performance & Gestion des processus"},
                {1:"Pilotage de programme ou projet et PMO …"}
            ]
        },
        {   
            id: 2,
            img: gestionIT,
            title: "Gestion de Projet IT",
            spe: [
                {1:"Gouvernance SI et cadrage "},
                {1:"Urbanisation et schéma directeur"},
                {1:"Maîtrise d’ouvrage MOA et AMOA"},
                {1:"Recette et formation …"}
            ]
        },
        {   
            id: 3,
            img: transition,
            title: "Trasformation digitale",
            spe: [
                {1:"Stratégie Digitale"},
                {1:"Digitalisation des processus"},
                {1:"Big Data et Data Marketing"},
                {1:"Mobilité et Cloud"}
            ]
        },
        {   
            id: 4,
            img: formation,
            title: "Formation / Coatching",
            spe: [
                {1:"Coatching individuel et équipes"},
                {1:"Conseil en communication"},
                {1:"Accompagnement professionnel .."},
            ]
        },
        {   
            id: 5,
            img: audit,
            title: "Audit RH/SIRH",
            spe: [
                {1:"Audit des organisations"},
                {1:"Transformation RH"},
                {1:"Digitalisation du recrutement RSE"},
                {1:"Social media & community management .."}
            ]
        },
    ]

    const getIndex = (i:number, e:any) => {
        
        setIndex(i)

        if(inde.length < 2 && !inde.includes(i)) {
            inde.push(i);
            (valuesSecondStepFree as any).push({categoryName: datas[i].title, speciality: []})
            categorie.push(datas[i])
        } else if(inde.includes(i)) {
            inde.map((ind, index) => { 
                if(ind === i) {
                    inde.splice(index, 1);
                    (valuesSecondStepFree as any).splice(index, 1)
                    categorie.splice(index, 1)
                }
                return inde
            })
        }
    }


    const getShow = () => {
        setShow(true)
    }


    function submit() {
        let accessToken = localStorage.getItem('register')
        if(updateProfil) {
            accessToken = localStorage.getItem('currentUser')
        }
        let config = 
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }  

        let category = 
        {  
    
            "signUpStep": step,
            "profile": {
                "category": valuesSecondStepFree,
            }
        }
       getCategories(categorie)
        let data = updateUser(category, config)
        data.then(res => {
            next()
        })
        .catch(err => {
            console.log(err)
        })

        
    }

    const getSpe = (e:any, i:number) => {
       
        const speArray = (valuesSecondStepFree[i] as any).speciality
        const indexSpe: number = (valuesSecondStepFree[i] as any).speciality.indexOf(e.target.value)

        valuesSecondStepFree.map((data, index) => {
        
            if(index === i &&  !speArray.includes(e.target.value)) {
                speArray.push(e.target.value)
            }
            else if(indexSpe !== -1 && speArray.includes(e.target.value) && index === i) {
           
                speArray.map((spe: string, indexSpeciality: number) => {
                    if(e.target.value === spe) {
                        speArray.splice(indexSpeciality, 1)
                    }
                    return speArray
                })
            }
            return valuesSecondStepFree
        })
    }

    const { errors, handleSubmit, valuesSecondStepFree,setSecondStepFree} = useForm(submit, Validate)

    return (
        <section className={Style.section}>
            <div className={Style.container}>
               
                    <div className={Style.categorie}>
                    <form onSubmit={handleSubmit}>
                        <h1 className={Style.title}>Ma catégorie</h1>
                        <div className={Style.barre}></div>
                        <h6 className={Style.question}>Choisissez jusqu’a 2 catégories professionnelles, la première catégorie est la principale :</h6>
                        <div className={Style.containCard}>
                            {
                                datas.map((data, i) => (
                                    buttonCard 
                                        ? 
                                    <div 
                                        className={inde.includes(i) ? Style.cardBlue : Style.card} 
                                        key={i}
                                        onClick={e => {
                                            getIndex(i, e);
                                            setbuttonCard(true); 
                                            getShow()
                                        }}
                                    > 
                                        <img src={data.img} alt="expertise"/>
                                        <h6>{data.title}</h6>    
                                    </div>
                                    : 
                                    <div className={Style.card} key={i} onClick={e => {getIndex(i, e); setbuttonCard(true); getShow()}}> 
                                    <img src={data.img} alt="expertise"/>
                                    <h6>{data.title}</h6>    
                                    </div> 
                                ))
                            }
                        </div>
                        {errors.categoryName && <p className={Style.errors}>{errors.categoryName}</p>}
                        {errors.speciality && <p className={Style.errors}>{errors.speciality}</p>}
                        {
                            buttonCard === true 
                                ?
                                <div className={Style.containButton}>
                                        <button type="submit" className={Style.buttonCategorie}>Continuer</button>
                                        <button className={Style.buttonCategorie2} onClick={(e) => {setbuttonCard(false); setShow(false); setInde([]); setSecondStepFree([])}}>Précédent</button>
                                </div>
                                :    
                            <button className={Style.buttonDisabled} disabled>Continuer</button>
                        }
                        </form>
                    </div>
            
                <div className={buttonCard === true ? Style.specialBlue : Style.special}>
                    {
                        show
                            ?
                            <div className={Style.questionSpe}>
                                <div className={Style.check}>
                                <h4> Quelles Spécialisation possédez-vous ?</h4>
                                    {
                                        inde
                                            ?
                                            inde.map((i, ind) => ( 
                                                <div key={ind}>
                                                    <h5>{datas[i].title}</h5>
                                                    {datas[i].spe.map((data, index) => (
                                                        
                                                        <div className={Style.ligne} key={index}>
                                                            <label>
                                                                <input
                                                                    type="checkbox" 
                                                                    multiple 
                                                                    value={data[1]} 
                                                                    name="speciality" 
                                                                    className={Style.checkbox} 
                                                                    onChange={e => setCheck(index)} 
                                                                    onClick={e => {getSpe(e, ind)}}
                                                                    // checked={}
                                                                    />
                                                                    
                                                                    {data[1]}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))
                                            :
                                            null
                                    }
                                </div>
                            </div>
                            :
                            <h6>Sélectionner une catégorie pour faire apparaitre les spécialisations</h6>
                    }
                </div>
            </div>
        </section>
    )
}

export default RegisterForm2
