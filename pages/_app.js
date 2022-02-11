import Layout from '../components/Layout'
import {useEffect} from 'react'
import '../styles/globals.css'
import Head from 'next/Head'
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return( 
  <Layout>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;400&family=Playfair+Display&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&family=Mulish:wght@200;400&family=Playfair+Display&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&family=Mulish:wght@200;400&family=Playfair+Display&display=swap" rel="stylesheet"/>
        </Head>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
