import React, { useEffect, useState } from 'react'
import Style from './DetailMission.module.scss'
import DetailMissions from '../../../components/Missions/DetailMission/DetailMission'
import Proposition from '../../../components/Missions/Proposotion/Proposotion'
import Polygon from '../../../assets/Dashboard/Polygone.svg'
import DetailProposition from '../../../components/Missions/DetailProposition/DetailProposition'
import Step1 from '../../../assets/Dashboard/stepProposition.svg'
import Step2 from '../../../assets/Dashboard/step.svg'
import { useLocation } from 'react-router'
import { declineProp, getProjectById, getPropositionById } from '../../../Utilities/request'
import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

const DetailMission = () => {

    const [showProposition, setShowProposition] = useState<boolean>(false)
    const [send, setSend] = useState<boolean>(false)
    const [proposition, setProposition] = useState<any>()
    const location = useLocation()
    const states:any = location.state
    const idProposition = states.id
    const isConsultant = states.isConsultant
    const topFunction = () => {
        window.scrollTo(0, 1000);
    }
    const history = useHistory()

    const getProposition = useCallback(() => {
        const data = getPropositionById(idProposition)
        data.then(res => {
            setProposition(res)
        })
        .catch(err => {
            console.log(err)
        })
    }, [ idProposition ])

    const declineMission = (id:string) => {
        const data = declineProp(id)
        data.then(res => {
            history.push('/')
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {getProposition()}, [getProposition])

    return (
        <div  className={Style.container}>
            
            {// eslint-disable-next-line 
                !send && states.green
                    ?
                        <div>
                            <div className={Style.img}>
                                <img src={Step1} alt="status de la demande de missions"/>
                            </div>
                            <div className={Style.position1}>
                                <DetailMissions showProposition={showProposition} mission={idProposition} isConsultant={isConsultant}/>
                            </div>
                            <div className={showProposition ? Style.position2 : Style.hidden}>
                                <Proposition setSend={setSend} mission={idProposition} proposition={proposition}/>
                            </div>
                        </div>
                    : 
                        <div>
                            <div className={Style.img}>
                                <img src={Step2} alt="status de la demande de missions"/>
                            </div>
                            <div className={Style.position2}>
                                <DetailProposition mission={idProposition}/>
                            </div>
                            <div className={Style.position1}>
                                <DetailMissions showProposition={showProposition} mission={idProposition} isConsultant={isConsultant} gray={states.gray}/>
                            </div>
                        </div>
            }
            {
                showProposition
                    ?   
                        <footer className={!send? Style.footerGreen : Style.hidden}>
                            
                            <img src={Polygon} alt="triangle" onClick={topFunction} />
                        </footer>
                       
                    :  
                        <footer className={states.green ? Style.footer : Style.hidden}>
                            <button className={Style.talk}>Discuter</button>
                            <button className={Style.candidate} onClick={e => setShowProposition(true)}>Canditater</button>
                            <button className={Style.decline} onClick={e => declineMission(proposition._id)} >Décliner</button>
                        </footer>
                       
            }
        </div>
        
    )
}

export default DetailMission
