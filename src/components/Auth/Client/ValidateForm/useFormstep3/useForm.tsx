import {useState , useEffect} from 'react'

const useForm = (submit: any, Validate:any) => {
    
    const [valuesStep3Client, setValuesStep3Client] = useState<object>({
        companyName: "",
        companyCode: "",
        phone: ""
    })

    const [errors, setErrors] = useState({
        companyName: "",
        companyCode: "",
        phone: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChangeStep3Client = (e:any) => {
        const { name, value } = e.target
        setValuesStep3Client({
            ...valuesStep3Client,
            [name]: value
            
        })
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        setErrors(Validate(valuesStep3Client))
        setIsSubmitting(true)
    }

    useEffect(() =>{
        
        if(Object.keys(errors).length === 0 && isSubmitting) {
            submit()
        }
        // eslint-disable-next-line 
    }, [errors])

    
    return {
        handleChangeStep3Client,
        errors,
        handleSubmit,
        setValuesStep3Client,
        valuesStep3Client
    }
}

export default useForm
