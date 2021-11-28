import React, { useEffect, useState } from 'react'
import Style from './MyProfil.module.scss'
import Profil from '../../../components/MyProfil/Available.tsx/Available'
import Completed from '../../../components/MyProfil/CompletedProfil/CompletedProfil'
import Preference from '../../../components/MyProfil/MyPreferences/MyPreferences'
import Degree from '../../../components/MyProfil/MyDegree/MyDegree'
import Certification from '../../../components/MyProfil/Certification/Certification'
import Reseau from '../../../components/MyProfil/Reseaux/Reseaux'
import Skills from '../../../components/MyProfil/MyCompetences/MyCompetences'
import Presentation from '../../../components/MyProfil/MyPresentation/MyPresentation'
import Experience from '../../../components/MyProfil/Experiences/Experiences'
import Opinion from '../../../components/MyProfil/Opinion/Opinion'
import { useLocation } from 'react-router'
import { getMe } from '../../../Utilities/request'


const MyProfil = () => {


    const location = useLocation()

    const [consultant, setConsultant] = useState()

    const getUser = () => {
        const data = getMe()
        data.then(res => {
            setConsultant(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getUser()
    }, [])
    
    console.log(location.state)

    return (
        <div className={Style.container}>
             {
                    location.state === true 
                        ?
                            <div className={Style.notCompleted}>
                                <h1>Veuillez compléter votre profile</h1>
                            </div>
                        :
                            null
            }
            {
                consultant ? (
                    <div className={Style.containAll}>
                        <div className={Style.colLeft}>
                            <Profil consultant={consultant} setConsultant={setConsultant}/>
                            <Completed consultant={consultant} setConsultant={setConsultant}/>
                            <Preference consultant={consultant} setConsultant={setConsultant}/>
                          {/*   <Reseau consultant={consultant}  setConsultant={setConsultant}/> */}
                        </div>
                        <div className={Style.colRight}>
                            <Skills consultant={consultant} setConsultant={setConsultant} />
                            <Presentation consultant={consultant} setConsultant={setConsultant}/>
                            <Experience consultant={consultant} setConsultant={setConsultant}/>
                            <Degree consultant={consultant} setConsultant={setConsultant}/>
                            <Certification consultant={consultant} setConsultant={setConsultant}/>
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

export default MyProfil
