import React from "react";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";
import {productSliderData} from '../data/Contentdata'
import styles from '../../styles/pages/home/productSlider.module.css'
import Image from 'next/image'


const ProductsSlider = () => {


    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: styles.new
      };
  return (
      <div>
    <Slider {...settings}>
            {
                productSliderData.map((products, index)=>{
                   { return(
                        <div key={index}>
                            <div className={styles.covers}>
                                <Image src={products.image} width={600} height={600}/>
                                <div className={styles.text}>
                                    <h3 className={styles.h3title}>{products.title}</h3>
                                    <p>{products.content}</p>
                                </div>
                            </div>
                        </div>
                    )}
                })
            }
    </Slider>
    </div>
  )
}

export default ProductsSlider