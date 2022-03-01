import React, {useState} from 'react'
import styles from '../../../styles/pages/home/services.module.css'
import BookSpaceBtn from '../../spaces/bookspacebtn'
import Link from 'next/link'
import RequestServiceBtn from '../requestservicebtn'

const ServicesCarousel =(props)=>{
  //current carrouse in view state
  const [current, setCurrent] =useState(0)
    
  const length = props.CarouselContent.length

  const nextSlide =()=>{
    setCurrent(current === length - 1 ? 0 : current+1)

  };

  
//   if(!Array.isArray(props.sliderCont)|| props.sliderCont.length <= 0){
//     return null
//   }
    return(
        <div>
        <div className={styles.servCov}>

        {props.CarouselContent.map((item, index)=>{
            {return(
            <div key={index}>
               <h1
               onClick={nextSlide} 
                className= {index === current ?styles.activeTitle :  styles.serviceslistNtAct}>
                    {item.title}</h1>
               <div className={styles.subtitles}>

                    <p 
                    className= {index === current ? styles.active : styles.serviceslist}>{item.subTitlei}</p>
                    <p 
                    className= {index === current ?styles.active:styles.serviceslist}>{item.subTitleii}</p>
               </div>
               <div
               className={index === current ? styles.active:styles.serviceslist }>

                    <ul>
                    {item.items.map((subitem, indx)=>
                    <Link key={indx} href={`${subitem.link}`}>
                            <li>{subitem.cont}</li>
                     </Link>
                   )}
                    </ul>
                    
                    <ul>
                    {item.itemsI.map((subitemI, indx)=>
                    <Link key={indx} href={`${subitemI.link}`}>
                            <li key={indx}>{subitemI.cont}</li>
                    </Link>
                    )}
                    </ul>
               </div>
            </div>
            )}
        })}
        </div>

        </ div>
    )
}

export default ServicesCarousel