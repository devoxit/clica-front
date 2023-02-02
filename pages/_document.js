import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />

        {/* <!-- ====================JavaScripts  ===========================--> */}

        <script src="vendors/popper/popper.min.js"></script>
    <script src="vendors/bootstrap/bootstrap.min.js"></script>
        <script src="vendors/anchorjs/anchor.min.js"></script>
        <script src="vendors/is/is.min.js"></script>
        {/* <script src="vendors/fontawesome/all.min.js"></script> */}
        <script src="vendors/lodash/lodash.min.js"></script>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=window.scroll"></script>
        <script src="vendors/list.js/list.min.js"></script>
        <script src="vendors/feather-icons/feather.min.js"></script>
        <script src="vendors/dayjs/dayjs.min.js"></script>
        <script src="assets/js/phoenix.js"></script>
        <script src="vendors/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="vendors/isotope-packery/packery-mode.pkgd.min.js"></script>
        <script src="vendors/bigpicture/BigPicture.js"></script>
        <script src="vendors/countup/countUp.umd.js"></script>
        {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyARdVcREeBK44lIWnv5-iPijKqvlSAVwbw&callback=initMap" async></script> */}
        <script src="https://smtpjs.com/v3/smtp.js"></script>

        {/* <script src="../../vendors/popper/popper.min.js"></script>
        <script src="../../vendors/bootstrap/bootstrap.min.js"></script>
        <script src="../../vendors/fontawesome/all.min.js"></script>
        <script src="../../vendors/feather-icons/feather.min.js"></script>
        <script src="../../vendors/anchorjs/anchor.min.js"></script>
        <script src="../../vendors/is/is.min.js"></script>
        <script src="../../vendors/lodash/lodash.min.js"></script>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=window.scroll"></script>
        <script src="../../vendors/list.js/list.min.js"></script>
        <script src="../../vendors/dayjs/dayjs.min.js"></script>
        <script src="../../vendors/glightbox/glightbox.min.js"> </script>
        <script src="../../assets/js/phoenix.js"></script> */}
      </body>
    </Html>
  );
}
