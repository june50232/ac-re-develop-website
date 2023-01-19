import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HTMLHead, Header, Footer } from '../';
import Script from 'next/script'

export default function Layout(props) {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 8,
      delay: 50,
      once: true,
    });
    // AOS.refresh({
    //   duration: 3000,
    //   offset: 8
    // });
  }, []);

  return (
    <html lang="en">
      <div className="min-h-screen py-0">
        <HTMLHead />
        <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N7QJ3ZT');
        `}
      </Script>
        <body>
          <Header />
          <main className="pt-16 flex flex-col">{props.children}</main>
          <Footer />
          {/* Google Tag Manager (noscript) */}
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7QJ3ZT"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        </body>
      </div>
    </html>
  );
}
