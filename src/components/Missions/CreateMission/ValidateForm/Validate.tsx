function Validate(values:any) {
    let errors:any = {}

    if(!values.title){
        errors.title = "Titre manquant"
    } 

    if(!values.description){
        errors.description = "Description manquante"
    }

    if(values.technicalSkills === undefined) {
       errors.technicalSkills = "Compétences manquantes"
    }

    if(!values.localisation) {
        errors.localisation = "Veuillez indiquer votre zone géographique"
    }

    if(!values.place) {
        errors.place = "Veuillez indiquer votre lieu de mission"
    }
    
    if(values.duration === undefined) {
        errors.duration = "Veuillez indiquer la durée du projet"
    }

    if(!values.billingMode) {
        errors.billingMode = "Veuillez indiquer le type de rémunération"
    }

    if(!values.budgetMin) {
        errors.budgetMin = "Veuillez indiquer le montant de la rémunération"
    }
    
    // if(!values.StartOfProject) {
    //     errors.StartOfProject = "Veuillez indiquer la date de début du projet"
    // }
 
    return errors
}

export default Validate
