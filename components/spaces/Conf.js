import React from "react";
import Image from 'next/image'

const Conf = ({width, height}) =>{


    return (
        <div>
            <Image src={'/spacesassets/conf.png'} 
            width={width} height={height} />
        </div>
    )
}
export default Conf 