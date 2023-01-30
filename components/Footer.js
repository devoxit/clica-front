import Head from "next/head";

import Link from "next/link";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";




const Footer = () => {
  return (
    <>
         <Head>
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

        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
        <link
          href="assets/css/theme-rtl.min.css"
          type="text/css"
          rel="stylesheet"
          id="style-rtl"
        />
        <link
          href="assets/css/theme.min.css"
          type="text/css"
          rel="stylesheet"
          id="style-default"
        />
        <link
          href="assets/css/user-rtl.min.css"
          type="text/css"
          rel="stylesheet"
          id="user-style-rtl"
        />
        <link
          href="assets/css/user.min.css"
          type="text/css"
          rel="stylesheet"
          id="user-style-default"
        />
      </Head>
<footer class="footer position-absolute">
              <div class="row g-0 justify-content-between align-items-center h-100">
                <div class="col-12 col-sm-auto text-center">
                  <p class="mb-0 mt-2 mt-sm-0 text-900">
                    Thank you for visiting CliCa Website
                    <span class="d-none d-sm-inline-block"></span>
                    <span class="d-none d-sm-inline-block mx-1">|</span>
                    <br class="d-sm-none" />
                    2023 &copy;
                    <a class="mx-1" href="https://clica.com">
                      CliCa
                    </a>
                  </p>
                </div>
                <div class="col-12 col-sm-auto text-center">
                  <p class="mb-0 text-600">v1.0.0</p>
                </div>
              </div>
            </footer>
     
    </>
  );
};

export default Footer;
