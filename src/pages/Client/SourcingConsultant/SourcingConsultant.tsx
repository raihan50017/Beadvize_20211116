import React, { useState } from 'react'
import Style from './SourcingConsultant.module.scss'
import SourcingStep from '../../../assets/Dashboard/sourcing.svg'
import DetailMission from '../../../components/Missions/DetailMission/DetailMission'
import { useLocation } from 'react-router'

const SourcingConsultant = () => {

    const proposition = useState(false)
    const sourcing  = useState(true)
    const location:any = useLocation()
    const id = location.state
    console.log(location.state)
    return (
        <div className={Style.container}>
            <div className={Style.img}>
                <img src={SourcingStep} alt="étape de sélection du candidat"/>
            </div>
            <div className={Style.mission}>
                <DetailMission proposition={proposition} sourcing={sourcing} mission={id}/>
            </div>
        </div>
    )
}

export default SourcingConsultant
