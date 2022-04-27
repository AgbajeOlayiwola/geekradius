import React from 'react'
import styles from '../../styles/commons/requestserv.module.css'
import Link from 'next/link'

const RequestService =()=>{

    return(
        <div className={styles.rewBtn}>
        <Link href="./contact">
            <button>
               <p className={styles.reqP}>REQUEST THIS SERVICE</p>
            </button>
        </Link>
        </div>
    )
}

export default RequestService