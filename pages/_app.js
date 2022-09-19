import App from 'next/app'
import FirebaseState from '../context/firebaseState'
import Head from 'next/head'

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {
  return(
<FirebaseState>
<Head>
    <title>El Cangrejal</title>
    <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="Sitio Web de Cevicheria El Cangrejal"
          />
          <meta name="author" content="Juca Kenny" />
    </Head>
    <Component {...pageProps} />
</FirebaseState>
    ) 
}

export default MyApp
