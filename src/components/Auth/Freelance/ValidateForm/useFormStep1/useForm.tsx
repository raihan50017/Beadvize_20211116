import {useState , useEffect} from 'react'

const useForm = (submit: any, Validate:any, type:string, signUp:number) => {
    
    const [valuesFirstStep, setValuesFirstStep] = useState({
        firstname: "",
        lastname: "",
        email: "",
        address: { mobilephone: ""}, //RBE12/08
        //tel: "",
        password: "",
        type:"",
        signUpStep: 0,
    })

    const [errors, setErrors] = useState({
        firstname: "",
        lastname: "",
        email: "",
        tel: "",
        password: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChangeFirstStep = (e:any) => {
        const { name, value } = e.target
        //RBE 12/08
        if(name === 'mobilephone' ){
            setValuesFirstStep({
                ...valuesFirstStep,
                address: {
                    ...valuesFirstStep.address,
                mobilephone : value}
            })
        }
        else {
        setValuesFirstStep({
            ...valuesFirstStep,
            [name]: value
        })
        }
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        setErrors(Validate(valuesFirstStep))
        setIsSubmitting(true)
        setValuesFirstStep({
            ...valuesFirstStep,
            type: type,
            signUpStep: signUp
        })

    }

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && isSubmitting) {
            submit()
        }
        // eslint-disable-next-line 
    }, [errors])

    
    return {
        handleChangeFirstStep,
        setErrors,
        errors,
        handleSubmit,
        valuesFirstStep,
        setValuesFirstStep
    }
}

export default useForm
