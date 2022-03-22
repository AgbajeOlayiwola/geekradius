import React, {useState} from 'react'
import AvailableSpaces from '../../components/availablespaces';
import styles from '../../styles/pages/reservespace/reservespace.module.css'

const ReserveSpace = () => {

    
  return (
    <div className={styles.resSpace}>
        <nav className={styles.reserveNav}>
            <div className={styles.navLeft}>
                <div className={styles.navLeftCont}>
                    <h5>Selected:</h5>
                    <p>Workspace</p>
                </div>
                <div className={styles.navLeftCont}>
                    <h5>Price:</h5>
                    <p>#2000</p>
                </div>
                <div className={styles.navLeftCont}>
                    <h5>Quantity:</h5>
                    <p>2</p>
                </div>
            </div>
            <div>
                <div className={styles.navLeftCont}>
                    <h5>Subtotal:</h5>
                    <p>N5,000</p> 
                </div>
            </div>
        </nav>

        <div className={styles.cov}>
        <h1 className={styles.resSpacesh1}>Reserve A Space</h1> 
        <div className={styles.respace}>
           <div>
               <p className={styles.whatSpace}>WHAT SPACE ARE YOU RESERVING ?</p>
            </div>
            <div>
                <AvailableSpaces/>

            </div>
        </div>

        {/* calendar */}

        {/* calendar */}


        <div>
        </div>

        <div className={styles.buttonSect}>

            <button className={styles.payment}>
                <p>
                CONTINUE TO PAYMENT
                </p>    
            </button>
        </div>
        </div>
    </div>
  )
}

export default ReserveSpace