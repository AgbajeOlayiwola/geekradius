import React from 'react'
import styles from '../../styles/pages/spaces/bookspacebtn.module.css'
import Link from 'next/link'

const BookSpaceBtn =()=>{


    return(
        <div>
            <div className={styles.bkSpace}>
                 <Link href="#">Book A Space</Link>
            </div>
        </div>
    )
}
export default BookSpaceBtn