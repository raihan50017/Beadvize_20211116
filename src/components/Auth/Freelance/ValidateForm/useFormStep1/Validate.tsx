
function Validate(values:any) {
    let errors:any = {}

    if(!values.firstname){
        errors.firstName = "Prénom manquant"
    } else if(values.firstName < 1) {
        errors.firstName = "Prénom trop court"
    }

    if(!values.lastname){
        errors.lastName = "Nom manquant"
    } else if(values.firstName < 1) {
        errors.firstName = "Prénom trop court"
    }

    if(!values.email) {
       errors.email = "email manquant"
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email= "email invalid"
    }

    else if (values.tel && !/^((\+)33|0)[1-9](\d{2}){4}$/gm.test(values.tel)) {
        errors.tel = "numéro invalid"
    }

    if(!values.password) {
        errors.password = "mot de passe manquant"
    } else if(!/.{8,}/gm.test(values.password)) {
        errors.password = "mot de pass trop court"
    } else if(!/(?=.*[!@#$%^&*])/gm.test(values.password)) {
        errors.password = "le mot de pass doit contenir au moins un caractere spécial"
    }
    else if(!/(?=.*?[A-Z])/gm.test(values.password)) {
        errors.password = "le mot de pass doit contenir au moins une majuscule"
    }
 
    return errors
}

export default Validate
