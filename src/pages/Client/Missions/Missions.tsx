import React, {useCallback, useEffect, useState} from 'react'
import Style from './Missions.module.scss'
import CardWaiting from '../../../components/Missions/CardWaiting/CardWaiting'
import CardCurrent from '../../../components/Missions/CardCurrent/CardCurrent'
import CardCompleted from '../../../components/Missions/CardCompleted/CardCompleted'
import CardCancelled from '../../../components/Missions/CardCancelled/CardCancelled'
import CreateMission from '../../../components/Missions/CreateMission/CreateMission'
import { getProject, getProposotion } from '../../../Utilities/request'

const Missions = () => {
    const [index, setIndex] = useState<number>(0)
    const [, setNewMission] = useState<boolean>(false)
    const client = useState(true)
    const [missions, setMissions] = useState()
    const [propositions, setPropositions] = useState()
    const buttons = [

        {
            name: "Créer projet",
            class: Style.button,
            classGreen: Style.buttonGreen
        },
        {
            name: "En attente",
            class: Style.button,
            classGreen: Style.buttonGreen
        },
        {
            name: "En cours",
            class: Style.button,
            classGreen: Style.buttonGreen
        },
        {
            name: "Terminé",
            class: Style.button,
            classGreen: Style.buttonGreen
        },
        {
            name: "Annulé",
            class: Style.button,
            classGreen: Style.buttonGreen
        }
    ]

    const getMissions =  useCallback( async () => {        
        const data = await getProject()
        setMissions(data)
    }, [  setMissions ])


    const getPropo = useCallback( async () => {
        const data = await getProposotion()
        setPropositions(data)
    }, [ setPropositions ])

    
    useEffect(() => {
        getMissions()
        getPropo()
    }, [ getMissions, getPropo ])


    const handleChangeCard = () => {
        switch(index) {
            case 0:
                return <CreateMission />
            case 1: 
                return <CardWaiting client={client} missions={missions} propositions={propositions} />
            case 2:
                return <CardCurrent client={client} missions={missions} propositions={propositions}/>
            case 3:
                return <CardCompleted client={client}  missions={missions} propositions={propositions}/>
            case 4:
                return <CardCancelled client={client}  missions={missions} propositions={propositions}/>
            default:
                throw new Error('Unknown step');
        }
    }

    return (
        <div className={Style.container}>
            <div className={Style.containAll}>
                <div className={Style.status}>
                    <div className={Style.containButton}>
                        {
                            buttons.map((button, i) => (
                                <button key={i} className={index === i ? button.classGreen : button.class} onClick={e => {setIndex(i); setNewMission(false)}}>{button.name}</button>
                            ))
                        }
                    </div>
                </div>
                <div className={Style.Card}>
                    {handleChangeCard()}
                </div>
            </div>
        </div>
    )
}

export default Missions
