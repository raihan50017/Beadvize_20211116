import React from 'react'
import Style from './Reseaux.module.scss'
import Twitter from '../../../assets/Dashboard/twitter.svg'
import Linkedin from '../../../assets/Dashboard/linkedin.svg'
import pencil from '../../../assets/Dashboard/pencil.svg'
import { useState } from 'react'


const Reseaux = ({consultant, client, setConsultant}: any,)  => {

    const [showForm, setShowForm] = useState(false)



    return (
        <div className={Style.container}>
            <div className={Style.containDetails}>
                <div className={Style.containImg}>
                    <h5 className={Style.title}>Réseaux</h5>
                    <div className={Style.barre}></div>
                </div>
                {
                    showForm ? (
                        <div>
                            <div className={Style.containInput}>
                                <label htmlFor="Twitter">Twitter</label>
                                <input type="text" name="Twitter" id="Twitter" />
                            </div>
                            <div className={Style.containInput}>
                                <label htmlFor="Linkedin">Linkedin</label>
                                <input type="Linkedin" name="Linkedin" id="Linkedin" />
                            </div>
                            <button className={Style.button} onClick={e =>setShowForm(false)}>Enregistrer</button>
                        </div>
                    )
                    : (
                        <div className={Style.reseau}>
                            <div>
                                <img src={Twitter} alt="représente twitter"/>
                                <img src={Linkedin} alt="représente linkedin"/>
                            </div>
                            <img src={pencil} alt="représente twitter" onClick={e => {setShowForm(true)}}/>
                        </div> 
                    )
                } 
            </div>
        </div>
    )
}

export default Reseaux
