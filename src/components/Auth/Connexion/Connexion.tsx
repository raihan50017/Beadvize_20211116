import React from 'react'
import Style from './Connexion.module.scss'
import linkedinn from '../../../assets/Auth/linkedin.svg'
import Cross from '../../../assets/Auth/Cross.svg'
import useForm from './ValidateForm/useForm'
import Validate from './ValidateForm/Validate'
import { logintest, linkedin, Oauth } from '../../../Utilities/request'
import { useHistory } from 'react-router'
import { createPasswordToken } from '../../../Utilities/utils'



import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



const Connexion = ({setShowModal, setNoActive, setResetPasswordToken, setEmail}:any) => {

    const history = useHistory()

    const [value, setValues] = React.useState({
        showPassword: false,
      });

    const handleClickShowPassword = () => {
        setValues({
            ...value,
            showPassword: !value.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const signup = async (values:object) => {
        await logintest(values)
        .then((res:any) => { 
            localStorage.setItem('currentUser', res.accessToken)
            window.location.reload()
        })
        .catch((err) => {
            if(err.response.status === 404) {
                let errors:any = {}
                errors.password = "email incorrect"
                setErrors(errors)
            }
            else if( err.response.data.errorCode === "initial_user") {
                setShowModal(false)
                setNoActive(true)
            }
            else if (err.response.status === 401){
                let errors:any = {}
                errors.password = "Mot de passe incorrect"
                setErrors(errors)
            }
            
        })
    }

    const submit = (values:object) => {
        signup(values)
    }

    const handleKeyDown = (e: any): void => {
        // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }

    const resetPassword = () => {
        setShowModal(false)
        const email = (values as any).email 
        if(email) {
            setEmail(email)
            createPasswordToken(email)
        } 
        setResetPasswordToken(true)
    }

//    const test = () => {
//        const data = linkedin()
//         data.then(res => {
//            console.log("response",res)
//         })
//         .catch(err => console.log(err))
//    }
        
    const redirectRegister = () => {
        history.push({
            pathname:'/registerFreelance',
            state : {
                register : true
            }
        })
        window.location.reload()
    }

    const {handleChange, errors, setErrors, handleSubmit, values} = useForm(submit, Validate)
    return (
        <div className={Style.section}>
            <div className={Style.container}>
                <div className={Style.cross} onClick={e => {setShowModal(false)}}>
                    <img src={Cross} alt="croix"/>
                </div>
                <h1 className={Style.title}>Connexion à mon compte BeAdvize</h1>
                <div className={Style.barre}></div>

                <button className={Style.notRegister} onClick={redirectRegister}>Pas encore membre BeAdvize ? <span>Inscrivez-vous</span></button>
                {/* <a href="/registerClient" className={Style.client}>Inscription Client</a>
                <a href="/registerFreelance" className={Style.consultant}>Inscription Consultant</a> */}
                <a className={Style.linkedin} href={linkedin}><img src={linkedinn} alt="logo linkedin" />Connexion avec linkedin</a>


        

                <input type="email" placeholder="E-mail professionnel" className={Style.input} name="email" onChange={handleChange} onKeyDown={e => {handleKeyDown(e)}}></input>
                {errors.email && <p className={Style.errors}>{errors.email}</p>}
                <input type="password" placeholder="Mot de passe" className={Style.input} name="password" onChange={handleChange}  onKeyDown={e => {handleKeyDown(e)}} ></input>
                {errors.password && <p className={Style.errors}>{errors.password}</p>}

                <OutlinedInput
               
           
                    label="Password"
                    size="small"
                    id="outlined-adornment-password"
                    type={value.showPassword ? 'text' : 'password'}
                    //value={value.password}
                    //onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {value.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }

                />


                <button className={Style.send} onClick={handleSubmit}>Connexion</button>
                <div className={Style.paraEnd}>
                    <button className={Style.forgot} onClick={e => {resetPassword()}}>J’ai perdu mon mot de passe.</button>
                </div>
            </div>
        </div>
    )
}

export default Connexion
