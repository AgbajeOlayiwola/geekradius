import React from "react";
import Image from 'next/image'

const Conf = ({width, height}) =>{


    return (
        // another image component accepts width and height as components  
        <div>
            <Image src={'/spacesassets/conf.png'} 
            width={width} height={height} />
        </div>
    )
}
export default Conf 