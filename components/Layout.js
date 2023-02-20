import { useEffect, useState} from 'react';import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
 
  
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/img/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/img/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="assets/img/favicons/favicon-16x16.png"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="assets/img/favicons/favicon.ico"
        />
        <link rel="manifest" href="assets/img/favicons/manifest.json" />
        <meta
          name="msapplication-TileImage"
          content="assets/img/favicons/mstile-150x150.png"
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
        <link href="vendors/simplebar/simplebar.min.css" rel="stylesheet" />
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
   
      <main className="main" id="top">
        <div className="container-fluid px-0">
          <Sidebar  />
          <Navbar />

          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
