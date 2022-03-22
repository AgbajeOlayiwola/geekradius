import React from "react";
import Image from 'next/image'

const Playvideo = ({width, height}) =>{

    return (
        <div style={{width:'100%'}}>
            <Image src={'/spacesassets/playvideo.png'} 
            width={width} height={height} />
        </div>
    )
}
export default Playvideo