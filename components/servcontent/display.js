import Link from 'next/link'
import React from 'react'
import styles from '../../styles/servcontent/display.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const DisplayContent = ({displayData})=>{
    return(<>
        <div className={styles.main}>
        <p className={styles.servicesP}>SERVICES</p>
        <div className={styles.mainGrid}>
            {
            displayData.map((newContnent, index)=>{
                return(
                    <>
                   
                <Link key={index} href={`${newContnent.link}`}>
                    <p className={styles.servContent}>{newContnent.subhead}</p>
                </Link>
                </>
                )
            })
            }
            </div>
        </div>
        </>
    )
}
export default DisplayContent