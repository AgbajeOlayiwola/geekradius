import React, {useEffect} from "react";
import AudioImg from "../../components/spaces/Audio";
import BookSpaceBtn from "../../components/spaces/bookspacebtn";
import Conf from "../../components/spaces/Conf";
import Playvideo from "../../components/spaces/Playvideo";
import Reserve from "../../components/spaces/reserve";
import Slider from "../../components/spaces/slider";
import styles from '../../styles/pages/spaces/spaces.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Spaces = () =>{

    useEffect(() => {
        AOS.init();
      }, []);

    return(
        <div>
        <div 
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-offset='200'
        className={styles.cover}>
            <div className={styles.main}>
                <div>
                    <div>
                        <h1 className={styles.space1}>Spaces</h1>
                       <Slider/>
                    </div>
                    <BookSpaceBtn/>
                </div>
                <div>
                    <Playvideo width={550} height={550}/>
                </div>
            </div>


            <div 
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-offset='200'
            className={styles.visual}>
                <div className={styles.audioText}>
                    <div><h1>Visual</h1></div>
                    <div><h3>REHEARSAL STUDIO</h3></div>
                    <div className={styles.pFont}><p>Recording spaces with a talented community of producers, song writers and artists…</p></div>
                </div>
                <div>
                    <Reserve price={'15,000'}/>
                </div>
            </div>


            <div 
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-offset='200'
            className={styles.photography}>
                <div>
                    <Playvideo width={450} height={450}/>
                </div>
                <div>
                    <div className={styles.photoTag}>
                        <div><h3>PHOTOGRAPHY</h3></div>
                        <div className={styles.pFont}><p>Recording spaces with a talented community of producers, song writers and artists…</p></div>
                        <div>
                            <Reserve price={'15,000'}/>
                        </div>
                    </div>
                </div>
                </div>


                <div 
                data-aos='fade-up'
                data-aos-offset='200'
                data-aos-offset='200'
                className={styles.audioMain}>
                    <div className={styles.audioText}>
                        <div><h1 className={styles.space1}>Audio</h1></div>
                        <div><h3>RECORDING STUDIO</h3></div>
                        <div className={styles.pFont}><p>Recording spaces with a talented community of producers, song writers and artists…</p></div>
                        <div><Reserve price={'15,000'}/></div>
                    </div>
                    <div className={styles.audioImg}>
                        <AudioImg width={450} height={450}/>
                    </div>
                </div>


                <div 
                data-aos='fade-up'
                data-aos-offset='200'
                data-aos-offset='200'
                className={styles.coWorking}>
                    <div>
                        <div><h1 className={styles.coWorkH1}>CO - Working</h1></div>
                        <div className={styles.coWork}>
                            <div><h3>OPEN SEATS</h3></div>
                            <div className={styles.pFont}><p>Recording spaces with a talented community of producers, song writers and artists…</p></div>
                            <div>
                        <Reserve price={'15,000'}/>
                    </div>
                        </div>
                    </div>
                    
                </div>
            

            <div 
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-offset='200'
            className={styles.conference}>
                <div>
                    <Conf width={450} height={450}/>
                </div>
                <div>
                    <div className={styles.confTag}>
                        <div><h3>CONFERENCE ROOM</h3></div>
                        <div className={styles.pFont}><p>Recording spaces with a talented community of producers, song writers and artists…</p></div>
                        <div>
                            <Reserve price={'15,000'}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Spaces