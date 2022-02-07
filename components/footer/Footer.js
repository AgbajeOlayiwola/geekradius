import React from "react";
import styles from '../../styles/footer/footer.module.css'
import Lettermarklogo from "../logo/Lettermarklogo";
import { FaLinkedin } from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs'
import {IoMdMail} from 'react-icons/io'

const Footer = () =>{

    return(
        <footer className={styles.footerWrp}>
        <div>
        <div className={styles.top}>
            <div className={styles.hr}>
                <hr/>
            </div>
            <div>
                <h3 className={styles.h3}>STAY IN TOUCH</h3>
            </div>
        </div>
            <div className={styles.footer}>
            
            <div className={styles.cont}>
                <Lettermarklogo/>
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
            <div style={{width:'18%'}}>
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
                        <p>Partner With Us</p>
                    </div>
                    <div>
                        <p>Join Us</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </footer>
    )
}
export default Footer