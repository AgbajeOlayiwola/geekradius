import React from 'react'
import styles from '../../styles/layout/flexwrappersingle.module.css'


const FlexwrapperSingle = (props) => {
  return (
    <div className={styles.flex}>
<div className={styles.displayflexMain}>
    <div className={props.display=== 'displayflex' ? styles.displayflex:styles.displayflexStart}>
      {console.log(props)}
        {props.children}
    </div>
</div>
</div>
  )
}

export default FlexwrapperSingle