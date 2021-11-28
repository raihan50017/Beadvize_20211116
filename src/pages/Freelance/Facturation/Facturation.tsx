import React, { useState } from 'react'
import Style from './Facturation.module.scss'
import Facture from '../../../components/Missions/Facturation/Facturation'
import StepAffected from '../../../assets/Dashboard/affectedProfect.svg'
import DetailProposition from '../../../components/Missions/DetailProposition/DetailProposition'
import DetailMission from '../../../components/Missions/DetailMission/DetailMission'
import { useLocation } from 'react-router'
import lastStep from '../../../assets/Dashboard/LastStep.svg'

const Facturation = () => {
    const [proposition] = useState(true)

    const location = useLocation()
    return (
        <div className={Style.container}>
            {
                !location.state
                    ?
                        <div className={Style.img}>
                            <img src={StepAffected} alt="status de la demande de missions"/>
                        </div>
                    :
                        <div className={Style.img}>
                            <img src={lastStep} alt="status de la demande de missions"/>
                        </div>
            } 
            
            
            <div className={Style.facture}>
                <Facture />
            </div>
            <div className={Style.facture}>
                <DetailProposition proposition={proposition} />
            </div>
            <div className={Style.facture}>
                <DetailMission proposition={proposition} />
            </div>
        </div>
    )
}

export default Facturation
