
import Layout from '../components/layout/layout'
import React, { useEffect } from 'react';
import '../dist/output.css'

export default function MyApp({ Component, pageProps }) {
    // useEffect(() => {
    //   document.body.className = 'bg-dark-blue text-white';
    // });
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
}


