import React from "react";
import styles from '../../styles/pages/home/ourptoductsbtn.module.css'

const OurProductsBtn = () =>{

    return(
        <div>
            <button className={styles.ourProductsBtn}>
                <p className={styles.buttonP}>OUR PRODUCTS</p>
            </button>
        </div>
    )
}

export default OurProductsBtn