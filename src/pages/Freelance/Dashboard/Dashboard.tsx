import React, { useEffect, useState } from 'react'
import Style from './Dashboard.module.scss'
import MyMissions from '../../../components/Dashboard/MyMissions/MyMissions'
import MyProfil from '../../../components/Dashboard/MyProfil/MyProfil'
import MyPreferences from '../../../components/MyProfil/MyPreferences/MyPreferences'
import MySkills from '../../../components/Dashboard/MySkills/MySkills'
import UseBeadvise from '../../../components/Dashboard/UseBeadvize/UseBeadvize'
import MyCompany from '../../../components/Dashboard/MyCompany/MyCompany'
import { getMe, getProject, getProposotion } from '../../../Utilities/request'
import { useHistory } from 'react-router-dom'

const Dashboard = () => {

    const [consultant, setconsultant] = useState<any>()
    const [project, setProject] = useState()
    const [propositions, setPropositions] = useState()
    const history = useHistory()

    const getUser = () => {
        const data = getMe()
        data.then(res => {
            setconsultant(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const getPropo = async () => {
        const data = await getProposotion()
        setPropositions(data)
    }


    const getProjects = async () => {
        const data = await getProject()
        setProject(data)
    }

   
    useEffect(() => {
        getUser()
        getPropo()
        getProjects()
    }, [])

    if(consultant && consultant.signUpStep < 2) {
        const step:number = consultant.signUpStep + 1
        history.push({
            pathname : '/updateProfilConsultant',
            state: {
                step: step,
                updateProfil: true
            }
        })
    } else {
        return (
            <div className={Style.container}>
                {
                    consultant 
                        ?
                            <div className={Style.containAll}>
                                <div className={Style.miniCard}>
                                    <MyProfil client={consultant}  setconsultant={setconsultant} />
                                    <MyPreferences consultant={consultant} />
                                    <MySkills consultant={consultant} />
                                </div>
                                <div className={Style.divmission}>
                                    <MyMissions missions={project ? project : null} propositions={propositions} />
                                    <UseBeadvise />
                                    {/* <MyCompany client={consultant}/> */}
                                </div>
                            </div>
                        :
                            null
                }
                
            </div>
        )
    }
    return null
}

export default Dashboard
