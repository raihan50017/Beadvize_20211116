import React, { useCallback, useEffect, useState } from 'react'
import Style from './MyProfil.module.scss'
import profil from '../../../assets/Dashboard/profil.svg'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { updateUser } from '../../../Utilities/request';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { DateInput } from '../../Input/InputDate';
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { green, red } from '@mui/material/colors';
import { Alert, alpha, styled } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';


const MyProfil = ({isClient, client, setconsultant}: any) => {
    
    const [calc, setCalc] = useState(0)
    const [showInput, setShowInput] = useState(false)
    const history = useHistory()
    const [date, setDate] = useState<Date>()
    const [isAvailable, setIsAvailable] = useState(false)





    const handleDateChange = (date: any) => {
        setDate(date)

    }

    const redirectProfil = () => {
        history.push('/myProfil')
    }

    const submit = (e:any) => {
        e.preventDefault()

        setIsAvailable(e.target.checked)

        let accessToken = localStorage.getItem('currentUser')
        let config = {headers: { Authorization: `Bearer ${accessToken}`,}}
        
        let data = {
            "profile": {
                "isAvailable"  : e.target.checked,
                "availableDate": date
                
            }
        }

        const update = updateUser(data, config)
        update.then(res => {
            //window.location.reload()
            setconsultant(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const percentage = useCallback(
        () => {
            let array = []
                if(client.profile.technicalSkills.length > 0) {
                    array.push(20)
                }
                if(client.profile.description) {
                    array.push(15)
                }
                if(client.profile.experience.length > 0) {
                    array.push(25)
                }
                if(client.profile.education.length > 0) {
                    array.push(20)
                }
                if(client.profile.picture) {
                    array.push(10)
                }
                if(client.profile.localisation && client.profile.dailyPriceMin && client.profile.sector.length > 0) {
                    array.push(10)
                }
                let total=0;
                for(let i in array) { 
                    total += array[i];
                }
            setCalc(total)
        },
        [setCalc, client],
    )

    useEffect(() => {
       setIsAvailable(client.profile.isAvailable)
  /*       if(client) {
            percentage()
        } */
    
        
    }, [client/* ,percentage */])


    const GreenSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: green[600],
          '&:hover': {
            backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
          },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: green[600],
        },
      }));

      const RedSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase': {
          color: red[600],
          '&:hover': {
            backgroundColor: alpha(red[600], theme.palette.action.hoverOpacity),
          },
        },
        '& .MuiSwitch-switchBase + .MuiSwitch-track': {
          backgroundColor: red[600],
        },
      }));

    return (
        <div className={Style.container}>
            
            <div className={Style.containDetails}>
                
                
                
                <div className={ !isClient ? Style.containImg : Style.containImgClient}>
                    
                {
                    client && client.profile.picture ? ( 
                    <Avatar  src={client.profile.picture.pictureUrl}  sx={{ width: 65, height: 65 }} />
                    )
                    : (
                        <img src={profil} alt="profil de la personne"/>
                    )
                }
                    <h5 className={Style.name}>{client.firstname + " " + client.lastname }</h5>
                    <p className={Style.job}>{(client.profile.title )  ? client.profile.title : null }</p>
                    <p className={Style.job}>{(client.company && client.company.companyName)  ? "@" + client.company.companyName : null }</p>
                    <div className={Style.barre}></div>
                </div>
                
                
                {/* <div className={ !isClient ? Style.profileToCompleted : Style.hidden}>
                    <p>Profil renseigné à</p>
                    <div  className={Style.progressBar}>
                        <CircularProgressbar    
                            value={calc} 
                            text={`${calc}%`}
                            styles={buildStyles({
                                pathTransitionDuration: 0.5,
                                pathColor: `#01E3A6`,
                                textColor: '#143D66',
                                trailColor: '#db0707',
                            })}
                        />
                    </div>
                    <button className={Style.button} onClick={redirectProfil}>Compléter</button>
                </div> */}
            </div>
            
         
             
            {
            isAvailable  ?
            <Alert severity="success"><GreenSwitch  onChange={(e) => submit(e)}   checked={true} />Disponibilité comfirmée</Alert>
            : 
            <Alert severity="error"><RedSwitch   onChange={(e) => submit(e)}   checked={false} />Disponibilité non confirmée</Alert>
            }

            <div className={ !isClient ? Style.status : Style.hidden}>
                {
                    client.profile.availableDate ? (
                       <h6 className={Style.dispo}>Disponible à partir du {moment(client.profile.availableDate).format('DD/MM/YYYY')} </h6>
                    //    <h6 className={Style.dispo}>Disponible à partir du  {client.profile.availableDate}</h6>
                    
                    )
                    : (
                        <div>
                            <h6 className={Style.indispo} >Actuellement indisponible</h6>
                            <DateInput
                                edit={showInput}
                                name='availableDate'
                                handleDateChange={handleDateChange}
                                value={date ? date : null}
                                minDate={new Date()}
                                dateFormat='dd/MM/yyyy'
                            />
                        </div>
                       
                    )
                }
                {
                    showInput ? (
                        <div className={Style.containInputDate}>
                            <DateInput
                                edit={showInput}
                                name='availableDate'
                                handleDateChange={handleDateChange}
                                value={date ? date : null}                                
                                minDate={new Date()}
                                dateFormat='dd/MM/yyyy'
                            />
                            <button className={Style.button} onClick={e => {setShowInput(false); submit(e)}}>Valider</button>
                        </div>
                    )
                    : (
                        <button className={Style.button} onClick={e => setShowInput(true)}>Mettre à jour</button>
                    )
                }
            </div>
        </div>
    )
}

export default MyProfil
