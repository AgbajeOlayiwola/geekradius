import React, {useState} from 'react'
import styles from '../../styles/pages/services/readbtn.module.css'
import Seehowsvg from '../home/seehowsvg'

const ReadBtn = () => {
  const [hovered, setHovered] = useState(false)
  const onMouseEnter =()=>{
    setHovered(true)
}
const onMouseLeave = () =>{
    setHovered(false)
}
  return (
    <button className={styles.main}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}>
      <div className={styles.texts}>
        <div className={styles.seehoweye}>
        <Seehowsvg hovered={hovered}/>
        </div>
        { hovered ?
        <p className={styles.readP}>SEE HOW</p>
        :
        <p className={styles.readP}>READ THE CASE STUDY</p>
        }
      </div>

    </button>
  )
}

export default ReadBtn