import React from 'react'
import styles from '../../styles/pages/reservespace/reservespace.module.css'

const ReserveSpace = () => {
  return (
    <div>
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
    </div>
  )
}

export default ReserveSpace