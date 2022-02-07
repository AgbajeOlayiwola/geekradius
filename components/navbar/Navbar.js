import React from "react";
import styles from '../../styles/navbar/navbar.module.css'
import Grlogo from "../logo/Grlogo";
import Link from 'next/link'
import Lettermarklogo from "../logo/Lettermarklogo";
import { useRouter } from 'next/router'

const Navbar = ()=>{

    const router = useRouter()

    return (
        <div>
            <nav className={styles.nav}>
            <Link href='./'>
                <div>
                    <Grlogo/>
                </div>
            </Link>
                <div>
                    <div className={styles.navroutes}>
                        <Link href='./about'>
                        <div
                        className={router.pathname == '/about' ? styles.active : styles.notActive}
                         ><p>ABOUT</p></div>
                        </Link>
                        <Link href='./spaces'>
                        <div 
                        className={router.pathname == '/spaces' ?styles.active: styles.notActive}
                        style={{}}><p>SPACES</p></div>
                        </Link>
                        <Link href='./partner'>
                        <div><p>PARTNER WITH US</p></div>
                        </Link>
                        
                        <div>
                            <Lettermarklogo/>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar