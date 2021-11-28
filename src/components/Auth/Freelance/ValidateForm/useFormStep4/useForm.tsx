import {useState , useEffect} from 'react'

const useForm = (submit: any, Validate:any, ValidateExp:any, getExp:any, experiences:any) => {
    
    const [presentation, setPresentation] = useState({
        presentation: "",
        exp: false
    })
    const [experience, setExperience] = useState<object>({
        enterprise: "",
        title: "",
        freeLance: "",
        positionCurrently: "",
        startOfExp: "",
        endOfExp: "",
        description: "",
        skillsImplemented: ""
    })
    const [errors, setErrors] = useState({
        presentation: "",
        exp: ""
    })
    const [errorsExp, setErrorsExp] = useState({
        enterprise: "",
        title: "",
        freeLance: "",
        positionCurrently: "",
        startOfExp: "",
        endOfExp: "",
        description: "",
        skillsImplemented: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)


    const handleChangeExp = (e:any) => {
        const { name, value } = e.target
        setExperience({
            ...experience,
            [name]: value
        })
    }

    const handleChangePresentation = (e:any) => {
        const { name, value } = e.target
        setPresentation({
            ...presentation,
            [name]: value
        })
    } 

    const handleSubmit = (e:any) => {
        e.preventDefault()
        setErrors(Validate(presentation))
        setIsSubmitting(true)
    }

    const handleSubmitExp = (e:any) => {
        e.preventDefault()
        setErrorsExp(ValidateExp(experience))
    }

    useEffect(() =>{

        if(Object.keys(errorsExp).length === 0 ) {
            getExp()
        }
        // eslint-disable-next-line 
    }, [errorsExp])

    useEffect(() =>{

        if(Object.keys(errors).length === 0 && isSubmitting) {
            submit()
        }
        // eslint-disable-next-line 
    }, [errors])

    const getCheck = (e:any) => {
        
        if("freeLance" === e.target.name && e.target.checked) {
           setExperience({
               ...experience,
               [e.target.name]: true
           })
        }
        if("positionCurrently" === e.target.name && e.target.checked) {
            setExperience({
                ...experience,
                [e.target.name]: true
            })
         }
    }
    return {
        errorsExp,
        errors,
        handleChangeExp,
        handleChangePresentation,
        handleSubmit,
        experience,
        setExperience,
        presentation,
        setPresentation,
        getCheck,
        handleSubmitExp,
        setErrors
    }
}

export default useForm
