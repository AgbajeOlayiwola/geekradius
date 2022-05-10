import React from "react";
import Image from 'next/image'

const ScooterImg = ({width, height}) =>{

    return (
        <div style={{width:'100%'}}>
            <Image src={'/spacesassets/Scooter2x.png'} 
            width={width} height={height} />
        </div>
    )
}
export default ScooterImg