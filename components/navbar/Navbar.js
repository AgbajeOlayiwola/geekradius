import React, { useState, useCallback, useEffect } from "react";
import styles from '../../styles/navbar/navbar.module.css'
import Grlogo from "../logo/Grlogo";
import Link from 'next/link'
import Lettermarklogo from "../logo/Lettermarklogo";
import { useRouter } from 'next/router'
import { slide as Menu } from 'react-burger-menu'

const Navbar = ()=>{


    const useMediaQuery = (width) => {
        const [targetReached, setTargetReached] = useState(false);
      
        const updateTarget = useCallback((e) => {
          if (e.matches) {
            setTargetReached(true);
          } else {
            setTargetReached(false);
          }
        }, []);
      
        useEffect(() => {
          const media = window.matchMedia(`(max-width: ${width}px)`);
          media.addListener(updateTarget);
      
          // Check on mount (callback is not called until a change occurs)
          if (media.matches) {
            setTargetReached(true);
          }
      
          return () => media.removeListener(updateTarget);
        }, []);
      
        return targetReached;
      };
      var navstyles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
        },
        bmBurgerBars: {
          background: '#fff'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: 'fit-content'
        },
        bmMenu: {
          background: 'none',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          display: 'block',
          padding: '0.8em'
        },
        bmItem: {
          display: 'inline-block'
        },
        bmOverlay: {
          background: 'none'
        }
      }

    const isBreakpoint = useMediaQuery(1350)
    const router = useRouter()
    return (
        
        <div>
            {
                isBreakpoint ? 

                <nav className={styles.nav}>
                <Link href='./'>
                    <div  style={{cursor:'pointer'}}>
                        <Grlogo/>
                    </div>
                </Link>
                <Menu 
                styles={ navstyles}
                right>
                    <div>
                        <div className={styles.navroutes}>
                            <Link href='./about'>
                            <div
                            className={router.pathname == '/about' ? styles.active : styles.notActive}
                             ><p>ABOUT</p></div>
                            </Link>
                            <Link href='./spaces'>
                            <div 
                            className={router.pathname == '/spaces' ?styles.active: styles.notActive}><p>SPACES</p></div>
                            </Link>

                            {/* <Link href='./partner'>
                            <div><p>PARTNER WITH US</p></div>
                            </Link> */}
                        </div>
                    </div>
                </Menu>
                </nav>
                :
            <nav className={styles.nav}>
            <Link href='./'>
                <div  style={{cursor:'pointer'}}>
                    <Grlogo/>
                </div>
            </Link>
                <div>
                    <div className={styles.navroutes}>
                      
                    { router.pathname == '/services'?
                          <>
                        <Link href='./product'>
                            <div 
                            className={router.pathname == '/products' ?styles.active: styles.notActive}><p>PRODUCTS</p></div>
                        </Link>
                        <Link href='./services'>
                            <div 
                            className={router.pathname == '/services' ?styles.active: styles.notActive}><p>SERVICES</p></div>
                         </Link>
                         </>
                         :
                         null
                       }
                        <Link href='./about'>
                        <div
                        className={router.pathname == '/about' ? styles.active : styles.notActive}
                         ><p>ABOUT</p></div>
                        </Link>
                        <Link href='./spaces'>
                        <div 
                        className={router.pathname == '/spaces' ?styles.active: styles.notActive}><p>SPACES</p></div>
                        </Link>
                        <Link href='./partner'>
                        <div className={styles.partner}><p>PARTNER WITH US</p></div>
                        </Link>
                        
                        <div>
                            <Lettermarklogo/>
                        </div>
                    </div>
                </div>
            </nav>
        }
        </div>
    )
}

export default Navbar