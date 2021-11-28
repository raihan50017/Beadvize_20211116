
function Validate(values:any) {
    let errors:any = {}

    if(!values.title){
        errors.title = "Veuillez entrer un titre"
    } 

    if(!values.localisation) {
        errors.localisation = "Veuillez entrer une geolocalisation"
    }

    if(!values.segnority) {
        errors.segnority = "Veuillez entrer un niveau d'expérience"
    }


    if(values.technicalSkills === undefined) {
        errors.technicalSkills = "Veuillez entrer vos compétences"
    }

    if(!values.dailyPriceMin) {
        errors.dailyPriceMin = "Veuillez entrer un tarif journalier"
    }
    
  /*   if(!values.number) {
        errors.number = "numéro de téléphone manquant"
    } else if (!/^0[1-6]{1}(([0-9]{2}){4})|((\s[0-9]{2}){4})|((-[0-9]{2}){4})$/gm.test(values.number)) {
        errors.number = "Le format du numéro est invalide"
    } */

    return errors
}

export default Validate
