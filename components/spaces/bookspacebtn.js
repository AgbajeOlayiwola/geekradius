import React from 'react'
import styles from '../../styles/pages/spaces/bookspacebtn.module.css'
import Link from 'next/link'

const BookSpaceBtn =()=>{

//Book space bfutton component
    return(
        <div>
            <div className={styles.bkSpace}>
                 <Link href="#">Book A Space</Link>
            </div>
        </div>
    )
}
export default BookSpaceBtn