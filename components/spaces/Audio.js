import React from "react";
import Image from 'next/image'

const AudioImg = ({width, height}) =>{


    return (
        <div>
            <Image src={'/spacesassets/Audio.png'} 
            width={width} height={height} />
        </div>
    )
}
export default AudioImg