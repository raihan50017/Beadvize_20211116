import { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Style from './Faq.module.scss'

const Faq = () => {

    const [showForm, setshowForm] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false)
    const [index, setIndex] = useState<number>()

    const answer = [
        {   
            key : 0,
            question : "Quels commissions prend BeAdvize sur mes prestations ?",
            answer : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
        },
        {
            key : 1,
            question : "Comment maximiser mes chances d’obtenir des missions ?",
            answer : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
        },
        {
            key : 2,
            question : "Quels commissions prend BeAdvize sur mes prestations ?",
            answer : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
        },
        {
            key : 3,
            question : "Comment maximiser mes chances d’obtenir des missions ?",
            answer : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
        },
        {
            key : 4,
            question : "Quels commissions prend BeAdvize sur mes prestations ?",
            answer : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
        },
        { 
            key : 5,
            question : "Comment maximiser mes chances d’obtenir des missions ?",
            answer : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
        },
        { 
            key : 6,
            question : "Comment maximiser mes chances d’obtenir des missions ?",
            answer : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
        }
    ]

    return (
        <>
            <section className={Style.container}>
                <div className={Style.questions}>
                    <h1 className={Style.title}>Les réponses en détails à vos questionnements</h1>
                    <div className={Style.line}></div>
                    <div className={Style.containButton}>
                        <button className={!showForm ? Style.buttonActive : Style.button} onClick={() => setshowForm(false)}>Freelances</button>
                        <button  className={showForm ? Style.buttonActive :  Style.button} onClick={() => setshowForm(true)}>Entreprise</button>
                    </div>

                    <div className={Style.containCard}>
                        
                        {
                            answer.map((res:any, i:number) => ( 
                                <div className={Style.card} key={i}>
                                    <div className={Style.containeQuestion}>
                                        <h6>{res.question}</h6>
                                        {
                                            showAnswer && index === res.key ? (
                                                <button onClick={() => {setShowAnswer(false); setIndex(i)}}>X</button>
                                            )
                                            : (
                                                <button onClick={() => {setShowAnswer(true); setIndex(i)}}>V</button>
                                            )
                                        }
                                    </div>
                                    {
                                        showAnswer && index === res.key ? (
                                            
                                            <div className={Style.containAnswer}>
                                                {
                                                    index === res.key ? (
                                                        <p>{res.answer}</p>
                                                    )
                                                    : (
                                                        null
                                                    )
                                                }
                                               
                                            </div>
                                        )
                                        : null
                                    }
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Faq
