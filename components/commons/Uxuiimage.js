import React from 'react'
import Image  from 'next/image'

const Uxuiimage = ({width, height}) => {
  return (
    <div>
    <Image src={'/servicesassets/MaskGroup35/olageekradius.png'} 
            width={width} height={height} />
    </div>
  )
}

export default Uxuiimage