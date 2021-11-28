import React, { useState, useEffect } from 'react'
import Style from './SectionSeventh.module.scss'
import img1 from '../../../assets/Home/SectionSeventh/img1.svg'
import img2 from '../../../assets/Home/SectionSeventh/img2.svg'
import img3 from '../../../assets/Home/SectionSeventh/img3.svg'
import Polygone1 from '../../../assets/Home/SectionSeventh/Polygone1.svg'
import Polygone2 from '../../../assets/Home/SectionSeventh/Polygone2.svg'

const SectionSeventh = () => {

    const getWindowDimensions = () => {
        const { innerWidth: width} = window;
        return {
          width
        };
      }

    const useWindowDimensions = () => {
        const [windowDimensions, setWindowDimensions] = useState(
          getWindowDimensions()
        );
      
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
        }, []);

        return windowDimensions;
    }
    

    const datas: Array<any> = [ 
        {
            image: img1,
            paragraphe: "Pourquoi devenir freelance va devenir une obligation ?",
            alt: "image de profile d'un utilisateur"
        },
        {
            image: img2,
            paragraphe: "Freelance : Comment se démarquer de la concurrence ?",
            alt: "image de profile d'un utilisateur"
        },
        {
            image: img3,
            paragraphe: "Devenir consultant freelance : le guide de démarrage",
            alt: "image de profile d'un utilisateur"
        },
        {
            image: img1,
            paragraphe: "Pourquoi devenir freelance va devenir une obligation ?",
            alt: "image de profile d'un utilisateur"
        },
        {
            image: img2,
            paragraphe: "Freelance : Comment se démarquer de la concurrence ?",
            alt: "image de profile d'un utilisateur"
        },
        {
            image: img3,
            paragraphe: "Devenir consultant freelance : le guide de démarrage",
            alt: "image de profile d'un utilisateur"
        },
    ]
    const widthScreen = useWindowDimensions()
    const [numberOfStart, setNumberOfStart] = useState(0);
    const [numberOfEnd, setNumberOfEnd] = useState(3)
    const [numberOfStartM, setNumberOfStartM] = useState(0);
    const [numberOfEndM, setNumberOfEndM] = useState(1)
    const length = datas.length
   

    const next = () => {
        
        if(widthScreen.width <= 800) {
            if(numberOfEndM === length) {
                setNumberOfStartM(0)
                setNumberOfEndM(1)
            }
            else {
                setNumberOfStartM(numberOfStartM + 1)
                setNumberOfEndM(numberOfEndM + 1)
            }
        }
        if(numberOfEnd === length) {
            setNumberOfStart(1)
            setNumberOfEnd(4)
        }
        else {
            setNumberOfStart(numberOfStart + 1)
            setNumberOfEnd(numberOfEnd + 1)
        }
    }

    const previus = () => {

        if(widthScreen.width <= 800) {
            if(numberOfStartM === 0) {
                setNumberOfStartM(length - 1)
                setNumberOfEndM(length)
            }
            else {
                setNumberOfStartM(numberOfStartM - 1)
                setNumberOfEndM(numberOfEndM - 1)
            }
        }
    
        if(numberOfStart === 0) {
            setNumberOfStart(length - 4)
            setNumberOfEnd(length -1)
        }
        else {
            setNumberOfStart(numberOfStart - 1)
            setNumberOfEnd(numberOfEnd - 1)
        }       
    }

    return (
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.title}>
                    <h4>Nos derniers articles</h4>
                </div>
                <div className={Style.barre}>
                    <p></p>
                </div>
                <div className={Style.containArticle}>
                    <button onClick={() => previus()} className={Style.button}>
                        <img src={Polygone1} alt="bouton en forme de triangle" className={Style.polygone1}/>
                    </button>
                    {   widthScreen.width <= 800 
                        ?
                        datas.slice(numberOfStartM, numberOfEndM).map((data, index) => {
                              
                            return (
                                <div key={index} className={Style.card} >
                                    <img src={data.image} alt={data.alt} className={Style.img}/>
                                    <p>{data.paragraphe}</p>
                                </div>
                            )
                        })
                        : 
                        datas.slice(numberOfStart, numberOfEnd).map((data, index) => {
                              
                            return (
                                <div key={index} className={Style.card} >
                                    <img src={data.image} alt={data.alt} className={Style.img}/>
                                    <p>{data.paragraphe}</p>
                                </div>
                            )
                        })
                    }

                     <button onClick={() => next()} className={Style.button}>
                        <img src={Polygone2} alt="bouton en forme de triangle" className={Style.polygone2}/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SectionSeventh
