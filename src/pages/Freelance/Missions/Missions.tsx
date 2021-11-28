import React, { useCallback, useEffect, useState } from 'react'
import Style from './Missions.module.scss'
import CardWaiting from '../../../components/Missions/CardWaiting/CardWaiting'
import CardCurrent from '../../../components/Missions/CardCurrent/CardCurrent'
import CardCompleted from '../../../components/Missions/CardCompleted/CardCompleted'
import CardCancelled from '../../../components/Missions/CardCancelled/CardCancelled'
import CardNotWon from '../../../components/Missions/CardNotWon/CardNotWon'
import NewMission from '../../../components/Missions/NewMission/NewMission'
import Thanks from '../../../components/Missions/NewMission/Thanks/Thanks'
import { useLocation } from 'react-router-dom';
import { getProject, getProposotion } from '../../../Utilities/request'

const Missions = ({createMission}: any) => {

    const [index, setIndex] = useState<number>(0)
    const [newMission, setNewMission] = useState<boolean>(false)
    const [validateMission, setValidateMission] = useState<boolean>(false)
    const [proposition, setProposition] = useState()
    const [project, setProject] = useState()

    const location = useLocation()
    const buttons = [
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
        },
        {
            name: "Non remporté",
            class: Style.button,
            classGreen: Style.buttonGreen
        }
    ]

    const getPropo =  useCallback( async () => {       
        const data = await getProposotion()
        setProposition(data)
    }, [  setProposition ])
    

    const getProjects =  useCallback( async () => {        
        const data = await getProject()
        setProject(data)
    }, [  setProject ])
    

    useEffect(() => {
        getPropo()
        getProjects()
    },[getPropo, getProjects])

    const handleChangeCard = () => {
        switch(index) {
            case 0:
                return <CardWaiting propositions={proposition} missions={project}/>
            case 1: 
                return <CardCurrent missions={proposition}/>
            case 2:
                return <CardCompleted missions={proposition}/>
            case 3:
                return <CardCancelled missions={proposition}/>
            case 4:
                return <CardNotWon propositions={proposition}/>
            case 5:
                return !validateMission ? <NewMission setValidateMission={setValidateMission}/> : <Thanks />
            default:
                throw new Error('Unknown step');
        }
    }

    useEffect(() => {
        if(location.state) {
            setIndex(5)
        }
    }, [location])
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
                        <div className={Style.barre}>
                            <div className={Style.div}></div>
                        </div>
                        <button className={newMission && index === 5 ? Style.buttonGreen: Style.button} onClick={e => {setIndex(5); setNewMission(true)}}>Je propose une mission +</button>
                    </div>
                </div>
                <div className={Style.Card}>
                    {
                        proposition ? (
                            handleChangeCard()
                        )
                        : (
                            null
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Missions
