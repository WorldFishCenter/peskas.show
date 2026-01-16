import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Google Tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-H9SV6BGNC" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-H9SV6BGNC');
                        `,
                    }}
                />
                <meta charSet="utf-8" />
                <meta name="description" content="Peskas is an open-source, modular platform that turns fisheries data into decision-ready insights. Built with co-design principles, it scales from landing-site monitoring to national dashboards across Asia and Africa." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
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
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

