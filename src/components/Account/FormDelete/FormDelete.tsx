import React from 'react'
import Style from './FormDelete.module.scss'

const FormDelete = () => {
    return (
        <div className={Style.container}>
            <h1 className={Style.title}>Supprimer mon compte</h1>   
            <div className={Style.barre}>
                <div></div>
            </div>
            <form className={Style.form}>
                <h6 className={Style.weight}>Oups ! Dommage… pourquoi souhaitez-vous partir ?</h6>
                
                <div className={Style.checkbox}>
                    <input type="checkbox" id="1" className={Style.checkboxInput}/>
                    <label htmlFor="1"> Je ne travaille plus en tant que free-lance / entreprise</label>
                </div>

                <div className={Style.checkbox}>
                    <input type="checkbox" id="2" className={Style.checkboxInput}/>
                    <label htmlFor="2"> Je ne suis pas satisfait par les services proposés par BeAdvize Pourriez-vous nous en dire plus ?</label>
                </div>

                <input type="text" className={Style.input}/>
                
                <div className={Style.checkbox}>
                    <input type="checkbox" id="3" className={Style.checkboxInput}/>
                    <label htmlFor="3"> Je suis trop souvent sollicité pour des missions non pertinentes</label>
                </div>

                <div className={Style.checkbox}>
                    <input type="checkbox" id="4" className={Style.checkboxInput}/>
                    <label htmlFor="4"> Je privilégie une autre solution</label>
                </div>

                <div className={Style.checkbox}>
                    <input type="checkbox" id="5" className={Style.checkboxInput}/>
                    <label htmlFor="5">Les services de beAdvize ne sont pas pertinent pour ma situation professionnelle</label>
                </div>

                <div className={Style.checkbox}>
                    <input type="checkbox" id="6" className={Style.checkboxInput}/>
                    <label htmlFor="6">Autre :</label>
                    <input type="text" className={Style.other}/>
                </div>
                
                <div className={Style.containButton}>
                    <button className={Style.button}>Supprimer</button>
                </div> 
            </form>
        </div>
    )
}

export default FormDelete
