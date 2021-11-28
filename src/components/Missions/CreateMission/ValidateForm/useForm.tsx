import {useState , useEffect} from 'react'

const useForm = (submit: any, Validate:any) => {
    
    const [valuesSecondStepClient, setValuesSecondStepClient] = useState<object>({
        title: "",
        description: "",
        technicalSkills: undefined,
        localisation: {
            label: "",
            location: { 
                lat: 0,
                lng: 0 
            }
          },
        place: undefined,
        duration: undefined,
        billingMode: "Forfait",
        budgetMin: ""
        // StartOfProject: ""
    })

    const [errors, setErrors] = useState({
        title: "",
        description: "",
        technicalSkills: undefined,
        localisation: {
            label: "",
            location: { 
                lat: 0,
                lng: 0 
            }
        },
        place: undefined,
        duration: undefined,
        billingMode: "Forfait", 
        budgetMin:""
        // StartOfProject: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChangeSecondStepClient = (e:any) => {
        const { name, value } = e.target
        setValuesSecondStepClient({
            ...valuesSecondStepClient,
            [name]: value
        })
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        setErrors(Validate(valuesSecondStepClient))
        setIsSubmitting(true)
    }

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && isSubmitting) {
            submit()
        }
        // eslint-disable-next-line 
    }, [errors])

    
    return {
        handleChangeSecondStepClient,
        errors,
        handleSubmit,
        setValuesSecondStepClient,
        valuesSecondStepClient
    }
}

export default useForm
