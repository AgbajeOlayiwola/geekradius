import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/Head'

function MyApp({ Component, pageProps }) {
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
