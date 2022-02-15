import React from "react";
import styles from '../../styles/pages/spaces/reserve.module.css'

const Reserve = ({price}) =>{

    return (
        <>
            <div>
                <p className={styles.price}>{price}
                <span className={styles.perHour}> /per hour</span></p>
                <span className={styles.preserveSpan}>
                    <div>
                    <p
                    style={{marginBottom: '2px'}}
                    className={styles.pTag}
                    >RESERVE THIS SPACE</p>
                    <hr id={styles.hrTag}/>
                    </div>
                </span>
            </div>
        </>

    )
}

export default Reserve