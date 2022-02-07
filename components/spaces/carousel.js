import React, {useState} from "react";
import Slider from 'react-slick'
import styles from '../../styles/pages/spaces/carousel.module.css'


const Carousel = (props) =>{

  const [current, setCurrent] =useState(0)

  const length = props.sliderCont.length

  const nextSlide =()=>{
    setCurrent(current === length - 1 ? 0 : current+1)
  };

  if(!Array.isArray(props.sliderCont)|| props.sliderCont.length <= 0){
    return null
  }


  const moveDot = index => {
      setSlideIndex(index)
  }

    return (
      <div>
      <div className={styles.containerSlider}>
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
            <button onClick={nextSlide}>next</button>
        </div>
        </div>
      )
}

export default Carousel