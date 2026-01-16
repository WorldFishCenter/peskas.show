import '../public/assets/css/style.css'
import '../public/assets/css/modal.css'
import "../public/assets/css/swiper-custom.css";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import Preloader from '../components/elements/Preloader';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Initialize WOW.js only on client side with dynamic import
    if (typeof window !== "undefined") {
      // Use dynamic import to avoid SSR issues
      import('wowjs').then((module) => {
        try {
          const WOW = module.WOW || module.default?.WOW || module.default;
          if (WOW && typeof WOW === 'function') {
            new WOW().init();
          }
        } catch (error) {
          console.warn("WOW.js could not be initialized:", error);
        }
      }).catch((error) => {
        console.warn("Could not load WOW.js:", error);
      });
    }

    // Set loading to false after component mounts
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-H9SV6BGNC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-H9SV6BGNC');
        `}
      </Script>
      {loading ? (
        <Preloader />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}

export default MyApp
