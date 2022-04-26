import React from "react";
import styles from '../../styles/footer/footer.module.css'
import Lettermarklogo from "../logo/Lettermarklogo";
import { FaLinkedin } from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs'
import {IoMdMail} from 'react-icons/io'
import Link from 'next/link'

const Footer = () =>{

    return(
        <div className={styles.inner}>
        <footer className={styles.footerWrp}>
            <div className={styles.letsStart}>
                <h1 className={styles.start}>Lets start a <span className={styles.proj}>project</span></h1>
            </div>
        
        <div className={styles.locatStart}>
            <div className={styles.locat}>
                <p>LOCATION</p>
                <hr/>
                <p>
                    Geek Radius
                    2A Surveyor Joseph Amadi
                    Bera Estate, Chevron Drive
                    Lekki, 105405
                </p>
            </div>
            <div className={styles.getin}>
            <div>
                <p>GET IN TOUCH</p>
                <hr/>
                <p>
                    info@geekradius.com
                </p>
                <button className={styles.hireTeam}>HIRE A TEAM</button>
            </div>
            </div>
        </div>

        <div>
        <div className={styles.top}>
            <div>
                <h4 className={styles.h3}>STAY CONNECTED</h4>
                <hr className={styles.h3hr}/>
            </div>
            
        </div>
            <div className={styles.footer}>
            
            <div className={styles.cont}>
            <Link href='./'>
                <div className={styles.letterLogo}>
                <Lettermarklogo/>
                </div>
            </Link>
                <div>
                    <h4 className={styles.h4}>About</h4>
                </div>
                <div>
                    <h4 className={styles.h4}>Spaces</h4>
                </div>
                <div>
                    <h4 className={styles.h4}>Careers</h4>
                </div>
                <div>
                    <h4 className={styles.h4}>Partners</h4>
                </div>
            </div>
            <div className={styles.socialsCove}>
                <div className={styles.socials}>
                    <div>
                        <IoMdMail/>
                    </div>
                    <div>
                        <BsInstagram/>
                    </div>
                    <div>
                        <FaLinkedin/>
                    </div>
                </div>
                <div className={styles.partJoin}>
                    <div>
                        <p className={styles.part}>Partner With Us</p>
                    </div>
                    <div>
                        <p>Join Us</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </footer>
        </div>
    )
}
export default Footer