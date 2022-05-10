import React from "react";
import Image from 'next/image'

const MikeVid = ({width, height}) =>{

    return (
        <div style={{width:'100%'}}>
            <Image src={'/spacesassets/mikevid.png'} 
            width={width} height={height} />
        </div>
    )
}
export default MikeVid