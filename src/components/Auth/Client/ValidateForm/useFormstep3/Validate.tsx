function Validate(values:any) {
    let errors:any = {}

    if(!values.companyName){
        errors.companyName = "Veuillez entrer le nom de votre entreprise"
    } 

    if(!values.companyCode){
        errors.companyCode = "Veuillze entrer votre nom"
    }

    if(!values.phone) {
       errors.phone = "Veuillez sélectionner un moyen de contact"
    }

    return errors
}

export default Validate
