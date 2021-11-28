import React from 'react'
import Style from './company.module.scss'
import Form from '../../components/Company/company'

const company = () => {
    return (
        <div className={Style.container}>
            <div className={Style.containForm}>
                <Form/>
            </div>
        </div>
    )
}

export default company
