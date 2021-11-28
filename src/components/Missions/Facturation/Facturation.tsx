import React from 'react'
import { Link } from 'react-router-dom'
import { endProject } from '../../../Utilities/request'
import Style from './Facturation.module.scss'

const Facturation = ({client, setStatusEnd, statusEnd, id}: any) => {

    console.log(id)

    const endMission = () => {
        const data = endProject(id)
        data.then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className={Style.container}>
            <div className={Style.containAll}>
                <div className={Style.containDetails}>
                    
                    <h1 className={Style.title}>Facturation</h1>
                    <div className={Style.barre}></div>
                    <div className={Style.total}>
                        <div className={Style.detailTotal}>
                            <h6>Total Facture </h6>
                            <p>19 450,00 €</p>
                        </div>
                        <div className={Style.detailTotal}>
                            <h6>En attente de paiement</h6>
                            <p>19 000,00 €</p>
                        </div>
                        <div className={Style.detailTotal}>
                            <h6>Paiement effectué</h6>
                            <p>450,00 €</p>
                        </div>
                    </div>
                    <table className={Style.tab}>
                        <thead>
                            <tr className={Style.row}>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Montant HT</th>
                                <th>Montant TTC</th>
                                <th>Réference</th>
                                <th>Versement</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={Style.row}>
                                <td className={Style.fontWeight}>20.12.21</td>
                                <td>Lorem ipsum dolor sit amet, consetetur </td>
                                <td className={Style.fontWeight}>375,00 €</td>
                                <td className={Style.fontWeight}>450,00 €</td>
                                <td>FA-32-L</td>
                                <td>15.01.21</td>
                            </tr>
                            <tr className={Style.row}>
                                <td className={Style.fontWeight}>21.12.21</td>
                                <td>Lorem ipsum dolor sit amet, consetetur </td>
                                <td className={Style.fontWeight}>7 916,67 €</td>
                                <td className={Style.fontWeight}>9500,00 €</td>
                                <td><input type="text"/></td>
                                <td>En attente</td>
                            </tr>
                            <tr className={Style.row}>
                                <td className={Style.fontWeight}>24.01.21</td>
                                <td>Lorem ipsum dolor sit amet, consetetur </td>
                                <td className={Style.fontWeight}>7 916,67 €</td>
                                <td className={Style.fontWeight}>9500,00 €</td>
                                <td><input type="text"/></td>
                                <td>En attente</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={Style.containButton}>
                        {
                            !client
                                ?
                                    <Link className={Style.button} to={{
                                        pathname:"/dashboardFreelance"
                                    }}>
                                        Retour au dashboard
                                    </Link>
                                :
                                    <button className={ !statusEnd ? Style.button2 : Style.hidden} onClick={ e => {setStatusEnd(true); endMission()}}>Terminer la mission</button>
                        }
                    </div>      
                </div>
            </div>
        </div>
    )
}

export default Facturation
