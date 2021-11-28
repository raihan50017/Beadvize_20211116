import {useState , useEffect} from 'react'

const useForm = (submit: any, Validate:any) => {
    
    const [valuesSecondStepFree, setSecondStepFree] = useState([])

    const [errors, setErrors] = useState({
        categoryName: "",
        speciality: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e:any) => {
        e.preventDefault()
        setErrors(Validate(valuesSecondStepFree))
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
        handleSubmit,
        valuesSecondStepFree,
        setSecondStepFree
    }
}

export default useForm
