
function Validate(values:any) {
    let errors:any = {}

    if(values.length < 1) {
        errors.categoryName = "Veuillez sélectionner au moins une categorie"
    }
   
    values.map((value: any, i: number) => {
        if(values[i].speciality.length < 1) {
            errors.speciality = "Veuillez choisir une ou plusieurs spécialitées"
        }
        return values
    })

    return errors
}

export default Validate
