import React from 'react'
import Image  from 'next/image'

const MockupsImage = ({width, height}) => {
  return (
    <div>
    <Image src={'/servicesassets/Group31619/cxanywhere.png'} 
            width={width} height={height} />
    </div>
  )
}

export default MockupsImage