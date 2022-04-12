import React from 'react'
import Image  from 'next/image'

const StrategyImage = ({width, height})=>{

    return(
        <>
            <Image src={'/homeassets/ASSETSTARTEGY.png'} 
            width={width} height={height} />
        </>
    )
}

export default StrategyImage