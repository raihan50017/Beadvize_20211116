import React from 'react'
import Style from './Fpart.module.scss'
import img from '../../../assets/Home/SectionFifth/imgFifthSection.svg'
import Dialogue from '../../../assets/Home/SectionFifth/imgDialogue.svg'
import triangle from '../../../assets/Home/SectionFifth/Triangle.svg'

const FirstPart = () => {

    const datas = [
        {
            dialogue: "Le mix parfait entre plateforme web et ESN pour mes besoins en",
            name: "Grégoire Lavendier",
            position: "CEO"
        },
        {
            dialogue: "Le mix parfait entre plateforme web et ESN pour mes besoins en",
            name: "Grégoire Lavendier",
            position: "CEO"
        },
        {
            dialogue: "Le mix parfait entre plateforme web et ESN pour mes besoins en",
            name: "Grégoire Lavendier",
            position: "CEO"
        },
    ]

    return (
        <section className={Style.section}>
            <div className={Style.container}>
                <h4 className={Style.title}>Nos Retours d’Expérience</h4>
                <div className={Style.barre}>
                    <p></p>
                </div>
                <div className={Style.ContainerComment}>
                    {
                        datas.map((data, i) => (
                            <div className={Style.card} key={i}>
                                <div className={Style.Center}>
                                    <img className={Style.imgRounded} src={img} alt="profile de la personne qui laisse un commentaire"/>
                                    <p className={Style.cardName}>{data.name} <br/> {data.position}</p>
                                    <div className={Style.divDialogue}>
                                        <img className={Style.imgDialogue} src={Dialogue} alt="bulle de dialogue "/>
                                        <p className={Style.paraDialogue}>{data.dialogue}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <img src={triangle} alt="triangle" className={Style.triangle} />
            </div>
        </section>
    )
}

export default FirstPart
