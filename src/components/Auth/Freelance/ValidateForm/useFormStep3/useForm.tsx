import {useState , useEffect} from 'react'

const useForm = (submit: any, Validate:any) => {
    
    const [valuesStep3Free, setStep3Free] = useState<object>({
        title: "",
        segnority: "",
        technicalSkills: undefined,
        dailyPriceMin: "",
        //number: "",
        localisation: {
            label: "",
            location: { 
                lat: 0,
                lng: 0 
            }
          },
    })

    const [errors, setErrors] = useState({
        title: "",
        segnority: "",
        technicalSkills: undefined,
        dailyPriceMin: "",
        //number: "",
        localisation: {
            label: "",
            location: { 
                lat: 0,
                lng: 0 
            }
          },
    })

    const [isSubmitting, setIsSubmitting] = useState(false)


    const handleChangeStep3 = (e:any) => {
        const { name, value } = e.target
        setStep3Free({
            ...valuesStep3Free,
            [name]: value
        })
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        setErrors(Validate(valuesStep3Free))
        setIsSubmitting(true)
    }

    useEffect(() =>{

        if(Object.keys(errors).length === 0 && isSubmitting) {
            submit()
        }
        // eslint-disable-next-line 
    }, [errors])

    
    return {
        setErrors,
        errors,
        handleChangeStep3,
        handleSubmit,
        valuesStep3Free,
        setStep3Free
    }
}

export default useForm
