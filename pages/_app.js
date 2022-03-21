import Layout from '../components/Layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  return( 
  <Layout>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;400&family=Playfair+Display&display=swap" rel="stylesheet"/>
          
       
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
