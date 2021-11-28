import React from 'react'
import Style from './Spart.module.scss'
import People from '../../../assets/Home/SectionFifth/2peoples.svg'
import Fille from'../../../assets/Home/SectionFifth/Fille.svg'

const SecondPart = () => {
    return (
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.secondPart}>
                    <div className={Style.contentTitle}>
                        <h5 className={Style.Secondtitle}>Lancez votre projet dès maintenant en nous contactant!</h5>
                        <div className={Style.barreSecondPart}>
                            <p></p> 
                        </div>
                        <p className={Style.Thirdtitle}>Rencontrez les top profils freelances pour vous accompagner</p>
                    </div>
                    <div className={Style.btnImg}>
                        <div className={Style.imgLeft}>
                            <img className={Style.imgFille} src={Fille} alt="fille qui tiens un téléphone portable" />
                        </div>
                            <a href="/contactUs" className={Style.btn1}>Nous Contacter</a>
                            <a href="/registerClient" className={Style.btn2}>Déposez votre Projet</a>
                            <a href="/registerFreelance" className={Style.btn3}>Proposez vos Services</a>
                        <div className={Style.imgRight}>
                            <img className={Style.img} src={People} alt="2 personnes se serrent la main" />
                        </div>
                        
                    </div>
                </div>    
            </div>
        </section>
    )
}

export default SecondPart
