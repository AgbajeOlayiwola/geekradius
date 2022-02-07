import React, { Children } from 'react'
import {useRouter} from 'next/router'
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Layout = ({children}) => {
    const router = useRouter();

    console.log(router)
    return (
        <div>
            <Navbar/>
                {children}
            <Footer/>
          
            
        </div>
    )
}

export default Layout
