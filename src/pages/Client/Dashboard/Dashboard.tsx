import React, { useEffect, useState } from 'react'
import Style from './Dashboard.module.scss'
import MyMissions from '../../../components/Dashboard/MyMissions/MyMissions'
import MyProfil from '../../../components/Dashboard/MyProfil/MyProfil'
import NewProject from '../../../components/Dashboard/NewProject/NewProject'
import Contact from '../../../components/Dashboard/Contact/Contact'
import MyConsultant from '../../../components/Dashboard/MyConsultants/MyConsultants'
import { getMe, getProject, getProposotion } from '../../../Utilities/request'
import { useHistory } from 'react-router-dom'

const Dashboard = () => {

    const [isClient] =  useState(true)

    const [client, setClient] = useState<any>()
    const [missions, setMissions] = useState()
    const [propositions, setPropositions] = useState()
    const history = useHistory()

    const getUser = () => {
        const data = getMe()
        alert(JSON.stringify(data))
        data.then(res => {
            setClient(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const getMissions = async () => {
        const data = await getProject()
        setMissions(data)
    }

    const getPropo = async () => {
        const data = await getProposotion()
        setPropositions(data)
    }

    useEffect(() => {
        getUser()
        getMissions()
        getPropo()
    }, [])

    if(client && client.signUpStep < 2) {
        const step:number = client.signUpStep
        history.push({
            pathname : '/updateProfilClient',
            state: {
                step: step,
                updateProfil: true
            }
        })
    } else {
        return (
            <div className={Style.container}>
                {
                    client 
                        ?
                            <div className={Style.containAll}>
                                <div className={Style.miniCard}>
                                    <MyProfil isClient={isClient} client={client} />
                                    <NewProject />
                                    <Contact />
                                </div>
                                <div className={Style.divmission}>
                                    {
                                        missions && propositions ? (
                                            <MyMissions  isClient={isClient} missions={missions} propositions={propositions}/>
                                        )
                                        : null
                                    }
                                   
                                    <MyConsultant missions={missions} propositions={propositions}/>
                                </div>
                            </div>
                        :
                            null
                }
                
            </div>
        )
    }
}

export default Dashboard
