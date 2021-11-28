import React from 'react'
import Style from './MissionNotWon.module.scss'
import DetailProposition from '../../../components/Missions/DetailProposition/DetailProposition'
import DetailMission from '../../../components/Missions/DetailMission/DetailMission'
import { useState } from 'react'
import MissionSvg from '../../../assets/Dashboard/MissionNotWon.svg'
import { useLocation } from 'react-router-dom'

const MissionNotWon = () => {
    const [proposition] = useState(true)
    const [missionNotWon] = useState(true)
    const location = useLocation()

    console.log((location.state as any).idProject)

    return (
        <div className={Style.container}>
            <div className={Style.img}>
                <img src={MissionSvg} alt=""/>
            </div>
            <div className={Style.facture}>
                <DetailProposition proposition={proposition} missionNotWon={missionNotWon}  mission={(location.state as any).idPropo}/>
            </div>
            <div className={Style.facture}>
                <DetailMission proposition={proposition }mission={(location.state as any).idProject}/>
            </div>
        </div>
    )
}

export default MissionNotWon
