import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import ListPosts from "@/components/Posts/ListPosts";
import Footer from "@/components/Footer";

export default function Posts() {
  return (
    <>
      <Layout>
       

        <div style={{ marginRight: 0 }} class="content ">
          <div class="pb-9">
            <div class="row gy-3 gx-5 gx-xxl-6">
              <div class="col-12">
                <div class="mb-9">
                  <ListPosts />
                </div>
                <div class="text-center">
                  <a class="btn btn-link fs-0 p-0" href="#!">
                    Load more
                  </a>
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
