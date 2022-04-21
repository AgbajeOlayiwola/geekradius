import React from 'react'
import styles from '../../styles/layout/flexwrapper.module.css'
const Flexwrapper = (props) => {
  console.log(props.orientation )
  return (
    <div className={styles.flex}>
    <div className={styles.flexwrapper}>
        <div className={props.orientation == 'reverse'?styles.flexrev:styles.flexwraperin}>
            {props.children}
        </div>
    </div>
    </div>
  )
}

export default Flexwrapper