import React from 'react'
import SectionFirst from '../components/Home/SectionFirst/SectionFirst'
import SectionSecond from '../components/Home/SectionSecond/SectionSecond'
import SectionThird from '../components/Home/SectionThird/SectionThird'
import SectionFourth from '../components/Home/SectionFourth/SectionFourth'
import SectionSeventh from '../components/Home/SectionSeventh/SectionSeventh'
import SectionEighth from '../components/Home/SectionEighth/SectionEighth'
import Footer from '../components/Footer/Footer'
import FirstPart from '../components/Home/SectionFifth/FirstPart'
import SecondPart from '../components/Home/SectionFifth/SecondPart'
import { useEffect } from 'react'
import {Oauth} from '../Utilities/request'

export const Home: React.FC = () => {

    useEffect(()=> {
        let context = window.location.search
        const params = new URLSearchParams(context)
        let code = params.get('code')
        const value = {
            code : code
        }
        const data = Oauth(value)
        data.then(res=> {
            console.log("response",res)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <SectionFirst />
            <SectionSecond />
            <SectionThird />
            <SectionFourth />
            <FirstPart />
            <SecondPart />
            <SectionSeventh />
            <SectionEighth />
            <Footer />
        </div>
    )
}
