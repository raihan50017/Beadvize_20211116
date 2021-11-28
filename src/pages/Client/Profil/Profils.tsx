import React from 'react'
import Style from './Profil.module.scss'
import Profil from '../../../components/MyProfil/Available.tsx/Available'
import Completed from '../../../components/MyProfil/CompletedProfil/CompletedProfil'
import Preference from '../../../components/MyProfil/MyPreferences/MyPreferences'
import Degree from '../../../components/MyProfil/MyDegree/MyDegree'
import Reseau from '../../../components/MyProfil/Reseaux/Reseaux'
import Skills from '../../../components/MyProfil/MyCompetences/MyCompetences'
import Presentation from '../../../components/MyProfil/MyPresentation/MyPresentation'
import Experience from '../../../components/MyProfil/Experiences/Experiences'
import Opinion from '../../../components/MyProfil/Opinion/Opinion'
import { useLocation } from 'react-router-dom'



const Profils = () => {

    const location:any = useLocation()
    const consultant = location.state

    return (
        <div className={Style.container}>
    
            {
                consultant ? (
                    <div className={Style.containAll}>
                        <div className={Style.colLeft}>
                            <Profil consultant={consultant} client={true}/>
                            <Preference consultant={consultant} client={true}/>
                            <Reseau />
                        </div>
                        <div className={Style.colRight}>
                            <Skills consultant={consultant} client={true}/>
                            <Presentation consultant={consultant} client={true}/>
                            <Experience consultant={consultant} client={true}/>
                            <Degree consultant={consultant} client={true}/>
                            {/* <Opinion /> */}
                        </div>
                    </div>
                )
                : (
                    null
                )
            }
            
        </div>
    )
}

export default Profils
