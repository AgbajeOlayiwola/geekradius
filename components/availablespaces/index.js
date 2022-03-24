import React, {useState} from 'react'
import styles from '../../styles/pages/reservespace/reservespace.module.css'
import Image from 'next/image'
import {availablesSpaces} from '../data/Contentdata'


const AvailableSpaces = (props) => {
    

 

  return (
    <div>
        <div className={styles.spaces}>
            {availablesSpaces.map((images, index)=>{
                return(
                <div 
                className={styles.imagediv}
                key={index}>
                    <Image
                    className={styles.Image}
                    src={images.image} alt=''
                    width='450' height='450'/>
                <div className={styles.texts}>
                    <p className={styles.text}>{images.text}</p>
                    <hr/>

                  </div>
                </div>
                )
                }
            )}
        </div>
    </div>
  )
}

export default AvailableSpaces