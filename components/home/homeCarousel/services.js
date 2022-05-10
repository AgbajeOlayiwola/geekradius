import React, {useState} from 'react'
import styles from '../../../styles/pages/home/services.module.css'
import Link from 'next/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import {Carcont2} from '../../data/Contentdata'

const ServicesCarousel =(props)=>{
  // //current carrouse in view state
  const [currentslide, setCurrentSlide] =useState(0)


  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    slideCount:3,
    autoPlay:true,
    centerMode:false,
    speed: 500,
    loopIfEqual:true,
    arrows: false,
    beforeChange:(prev, next) => setCurrentSlide(next),
  }

    return(
      
        <Slider {...settings}>
        {Carcont2.map((item, index)=>{
            {return(
            <div className={index === currentslide? styles.active: styles.slide} key={index}>
              <div>
               <p
                className= {styles.activeTitle}>
                    {item.title}</p>
                    <hr className={styles.pHr}/>
                </div>
               <div
               className={styles.active}>

                    <ul className={styles.list}>
                    {item.items.map((subitem, indx)=>
                    <Link key={indx} href={`${subitem.link}`}>
                            <li><p className={styles.contP}>{subitem.subhead}</p></li>
                     </Link>
                   )}
                    </ul>
               </div>
            </div>
            )}
        })}
        </Slider>
    )
}

export default ServicesCarousel