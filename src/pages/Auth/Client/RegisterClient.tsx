import React, {useState} from 'react'
import RegisterForm from '../../../components/Auth/Freelance/RegisterForm1'
import RegisterForm2Client from '../../../components/Auth/Client/RegisterForm2Client'
import RegisterForm3Client from '../../../components/Auth/Client/RegisterForm3Client'
import Thanks from '../../../components/Auth/Client/Thanks'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Style from './RegisterClient.module.scss'

const RegisterClient = () => {

    const [step, setStep] = useState<number>(0)
    const type:string = "client"
    const location = useLocation()
    const [updateProfil, setUpdate] = useState(false)


    useEffect(() => {
        if(location.state) {
          setStep((location.state as any).step)
          setUpdate((location.state as any).updateProfil)
        }
    }, [location.state])


    const next = () => {
        setStep(step + 1)
    }
    
    const handleChangeForm = () => {
        switch(step) {
            case 0:
                return <RegisterForm next={next}  type={type} step={step}/>
            case 1:
                return <RegisterForm2Client next={next} step={step} updateProfil={updateProfil}/>
            case 2:
                return <RegisterForm3Client next={next} step={step} updateProfil={updateProfil}/>
            case 3:
                return <Thanks next={next}/>
            default:
                throw new Error('Unknown step');
        }
    }

    const handleProgressBar = () => {
        switch(step) {
            case 0:
                return (
                    <div className={Style.containProgress}>
                        <div className={Style.progress}></div>
                    </div>
                )
            case 1:
                return (
                    <div className={Style.containProgress2}>
                        <div className={Style.containProgressFull}></div>
                        <div className={Style.progress}></div>
                    </div>
                )
            case 2:
                return (
                    <div className={Style.containProgress}>
                        <div className={Style.containProgressFull}></div>
                        <div className={Style.containProgressFull}></div>
                        <div className={Style.progress}></div>
                    </div>
                )
            case 3:
                return (
                    <div className={Style.containProgress}>
                        <div className={Style.containProgressFull}></div>
                        <div className={Style.containProgressFull}></div>
                        <div className={Style.containProgressFull}></div>
                    </div>
                )
            default:
                throw new Error('Unknown step');
        }
    } 

    return (
        <div>
            <div className={Style.margin}></div>
            {handleProgressBar()}
            {handleChangeForm()}
        </div>
    )
}

export default RegisterClient
