import React, { useState } from 'react'
import Style from './Facturation.module.scss'
import StepAffected from '../../../assets/Dashboard/stepAffected.svg'
import StepEnd from '../../../assets/Dashboard/StepEnd.svg'
import Facture from '../../../components/Missions/Facturation/Facturation'
import DetailProfil from '../../../components/Missions/DetailProfil/DetailProfil'
import DetailMission from '../../../components/Missions/DetailMission/DetailMission'
import { useLocation } from 'react-router'

const Facturation = () => {

    const client = useState(true)
    const [statusEnd, setStatusEnd] = useState(false)
    const location = useLocation()
    
     console.log(location.state)
    

    return (
        <div className={Style.container}>
            <div className={Style.img}>
                {
                    statusEnd
                        ?
                            <img src={StepEnd} alt="status de la validation d consultant sur le projet"/>
                        :
                            <img src={StepAffected} alt="status de la validation d consultant sur le projet"/>
                }
            </div>
            <div className={Style.facture}>
                <Facture client={client} setStatusEnd={setStatusEnd} statusEnd={statusEnd} id={location.state} />
            </div>
            <div className={Style.facture}>
                <DetailProfil />
            </div>
            <div className={Style.facture}>
                <DetailMission  client={client} mission={location.state}/>
            </div>
        </div>
    )
}

export default Facturation
