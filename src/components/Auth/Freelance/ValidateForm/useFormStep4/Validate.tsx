
function Validate(presentation:any) {
    let errors:any = {}

    console.log(presentation)

    if(!presentation.presentation) {
        errors.presentation = "Veuillez vous présentez"
    }
    if(!presentation.exp) {
        errors.exp = "Veuillez entrée 2 expérience"
    }
    
    return errors
}

export default Validate
