import React, {useState} from 'react'
import styles from '../../styles/pages/reservespace/reservespace.module.css'
import Image from 'next/image'
const AvailableSpaces = (props) => {
    

    const availablesSpaces =[
        {
            image: '/reservespaceassets/desk.jpg',
            text : 'Work Space'
        },
        {
            image: '/reservespaceassets/desk.jpg',
            text : 'Music Studio'
        },
        {
            image: '/reservespaceassets/desk.jpg',
            text : 'Rehersal Studio'
        },
        {
            image: '/reservespaceassets/desk.jpg',
            text : 'Conference Room'
        },
        {
            image: '/reservespaceassets/desk.jpg',
            text : 'Music Studio'
        }
    ]


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