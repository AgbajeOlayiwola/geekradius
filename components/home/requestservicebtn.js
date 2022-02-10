import Link from "next/link";
import React from "react";
import styles from '../../styles/pages/home/requestservice.module.css'

const RequestServiceBtn = () =>{

    return(
        <div className={styles.req}>

            <Link href='#'>REQUEST THIS SERVICE</Link>
        </div>
    )
}

export default RequestServiceBtn