import React, { useState } from 'react'
import RegisterForm from '../../../components/Auth/Freelance/RegisterForm1'
import Style from './Register.module.scss'
import RegisterForm2 from '../../../components/Auth/Freelance/RegisterForm2'
import RegisterForm3 from '../../../components/Auth/Freelance/RegisterForm3'
import Thanks from '../../../components/Auth/Freelance/Thanks'
import RegisterForm4 from '../../../components/Auth/Freelance/RegisterForm4'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const RegisterFreelance = () => {

    const [step, setStep] = useState<number>(0)
    const [categories, setCategories] = useState<Array<Object>>()
    const [spe, setSpe] = useState()
    const [user, setUser] = useState<string>()
    const type:string = "consultant"
    const location = useLocation()
    const [updateProfil, setUpdate] = useState(false)

    const next = () => {
        setStep(step + 1)
    }
    
    const previus = () => {
        setStep(step - 1)
    }

    function getCategories(categorie:any) {
        setCategories(categorie)
    }

    function getSpecial(spe:any) {
        setSpe(spe)
    }

    const [index, setIndex] = useState<number>()

    
    const handleChangeForm = () => {
        switch(step) {
            case 0:
                return <RegisterForm next={next} setUser={setUser} type={type} step={step}/>
            case 1:
                return <RegisterForm2 next={next} getCategories={getCategories} idUser={user} getSpecial={getSpecial} step={step} updateProfil={updateProfil}/>
            case 2:
                return <RegisterForm3 next={next} previus={previus} categories={categories} idUser={user} spe={spe} index={index} setIndex={setIndex} step={step} updateProfil={updateProfil}/>
            case 3:
                return <Thanks/>
            case 4:
                return <RegisterForm4 idUser={user}/>
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

    useEffect(() => {
        if(location.state && (location.state as any).step) {
          setStep((location.state as any).step)
          setUpdate((location.state as any).updateProfil)
        }
    }, [location.state])

    return (
        <div className={Style.background}>
            {handleProgressBar()}
            {handleChangeForm()}
        </div>
    ) 
}

export default RegisterFreelance
