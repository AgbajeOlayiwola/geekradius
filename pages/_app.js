import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/head'



function MyApp({ Component, pageProps }) {

  return( 
  <Layout>
    <Head>
      <title>Geek Radius</title>
      <link rel="shortcut icon" href="/vercel.svg" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;400&family=Playfair+Display&display=swap" rel="stylesheet"/>
          
       
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
