import React, {useState, useEffect} from "react"
import Carousel from "./carousel"

const Slider = ()=>{
    const [count, setCount] = useState(0)
        const slider=[
            {
                title: 'CREATOR STUDIOS',
                content: 'Dancers, performing artist, content creators, we have inspiring spaces to bring that vision you have to life',
            },
            {
                title: 'MUSIC STUDIO',
                content: 'Recoding Space with a talented community of producers song writers and artists...',
            },
            {
                title: 'CO-WORKING SPACE',
                content: 'A hub with a variety of creatives that provides tons of experience to apply to that idea you have...',
            }
        ]

    return (
        <>
        <Carousel sliderCont={slider}/>
        </>
    )
}
export default Slider