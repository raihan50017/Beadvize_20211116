import React from 'react'
import Style from './SectionSixth.module.scss'
import Yahoo from '../../../assets/Home/SectionSixth/Yahoo.svg'
import Microsoft from '../../../assets/Home/SectionSixth/Microsoft.svg'
import Edf from '../../../assets/Home/SectionSixth/EDF.svg'
import IBM from '../../../assets/Home/SectionSixth/IBM.svg'
import SNCF from '../../../assets/Home/SectionSixth/SNCF.svg'

const SectionSixth = () => {
    return (
        <section className={Style.section}>
            <div className={Style.container}>
                <p>Ils ont choisi BeAdvize</p>
                <img src={Yahoo} alt="logo de Yahoo" className={Style.logoY}/>
                <img src={Microsoft} alt="logo de microsoft" className={Style.logoM}/>
                <img src={Edf} alt="logo de EDF" className={Style.logoE}/>
                <img src={IBM} alt="logo de IBM" className={Style.logoI}/>
                <img src={SNCF} alt="logo de SNCF" className={Style.logoS}/>
            </div>
        </section>
    )
}

export default SectionSixth
