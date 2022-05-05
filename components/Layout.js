import React, { Children } from 'react'
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import styles from '../styles/navbar/navbar.module.css'

const Layout = ({children}) => {
    return (
        <div className={styles.covEr}>
            <Navbar/>
                {children}
            <Footer/>
          
            
        </div>
    )
}

export default Layout
