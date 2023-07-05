import React from 'react'

import '@picocss/pico/css/pico.min.css'
import '../style.css'

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
