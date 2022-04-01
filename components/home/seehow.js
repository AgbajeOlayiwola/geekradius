import React, { useState } from "react";
import styles from '../../styles/pages/home/seehowbutton.module.css'
import Seehowsvg from "./seehowsvg";

const Seehow =()=>{
    const [hovered, setHovered] = useState(false)
    const onMouseEnter =()=>{
      setHovered(true)
  }
  const onMouseLeave = () =>{
      setHovered(false)
  }

    return(
        <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
            <button className={styles.seeHow}>
            <Seehowsvg  hovered={hovered}/>
                    <p>SEE HOW</p>
            </button>
        </div>
    )
}

export default Seehow