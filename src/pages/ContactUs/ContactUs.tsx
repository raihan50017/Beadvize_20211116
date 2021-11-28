import React, { useState } from "react";
import Style from "./ContactUs.module.scss";
import Footer from "../../components/Footer/Footer";
import CreatableSelect from 'react-select/creatable';
import {technicalSkillsItems } from '../../Utilities/options'
import { sendContact } from "../../Utilities/request";


const ContactUs = () => {

    const [mission, setMission] = useState({
        lastname: "",
        firstname:"",
        company: "",
        email: "",
        phone: "",
        message: "",
        title:"",
        type:""
    })  

    const handleChange = (e:any) => {
        const { name, value } = e.target
        setMission({
            ...mission,
           [name] : value
        })
    }


    const submit = (e:any) => {
        e.preventDefault()
        const data = sendContact(mission)
        data.then(res => {
            //pop up de confirmation
        })
        .catch(err => {
            console.log(err)
        })
    }


    return (
        <>
            <section className={Style.container}>
                <div className={Style.containForm}>
                    <form className={Style.form} onSubmit={submit}>
                        <h1 className={Style.title}>Formulaire de contact</h1>
                        <div className={Style.line}></div>
                        <h6 className={Style.subtitle}>
                            Entrez en contact avec notre équipe en remplissant
                            ce formulaire de contact.
                        </h6>
                        <div className={Style.containBlock}>
                            <div className={Style.firstBlock}>
                                <label htmlFor="lastname">Nom</label>
                                <input onChange={handleChange}
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                />

                                <label htmlFor="firstname">Prénom</label>
                                <input onChange={handleChange}
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                />

                                <label htmlFor="email">Email</label>
                                <input  onChange={handleChange} type="email" id="email" name="email" />
                                
                                <label htmlFor="">Je suis ...</label>
                                <CreatableSelect
                                    name="functionalSkills"
                                    classNamePrefix="form-control"
                                    closeMenuOnSelect = {true}
                                    options={technicalSkillsItems}
                                    noOptionsMessage={() => 'Item non disponible'}
                                    placeholder='Selectionner'    
                                    //value={valuesSecondStepClient.technicalSkills  ? valuesSecondStepClient.technicalSkills : null} 
                                    // onChange={setTechnicalSkills}
                                    formatCreateLabel={value => `Ajouter  "${value}"`}
                                    createOptionPosition='first'
                                />
                            </div>
                            <div className={Style.secondBlock}>
                                <label htmlFor="company">Entreprise </label>
                                <input onChange={handleChange}  type="text" id="company" name="company"/>

                                <label htmlFor="phone">Téléphone </label>
                                <input onChange={handleChange} type="text" id="phone" name="phone" />

                                <label htmlFor="title">Sujet</label>
                                <input onChange={handleChange} type="text" id="title" name="title" />
                            </div>
                        </div>

                        <label htmlFor="message" className={Style.message}>Message</label>
                        <textarea
                            onChange={handleChange}
                            name="message"
                            id="message"
                            cols={30}
                            rows={6}
                            className={Style.inputMessage}
                        ></textarea>

                        <button className={Style.button}>Envoyer</button>
                    </form>
                </div>
               
            </section>
            <Footer />
        </>
    );
};

export default ContactUs;
