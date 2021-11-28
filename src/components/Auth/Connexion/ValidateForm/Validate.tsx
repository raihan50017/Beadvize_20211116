
function Validate(values:any) {
    let errors:any = {}

    if(!values.email) {
       errors.email = "email manquant"
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email= "email invalid"
    }

    if(!values.password) {
        errors.password = "mot de passe manquant"
    }
 
    return errors
}

export default Validate
