import '../public/assets/css/style.css'
import '../public/assets/css/modal.css'
import "../public/assets/css/swiper-custom.css";
import React, { useEffect, useState } from "react";
import Preloader from '../components/elements/Preloader';
import ReactGA from 'react-ga4';
ReactGA.initialize('G-NQ0FZ0QHVH');

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);
  return (
    <>
      {!loading ? (
        <Component {...pageProps} />
      ) : (
        <Preloader />
      )}

    </>
  )
}

export default MyApp
