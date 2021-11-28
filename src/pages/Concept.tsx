import React from 'react'
import SectionFirst from '../components/Concept/SectionFirst/SectionFirst'
import SectionSecond from '../components/Concept/SectionSecond/SectionSecond'
import SectionThird from '../components/Concept/SectionThird/SectionThird'
import SectionFourth from '../components/Concept/SectionFourth/SectionFourth'
import SectionFifth from '../components/Concept/SectionFifth/SectionFifth'
import Footer from '../components/Footer/Footer'


const Concept: React.FC = () => {
    return (
        <div>
            <SectionFirst />
            <SectionSecond />
            <SectionThird />
            <SectionFourth />
            <SectionFifth />
            <Footer />
        </div>
    )
}


export default Concept