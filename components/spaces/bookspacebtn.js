import React from 'react'
import styles from '../../styles/pages/spaces/bookspacebtn.module.css'
import Link from 'next/link'

const BookSpaceBtn =()=>{

//Book space bfutton component
    return(
        <div>
            <Link href="./reservespace">
             <div className={styles.bkSpace}>
                 Book A Space
            </div>
            </Link>
        </div>
    )
}
export default BookSpaceBtn