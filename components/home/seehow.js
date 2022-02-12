import React, { useState } from "react";
import styles from '../../styles/pages/home/seehowbutton.module.css'

const Seehow =()=>{

    const [hovered, setHovered] = useState(false)

    const onMouseEnter =()=>{
        setHovered(true)
    }
    const onMouseLeave = () =>{
        setHovered(false)
    }

    return(
        <div>
            <div className={styles.seeHow}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
                <svg id="Component_20_1" data-name="Component 20 – 1" 
                className={styles.eyesvg}
                xmlns="http://www.w3.org/2000/svg" 

                transform= 'scale(1.5)'
                width="34" height="34" viewBox="0 0 34 34">
                    <g xmlns="http://www.w3.org/2000/svg" id={styles.eye}  transform= 'translate(20px 10px)'>
                    <g id="Group_23263" data-name="Group 23263" 
                    >
                    <path id="Path_64508" data-name="Path 64508" d="M16.331,12.778C15.33,11.34,12.591,8,8.765,8H8.76C4.9,8,2.186,11.345,1.2,12.782a1.091,1.091,0,0,0,0,1.231h0C2.2,15.453,4.94,18.8,8.765,18.8c3.794,0,6.553-3.34,7.563-4.779A1.089,1.089,0,0,0,16.331,12.778ZM7.078,10.362a1.012,1.012,0,1,1-1.012,1.012A1.012,1.012,0,0,1,7.078,10.362Zm8.7,3.269c-.741,1.054-3.435,4.492-7.011,4.492-3.6,0-6.278-3.438-7.012-4.492a.413.413,0,0,1,0-.465A12.245,12.245,0,0,1,5.579,9.556a4.049,4.049,0,1,0,6.377.012,12.46,12.46,0,0,1,3.821,3.594A.412.412,0,0,1,15.776,13.631Z" transform="translate(-1.007 -8)" fill="#212121"/>
                    </g>
                    <g id="Group_23265" data-name="Group 23265" 
                    style = {hovered ? {display: "none" } : {display:'block'}}>
                    <path id="Path_64508-2" data-name="Path 64508" d="M16.331,12.778C15.33,11.34,12.591,8,8.765,8H8.76C4.9,8,2.186,11.345,1.2,12.782a1.091,1.091,0,0,0,0,1.231h0C2.2,15.453,4.94,18.8,8.765,18.8c3.794,0,6.553-3.34,7.563-4.779A1.089,1.089,0,0,0,16.331,12.778Zm-.554.852c-.741,1.054-3.435,4.492-7.011,4.492-3.6,0-6.278-3.438-7.012-4.492a10.117,10.117,0,0,0,2.094,2.636c.292.239.583,1.914,4.919,1.994S15.874,13.49,15.776,13.631Z" transform="translate(-1.007 -8)" fill="#212121"/>
                    </g>
                    </g>
                </svg>
                    <p>SEE HOW</p>
                </div>
        </div>
    )
}

export default Seehow