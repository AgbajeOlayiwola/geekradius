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


const HomeMain =()=>{

    useEffect(() => {
        AOS.init();
      }, []);

    return (
    <div className={styles.cover}>
        <div className={styles.PionneringMain}>
            <div>
                <div>
                    <h1 className={styles.mainH1}>We're Pioneering <span className={styles.creative}>Creative-Tech</span></h1>
                    <p className={styles.mainP}>We’re realising, articulating, capturing and exchanging value</p>
                </div>
                <div className={styles.seeHow}>
                    <p>SEE HOW</p>
                </div>
            </div>
            <div>
                <Frank/>
            </div>
        </div>

{/* How section */}
        <div
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-offset='200'>
        <div className={styles.PionneringMain}>
            <div>
                <div>
                    <p className={styles.spaceP}>HOW</p>
                    <p className={styles.youMay}>You may ask?</p>
                    <p className={styles.mainP}>We’re realising, articulating, capturing and exchanging value</p>
                </div>
                <div className={styles.seeHow}>
                    <p>SEE HOW</p>
                </div>
            </div>
            <div>
                <Frank/>
            </div>
        </div>
        

        {/* images section */}

        <div
        data-aos='fade-up'
        data-aos-offset='200'
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
        data-aos-offset='200'
        >
        <div className={styles.spaceMain}>
            <div>
                <Playvideo height='550' width='550'/>
            </div>
            <div>
                <div>
                    <p className={styles.spaceP}>Spaces</p>
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
        data-aos-offset='200'
        >
        <div className={styles.spaceMain}>
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