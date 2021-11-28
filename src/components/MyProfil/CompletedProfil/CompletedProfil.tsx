import React, { useCallback, useState } from 'react'
import Style from './CompletedProfil.module.scss'
import {ImCross} from 'react-icons/im'
import { useEffect } from 'react'
import { Alert, Box, LinearProgress, LinearProgressProps, Typography } from '@mui/material'

const CompletedProfil = ({consultant}:any) => {

    const [calc, setCalc] = useState(0)
    const percentage = useCallback(
        () => {
            let array = []
                if(consultant.profile.technicalSkills.length > 0) {
                    array.push(20)
                }
                if(consultant.profile.description) {
                    array.push(15)
                }
                if(consultant.profile.experience.length > 0) {
                    array.push(25)
                }
                if(consultant.profile.education.length > 0) {
                    array.push(20)
                }
                if(consultant.profile.picture) {
                    array.push(10)
                }
                if(consultant.profile.localisation && consultant.profile.dailyPriceMin && consultant.profile.sector.length > 0) {
                    array.push(10)
                }
                let total=0;
                for(let i in array) { 
                    total += array[i];
                }
            setCalc(total)
        },
        [setCalc, consultant],
    )

        useEffect(() => {
            if(consultant) {
                percentage()
            }
        }, [consultant,percentage])



        function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
            return (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                  <LinearProgress variant="determinate" {...props} sx={{ height : '16px'}}/>
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                  )}%`}</Typography>
                </Box>
              </Box>
            );
          }




    return (
        <div className={Style.container}>
            <div className={Style.containDetails}>
                <div className={Style.containImg}>
                    <h5 className={Style.title}>Profil complété à <span>{calc}%</span></h5>
                    <div className={Style.barre}></div>
                
                <br/>
                <Box sx={{ width: '100%' }}>
                    <LinearProgressWithLabel  color="success" value={70} />
                </Box>
                <br/>
                <Box sx={{ width: '100%' }}>
                    <LinearProgressWithLabel  color="error" value={calc} />
                </Box>

                </div>

                {calc == 100 ? (
                       null
                ) : ( <p className={Style.red}><ImCross/>  Finaliser mon profil en complétant ces informations :</p>)
              
                }
                {
                    consultant && consultant.profile.technicalSkills.length === 0 ? (
                        <><p> - Veuillez ajouter vos compétences</p><Alert severity="warning"> Veuillez ajouter vos compétences</Alert></>
                    )
                    : (
                        null
                    )
                }
                {
                     consultant && !consultant.profile.description  ? (
                        <p> - Veuillez ajouter une description</p>
                    )
                    : (
                        null
                    )
                }
                {
                     consultant && consultant.profile.experience.length === 0  ? (
                        <p> - Veuillez ajouter au moins une expérience</p>
                    )
                    : (
                        null
                    )
                }
                {
                     consultant && consultant.profile.education.length === 0  ? (
                        <p> - Veuillez ajouter au moins un dîplome</p>
                    )
                    : (
                        null
                    )
                }
                {
                     consultant && !consultant.profile.picture  ? (
                        <p> - Veuillez ajouter une photo de profil</p>
                    )
                    : (
                        null
                    )
                }
                {
                     consultant && !consultant.profile.picture  ? (
                        <p> - Veuillez ajouter une photo de profile</p>
                    )
                    : (
                        null
                    )
                }
                    


            </div>
        </div>
    )
}

export default CompletedProfil
