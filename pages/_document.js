import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/img/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/img/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/img/favicons/favicon-16x16.png"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/assets/img/favicons/favicon.ico"
        />
        <link rel="manifest" href="/assets/img/favicons/manifest.json" />
        <meta
          name="msapplication-TileImage"
          content="/assets/img/favicons/mstile-150x150.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&amp;display=swap"
          rel="stylesheet"
        />
        <link href="/vendors/glightbox/glightbox.min.css" rel="stylesheet" />
        <link href="/vendors/simplebar/simplebar.min.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
        <link
          href="/assets/css/theme-rtl.min.css"
          type="text/css"
          rel="stylesheet"
          id="style-rtl"
        />
        <link
          href="/assets/css/theme.min.css"
          type="text/css"
          rel="stylesheet"
          id="style-default"
        />
        <link
          href="/assets/css/user-rtl.min.css"
          type="text/css"
          rel="stylesheet"
          id="user-style-rtl"
        />
        <link
          href="/assets/css/user.min.css"
          type="text/css"
          rel="stylesheet"
          id="user-style-default"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        <Script src="/vendors/imagesloaded/imagesloaded.pkgd.min.js" />
        <Script src="/vendors/simplebar/simplebar.min.js" />
        <Script src="/assets/js/config.js" />
        {/* <!-- ====================JavaScripts  ===========================--> */}
        {/* <Script src="/vendors/popper/popper.min.js" /> */}
        {/* <Script src="/vendors/bootstrap/bootstrap.min.js" /> */}
        <Script src="/vendors/anchorjs/anchor.min.js" />
        <Script src="/vendors/is/is.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js" />
        <Script src="/vendors/lodash/lodash.min.js" />
        <Script src="https://polyfill.io/v3/polyfill.min.js?features=window.scroll" />
        <Script src="/vendors/list.js/list.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.0.0/feather.min.js" />
        <Script src="/vendors/dayjs/dayjs.min.js" />
        <Script src="/assets/js/phoenix.js" />
        <Script src="/vendors/isotope-layout/isotope.pkgd.min.js" />
        <Script src="/vendors/isotope-packery/packery-mode.pkgd.min.js" />
        <Script src="/vendors/bigpicture/BigPicture.js" />
        <Script src="/vendors/countup/countUp.umd.js" />
        <Script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyARdVcREeBK44lIWnv5-iPijKqvlSAVwbw&callback=initMap"
          async
        />
        <Script src="https://smtpjs.com/v3/smtp.js" />
        <Script src="/vendors/rater-js/index.js" />
        <Script src="/vendors/glightbox/glightbox.min.js" />
        <script async src="/vendors/popper/popper.min.js"></script>
        <script async src="/vendors/bootstrap/bootstrap.min.js"></script>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
