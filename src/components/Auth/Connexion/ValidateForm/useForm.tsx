import {useState , useEffect} from 'react'

const useForm = (submit: any, Validate:any) => {
    
    const [values, setValues] = useState<object>({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e:any) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        setErrors(Validate(values))
        setIsSubmitting(true)
    }

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && isSubmitting) {
            submit(values)
        }
        // eslint-disable-next-line
    }, [errors, isSubmitting])

    
    return {
        handleChange,
        setErrors,
        errors,
        handleSubmit,
        values
    }
}

export default useForm
