
function Validate(experience:any) {
    let errors:any = {}
    
    if(!experience.enterprise){
        errors.enterprise = "Veuillez entrer le nom de votre poste"
    } 

    if(!experience.title){
        errors.title = "Veuillez entrer le nom de votre poste"
    } 

    if(!experience.startOfExp) {
        errors.startOfExp = "Veuillez le début de votre expérience"
    }

    if(!experience.endOfExp) {
        errors.endOfExp = "Veuillez entrer la fin de votre expérience"
    }


    if(!experience.description) {
        errors.description = "Veuillez entrer la description du projet"
    }

    if(!experience.skillsImplemented) {
        errors.skillsImplemented = "Veuillez entrer les compétences utilisées"
    }
    
    return errors
}

export default Validate
