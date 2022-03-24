import React from 'react'
import styles from '../../styles/layout/flexwrapper.module.css'
const Flexwrapper = (props) => {
  return (
    <div className={styles.flex}>
    <div className={styles.flexwrapper}>
        <div className={styles.flexwraperin}>
            {props.children}
        </div>
    </div>
    </div>
  )
}

export default Flexwrapper