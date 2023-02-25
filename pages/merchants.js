import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import CardItem from "@/components/CardItem/CardItem";
import Footer from "@/components/Footer";
import withAuth from '../auth/withAuth';
import { withTranslation } from 'react-i18next';

 function Merchants({t}) {
  return (
    <>
      <Layout>
        <div style={{ marginRight: 0 }} className="content ">
          <div className="pb-9">
            {/* <div className="row gy-3 gx-5 gx-xxl-6">
   </div> */}

            <div className="container">
              <button
                className="btn btn-sm btn-phoenix-secondary text-700 mb-5 d-lg-none"
                data-phoenix-toggle="offcanvas"
                data-phoenix-target="#productFilterColumn"
              >
                
                <span className="fa-solid fa-filter me-2"></span>Filter
              </button>
              <div className="row">
              <div className="text-center mb-7">
                  <h1 className="text-1000">{t("merchants")} </h1>
                  
                </div>
               
                <div className="col-12">
                  <div className="row gx-3 gy-6 mb-8">
                        <CardItem imageUrl="https://www.retorio.com/hubfs/hardik-pandya-9sz0RKcPAQw-unsplash.jpg" linkUrl="/shop"/>
                        <CardItem imageUrl="https://www.retorio.com/hubfs/hardik-pandya-9sz0RKcPAQw-unsplash.jpg" linkUrl="/shop"/>
                        <CardItem imageUrl="https://www.retorio.com/hubfs/hardik-pandya-9sz0RKcPAQw-unsplash.jpg" linkUrl="/shop"/>
                        <CardItem imageUrl="https://www.retorio.com/hubfs/hardik-pandya-9sz0RKcPAQw-unsplash.jpg" linkUrl="/shop"/>
                        <CardItem imageUrl="https://www.retorio.com/hubfs/hardik-pandya-9sz0RKcPAQw-unsplash.jpg" linkUrl="/shop"/>
                        <CardItem imageUrl="https://www.retorio.com/hubfs/hardik-pandya-9sz0RKcPAQw-unsplash.jpg" linkUrl="/shop"/>
                       
                  </div>           
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Layout>
    </>
  );
}

export default  withTranslation()(withAuth(Merchants));

