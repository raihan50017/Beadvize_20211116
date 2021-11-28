import React, { useEffect, useState } from 'react'
import Style from './ProfilsConsultants.module.scss'
import step from '../../../assets/Dashboard/selectConsultant.svg'
import ProfilConsultant from '../../../components/Missions/CardProfil/CardProfil'
import DetailMission from '../../../components/Missions/DetailMission/DetailMission'
import { useLocation } from 'react-router'
import { propositionOfProject } from '../../../Utilities/request'

const ProfilsConsultants = () => {

    const [client] = useState(true)
    const location = useLocation()
    const [id] = useState<any>(location.state)

    const [proposition, setProposition] = useState([])

    const getPropo = (id:string) => {
        const data = propositionOfProject(id)
        data.then(res => {
            setProposition(res)
            // console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => (getPropo(id)), [id])

    console.log(proposition)


    return (
        <div className={Style.container}>
            <div className={Style.img}>
                <img src={step} alt="status de la selection de consultant"/>
            </div>
            <div className={Style.containCard}>
                {/* <ProfilConsultant />
                <ProfilConsultant />
                <ProfilConsultant /> */}
                {
                    proposition ? (
                        proposition.map((propo:any, i:number) => {
                            if(propo.meta.status === "validated") {
                                return (
                                    <ProfilConsultant key={i} data={propo} />
                                )
                            } else if (propo.meta.status === "shortlisted") {
                                return (
                                    <ProfilConsultant key={i} data={propo} />
                                )
                            } else if(propo.meta.status === "rejected") {
                                return (
                                    <ProfilConsultant key={i} data={propo} />
                                )
                            } else if(propo.meta.status === "sent") {
                                return (
                                    <ProfilConsultant key={i} data={propo} />
                                )
                            }
                            else {
                                return null
                            }
                        })
                    )
                    : (
                        null
                    )
                }
            </div>
            <div className={Style.detailMission}>
                <DetailMission client={client} mission={id}/>
            </div>
        </div>
    )
}

export default ProfilsConsultants
