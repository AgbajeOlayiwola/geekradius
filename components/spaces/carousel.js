import React, {useState} from "react";
import styles from '../../styles/pages/spaces/carousel.module.css'


const Carousel = (props) =>{

  //current carrouse in view state
  const [current, setCurrent] =useState(0)
  const [currentDot, setCurrentDot] =useState(false)

  //slider content passed in as props from slider.js
  const length = props.sliderCont.length
//next slide function
  const nextSlide =()=>{
    setCurrent(current === length - 1 ? 0 : current+1)
    setCurrentDot()
  };

  if(!Array.isArray(props.sliderCont)|| props.sliderCont.length <= 0){
    return null
  }

    return (
      <div className={styles.spacecontainer}>
        <h3 className={styles.space1}>Spaces</h3>
      <div className={styles.containerSlider}>
        {/* map the contnets for dispaly */}
          {props.sliderCont.map((slidercontent, index)=>{
                {return (
                <div key={index} style={{color:'white'}}
                className={styles.content}>
                  
                    <div className={index === current ? styles.slide : styles.active}>
                      {index ===current &&(
                      <div>
                      <div><h2>{slidercontent.title}</h2></div>
                      <div><p>{slidercontent.content}</p></div>
                      </div>
                      )}
                    </div> 
                </div>
 
                
                )}
            })}
          </div>
        <div className={styles.control}>
        <div className={styles.nextSlide}>
          <div className={styles.current}>
            {/* not the ideal way to do it will refactor later */}
            <div
             className={current === 0?styles.Acticecurrent:styles.inActivecurrent}></div>
            <div
            className={current === 1?styles.Acticecurrent:styles.inActivecurrent}></div>
            <div
            className={current === 2?styles.Acticecurrent:styles.inActivecurrent}></div>
          </div>
          <div>
            <div  onClick={nextSlide} 
            className={styles.nextBtn}>
              <div className={styles.next}></div>
            </div>
          </div>

        </div>
        </div>
        </div>
      )
}

export default Carousel