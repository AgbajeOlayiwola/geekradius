import React, {useEffect} from "react";
import Frank from "../../components/home/Frank.";
import Playvideo from "../../components/spaces/Playvideo";
import styles from '../../styles/pages/home/home.module.css'
import BookSpaceBtn from "../../components/spaces/bookspacebtn";
import CarouselCont from "../../components/home/homeCarousel/carouselContent";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Seehow from "../../components/home/seehow";
import Testyouridea from "../../components/home/testyouridea";
import OurProductsBtn from "../../components/home/ourproducts";
import {slider,Carcont2,products} from '../../components/data/Contentdata'
import Carousel from "../../components/spaces/carousel";
import ServicesCarousel from "../../components/home/homeCarousel/services";
import Backgroundvideo from "../../components/commons/backgroundvideo";
import StrategyImage from "../../components/commons/startegyImage";
import RequestService from "../../components/commons/requestservices";
import ScooterImg from "../../components/home/Scooterimg";
import MikeVid from "../../components/spaces/MikeVid";
import ProductsSlider from "../../components/home/productsSlider";


const HomeMain =()=>{

    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <>
          {/* <Backgroundvideo/> */}
    <div className={styles.cover}>
        <div className={styles.PionneringMain}>
            <div>
                <div>
                    <h1 className={styles.mainH1}>We&apos;re Pioneering <span className={styles.creative}>Creative-Tech</span></h1>
                    <p className={styles.mainP}>We&apos;re realising, articulating, capturing and exchanging value</p>
                </div>
                <div className={styles.how}>
                <Seehow/>
                </div>

            </div>
            <div>
                <StrategyImage width={1350} height={850}/>
            </div>
        </div>
    </div>
  

{/* How section */}
<div
        data-aos='fade-up'
        data-aos-offset='200'
        className={styles.mainCover}
        >
<div className={styles.cover}>

        <div className={styles.PionneringMain}>
            <div>
                <div>
                    <h1 className={styles.howH1}>How</h1>
                    <p className={styles.youMay}>You may ask?</p>
                    <p className={styles.incP}>We&apos;re currently incubating and exploring solutions that target infrastructural growth.</p>
                </div>
                <div className={styles.test}>
                <Testyouridea/>
                </div>
            </div>
            <div>
            <div className={styles.strategy2}>
                <StrategyImage width={1650} height={950}/>
            </div>
                {/* <div className={styles.btnParent}>
                <OurProductsBtn/>
                </div> */}
            </div>
        </div>
        </div>
        {/* images section */}

        <div
        data-aos='fade-up'
        data-aos-offset='200'
        className={styles.mainCover}
        >
        <div className={styles.cover}>
        <div className={styles.focussed}>
            <div>
                <div>

                    <div className={styles.texImg}>
                        <p>We&apos;re focused on scaling a highly skilled network with strong and positive ripple effect</p>
                    </div>
                    <img src='/homeassets/Bike2x.png' 
                    className={styles.fallingBoy} />
                </div>
            </div>
            <div className={styles.secondImg}>
            <div className={styles.texImg}>
                <p>We&apos;re applying critical thinking. We believe logic is a core tool to realising value and creativity.</p>
            </div>
            <img src='/homeassets/Bicycle2x.png' 
             className={styles.sleepWoman} />
            </div>
        </div>
        </div>
        </div>
        </div>
        


{/* another spaces secion maybe i should have made the whole section a component oh well */}
<div
        data-aos='fade-up'
        data-aos-offset='200'
        className={styles.mainCover}
        >
         <div className={styles.cover}>
        <div className={styles.spaceMain}>
            <div className={styles.spaceImage}>
                <MikeVid height={850} width={850}/>
                </div>
                <div className={styles.sliderCont}>
                <p className={styles.spP}>Spaces</p>
                    <Carousel sliderConts={slider}/>
                </div>
                    
            
        </div>
        </div>
</div>

        {/* //Products section */}
        <div
        data-aos='fade-up'
        data-aos-offset='200'
        className={styles.cover}
        >
        <div className={styles.prodMain}>
            <div>
                <div>
                    <h1 className={styles.productsP}>Products</h1>
                </div>
                <div className={styles.products}>
                        <ProductsSlider/>
                </div>
                    
            </div>
            </div>
            </div>



        {/* services section */}
        <div
        data-aos='fade-up'
        data-aos-offset='200'
        className={styles.cover}
        >
        <div className={styles.serveMain}>
            <div className={styles.serveInn}>
                <div>
                    <h1 className={styles.servicesP}>Services</h1>
                </div>
                <div className={styles.services}>
                    <div className={styles.servicesContainer}>
                        <ScooterImg  height='350' width='350'/>
                        <div className={styles.reqServ}>
                            <RequestService/>
                        </div>
                    </div>
                    <div className={styles.containers}>
                        <ServicesCarousel CarouselContent={Carcont2}/>
                    </div>
                </div>
                
            </div> 
            </div>
        </div>
    </>
    
    )
}
export default HomeMain