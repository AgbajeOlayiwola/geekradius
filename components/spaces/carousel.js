import React, {useState} from "react";
import styles from '../../styles/pages/spaces/carousel.module.css'


const Carousel = (props) =>{

  //current carrouse in view state
  const [current, setCurrent] =useState(0)

  //slider content passed in as props from slider.js
  const length = props.sliderCont.length
//next slide function
  const nextSlide =()=>{
    setCurrent(current === length - 1 ? 0 : current+1)
  };

  if(!Array.isArray(props.sliderCont)|| props.sliderCont.length <= 0){
    return null
  }

//for the current slid dot not done due to svg
  const moveDot = index => {
      setSlideIndex(index)
  }

    return (
      <div>
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
        {/* next slide button */}
            <button onClick={nextSlide}>next</button>
        </div>
        </div>
      )
}

export default Carousel