import React from "react";
import Image from 'next/image'

const AudioImg = ({width, height}) =>{


    return (
        <div>
            {/* image component refferncing the image asset to be replaved with a videoasset */}
            <Image src={'/spacesassets/Audio.png'} 
            width={width} height={height} />
        </div>
    )
}
export default AudioImg