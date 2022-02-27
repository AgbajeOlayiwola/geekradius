import React, {useEffect} from "react";
import Slider from "../../components/spaces/slider";
import Frank from "../../components/home/Frank.";
import Playvideo from "../../components/spaces/Playvideo";
import styles from '../../styles/pages/home/home.module.css'
import BookSpaceBtn from "../../components/spaces/bookspacebtn";
import CarouselCont from "../../components/home/homeCarousel/carouselContent";
import AudioImg from "../../components/spaces/Audio";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Seehow from "../../components/home/seehow";
import Testyouridea from "../../components/home/testyouridea";
import OurProductsBtn from "../../components/home/ourproducts";


const HomeMain =()=>{

    useEffect(() => {
        AOS.init();
      }, []);

    return (
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
                <Frank/>
            </div>
        </div>

{/* How section */}
        <div
        data-aos='fade-up'
        data-aos-offset='200'>
        <div className={styles.PionneringMain}>
            <div>
                <div>
                    <h1 className={styles.spaceP}>How</h1>
                    <p className={styles.youMay}>You may ask?</p>
                    <p className={styles.mainP}>We’re realising, articulating, capturing and exchanging value</p>
                </div>
                <div className={styles.test}>
                <Testyouridea/>
                </div>
            </div>
            <div>
                <Frank/>
                <div className={styles.btnParent}>
                <OurProductsBtn/>
                </div>
            </div>
        </div>
        

        {/* images section */}

        <div
        data-aos='fade-up'
        data-aos-offset='200'
        >
        <div className={styles.focussed}>
            <div>
                <div>
                    <img src='/homeassets/fallingVrBoy.png' 
                    className={styles.fallingBoy} />
                </div>
            </div>
            <div className={styles.secondImg}>
            <img src='/homeassets/sleepingwoman.png' 
             className={styles.sleepWoman} />
            </div>
        </div>
        </div>
        </div>
        


{/* another spaces secion maybe i should have made the whole section a component oh well */}
<div
        data-aos='fade-up'
        data-aos-offset='200'
        >
        <div className={styles.spaceMain}>
            <div>
                <Playvideo height='650' width='650'/>
            </div>
            <div>
                <div>
                    <Slider/>
                </div>
                    <BookSpaceBtn/>
            </div>
        </div>
</div>

        {/* //Products section */}
        <div
        data-aos='fade-up'
        data-aos-offset='200'
        >
        <div className={styles.spaceMain}>
            <div>
                <div>
                    <p className={styles.productsP}>Products</p>
                </div>
                <div className={styles.products}>
                    <div>
                        <Playvideo height='650' width='650'/>
                    </div>
                    <div>
                        <AudioImg height='650' width='650'/>
                    </div>
                    <div>
                        <Playvideo height='650' width='650'/>
                    </div>
                    <div>
                        <Playvideo height='650' width='650'/>
                    </div>
                    <div>
                        <Playvideo height='650' width='650'/>
                    </div>
                </div>
                    
            </div>
            </div>
            </div>



        {/* services section */}
        <div
        data-aos='fade-up'
        data-aos-offset='200'
        >
        <div className={styles.serveMain}>
            <div>
                <div>
                    <p className={styles.servicesP}>Services</p>
                </div>
                <div className={styles.services}>
                    <div>
                        <Playvideo height='450' width='450'/>
                    </div>
                    <div>
                        <CarouselCont/>
                        <div className={styles.bkBtn}>
                        <BookSpaceBtn/>
                        </div>
                    </div>
                </div>
                
            </div> 
            </div>
        </div>
    </div>
    )
}
export default HomeMain