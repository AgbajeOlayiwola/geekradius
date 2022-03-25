import React, {useState} from 'react'
import styles from '../../../styles/pages/home/services.module.css'
import BookSpaceBtn from '../../spaces/bookspacebtn'
import Link from 'next/link'
import RequestServiceBtn from '../requestservicebtn'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const ServicesCarousel =(props)=>{
  //current carrouse in view state
  const [current, setCurrent] =useState(0)
    
  const length = props.CarouselContent.length

  const nextSlide =()=>{
    setCurrent(current === length - 1 ? 0 : current+1)

  };

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
  }

    return(
        <div className={styles.servCov}>
        {/* <Slider {...sliderSettings}> */}
        {props.CarouselContent.map((item, index)=>{
            {return(
            <div key={index}>
               <p
               onClick={nextSlide} 
                className= {styles.activeTitle}>
                    {item.title}</p>
               <div
               className={styles.active}>

                    <ul className={styles.list}>
                    {item.items.map((subitem, indx)=>
                    <Link key={indx} href={`${subitem.link}`}>
                            <li><p className={styles.contP}>{subitem.cont}</p></li>
                     </Link>
                   )}
                    </ul>
               </div>
            </div>
            )}
        })}
        {/* </Slider> */}
        </div>
    )
}

export default ServicesCarousel