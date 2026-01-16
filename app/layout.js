import '../public/assets/css/style.css'
import '../public/assets/css/modal.css'
import "../public/assets/css/swiper-custom.css";
import { Chivo, Noto_Sans } from 'next/font/google'
import Script from 'next/script'
import WowInit from '@/components/elements/WowInit'

const chivo = Chivo({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--chivo",
    display: 'swap',
})
const noto = Noto_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--noto",
    display: 'swap',
})

export const metadata = {
    title: 'Peskas™ - Open-source digital platform for small-scale fisheries',
    description: 'Peskas is an open-source, modular platform that turns fisheries data into decision-ready insights. Built with co-design principles, it scales from landing-site monitoring to national dashboards across Asia and Africa.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Google Tag (gtag.js) */}
                <Script 
                    src="https://www.googletagmanager.com/gtag/js?id=G-K31B8LMLQZ" 
                    strategy="afterInteractive" 
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-K31B8LMLQZ');
                    `}
                </Script>
                
                {/* Preload critical resources */}
                <link
                    rel="preload"
                    href="/assets/fonts/uicons/uicons-regular-rounded.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
                <style dangerouslySetInnerHTML={{
                    __html: `
                        @font-face {
                            font-family: 'uicons-regular-rounded';
                            font-display: swap;
                        }
                    `
                }} />
            </head>
            <body className={`${chivo.variable} ${noto.variable}`}>
                <WowInit />
                {children}
            </body>
        </html>
    )
}
