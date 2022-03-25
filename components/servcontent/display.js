import Link from 'next/link'
import React from 'react'
import styles from '../../styles/servcontent/display.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const DisplayContent = ({displayData})=>{
    return(<>
    <p>Services</p>
        <div className={styles.main}>
            
            {
            displayData.map((newContnent, index)=>{
                return(
                <Link key={index} href={`${newContnent.link}`}>
                    <p>{newContnent.subhead}</p>
                </Link>
                )
            })
            }
        </div>
        </>
    )
}
export default DisplayContent