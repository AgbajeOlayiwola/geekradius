import Layout from '../components/Layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  return( 
  <Layout>
          <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;400&family=Playfair+Display&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&family=Mulish:wght@200;400&family=Playfair+Display&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&family=Mulish:wght@200;400&family=Playfair+Display&display=swap" rel="stylesheet"/>
       
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
