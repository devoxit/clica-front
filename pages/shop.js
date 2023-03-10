import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";


import Layout from "../components/Layout";
import withAuth from "../auth/withAuth";
// import Map from "../components/Map"



function Shop() {
 
  return (
    <>
      <Layout>
        <div style={{ marginRight: 0 }} className="content">
          <div className="pb-9">
            <div className="row gx-lg-9" style={{ margin: "0 50px" }}>
              <div class="col-12 order-0">
                <div class="card cover-image mb-5">
                  <div
                    class="card-header hover-actions-trigger d-flex justify-content-center align-items-end position-relative mb-7 mb-xxl-0"
                    style={{ minHeight: " 214px" }}
                  >
                    <div
                      class="bg-holder"
                      style={{
                        backgroundImage:
                          "url(https://www.retorio.com/hubfs/hardik-pandya-9sz0RKcPAQw-unsplash.jpg)",
                      }}
                    ></div>
                    <input class="d-none" id="upload-cover-image" type="file" />
                    <label
                      class="cover-image-file-input"
                      for="upload-cover-image"
                    ></label>
                    <div class="hover-actions end-0 bottom-0 pe-1 pb-2 text-white">
                      <span class="fa-solid fa-camera me-2 overlay-icon"></span>
                    </div>

                    <input
                      class="d-none"
                      id="upload-porfile-picture"
                      type="file"
                    />
                    <label
                      class="avatar avatar-5xl feed-profile cursor-pointer"
                      for="upload-porfile-picture"
                    >
                      <img
                        class="rounded-circle bg-white img-thumbnail shadow-sm"
                        src="https://img.freepik.com/premium-vector/draw-funny-kawaii-japan-tradition-sweet-mochi-vector-illustration-japanese-asian-traditional-food-cooking-menu-concept-doodle-cartoon-style_564312-840.jpg"
                        width="150"
                        height="150"
                        alt=""
                      />
                    </label>
                  </div>
                  <div class="card-body">
                    <div class="row justify-content-xl-between">
                      <div class="col-auto">
                        <div class="d-flex flex-wrap mb-3 align-items-center">
                          <h2 class="me-2"> ???????????????1020????????????</h2>
                          <span class="fw-semi-bold fs-1 text-1100"></span>
                        </div>

                        <p class="fs-2 text-800">
                          ???Ichiwa, a family business, sells mochi (a Japanese
                          rice cake) next to an old shrine in Kyoto.???
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 border-end-xl border-300">
                <div className="card mb-9">
                  <div className="card-body">
                    <div className="card mb-5 mb-xxl-7">
                      <div className="card-body">
                        <div className="row gy-5">
                          <div className="col-md-6 d-flex justify-content-between">
                            <div>
                              <div className="mb-3">
                                <div className="d-flex align-items-center">
                                  <div className="px-2 py-1 bg-info-100 rounded">
                                    <span
                                      className="text-info"
                                      data-feather="map-pin"
                                    ></span>
                                  </div>
                                  <h5 className="ms-2 text-1100 mb-0">
                                    Location
                                  </h5>
                                </div>
                              </div>
                            
       
                              <p className="lh-sm mb-0 text-700">
                                36/4A, James Tiberius Auditorium,
                                <br />
                                Vancouver, British Columbia, Canada{" "}
                              </p>
                            </div>
                            <div className="my-4 mx-3 border-start d-none d-md-block"></div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <div className="d-flex align-items-center">
                                <div className="px-2 py-1 bg-primary-100 rounded">
                                  <span
                                    className="text-primary"
                                    data-feather="clock"
                                  ></span>
                                </div>
                                <h5 className="ms-2 mb-0">Working time</h5>
                              </div>
                            </div>
                            <p className="lh-sm mb-0 text-700">
                              Open 7 days a week ,
                              <br />
                              10 am - 01 pm
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="mb-3">About this shop</h2>
                <p className="text-justify text-800 mb-6 mb-xxl-8">
                  Ichiwa, a family business, sells mochi (a Japanese rice cake)
                  next to an old shrine in Kyoto. The business was founded in
                  the year 1000. That???s right. This tiny shop survived famines,
                  earthquakes, wars, and changes in regime power. The shop???s
                  matriarch, Naomi Hasegawa, is one example of a quickly-fading
                  sense of traditional leadership. Kenji Matsuoka, a professor
                  emeritus of business at Ryukoku University in Kyoto, tells the
                  New York Times that these kinds of businesses operate with
                  entirely different goals and principles. Where modern
                  organizations focus on growth, franchising, and scaling up,
                  these businesses focus on being passed down to the next
                  generation. It???s focused on creating a secure present, rather
                  than gambling for the future.
                </p>

                <div className="row g-1 g-sm-2 mb-7 mb-xxl-8">
                  <div className="col-3">
                    <a
                      href="https://www.retorio.com/hubfs/hardik-pandya-9sz0RKcPAQw-unsplash.jpg"
                      data-gallery="gallery-posts-undefined"
                    >
                      <img
                        className="rounded h-100 w-100 fit-cover"
                        src="https://www.retorio.com/hubfs/hardik-pandya-9sz0RKcPAQw-unsplash.jpg"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="https://www.retorio.com/hubfs/hardik-pandya-9sz0RKcPAQw-unsplash.jpg"
                      data-gallery="gallery-posts-undefined"
                    >
                      <img
                        className="rounded h-100 w-100 fit-cover"
                        src="https://www.retorio.com/hubfs/hardik-pandya-9sz0RKcPAQw-unsplash.jpg"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="https://www.retorio.com/hubfs/hardik-pandya-9sz0RKcPAQw-unsplash.jpg"
                      data-gallery="gallery-posts-undefined"
                    >
                      <img
                        className="rounded h-100 w-100 fit-cover"
                        src="https://www.retorio.com/hubfs/hardik-pandya-9sz0RKcPAQw-unsplash.jpg"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="https://www.retorio.com/hubfs/hardik-pandya-9sz0RKcPAQw-unsplash.jpg"
                      data-gallery="gallery-posts-undefined"
                    >
                      <img
                        className="rounded h-100 w-100 fit-cover"
                        src="https://www.retorio.com/hubfs/hardik-pandya-9sz0RKcPAQw-unsplash.jpg"
                        alt="..."
                      />
                    </a>
                  </div>
                </div>
                <h4 className="mb-3 text-1000 fs-xxl-2">
                  Topic To Be Covered:
                </h4>
                <ul className="mb-6 ps-4">
                  <li>Latest Update With Bitcoin</li>
                  <li>Blockchain Vs Bitcoin</li>
                  <li>Why Do We Need CryptoCurrency?</li>
                  <li>Bitcoin History</li>
                  <li>Bitcoin Vs Ethereum</li>
                  <li>How Big Is Cryptocurrency Right Now?</li>
                  <li>Crypto Scams &amp; How To Identify Them</li>
                  <li>Is it Worth Buying To Keep?</li>
                </ul>

                <h3 className="mb-3 fw-bold text-1000 fs-1 fs-xxl-2">
                  Responses:
                </h3>
                <div className="d-flex mb-6">
                  <div className="mx-3">
                    <p className="mb-2 text-800">Interested</p>
                    <h3 className="text-800">15,652</h3>
                  </div>
                  <div className="my-3 mx-3 border-start"></div>
                  <div className="ms-3">
                    <p className="mb-2 text-800">Share</p>
                    <h3 className="text-800">11,236</h3>
                  </div>
                </div>
                <h3 className="mb-3 fw-bold text-1000 fs-1">
                  Share with Friends:
                </h3>
                <div className="d-flex mb-5">
                  <button className="btn btn-phoenix-primary btn-icon me-2">
                    <span className="fa-brands fa-facebook text-facebbok"></span>
                  </button>
                  <button className="btn btn-phoenix-primary btn-icon me-2">
                    <span className="fa-brands fa-facebook-messenger"></span>
                  </button>
                  <button className="btn btn-phoenix-primary btn-icon me-2">
                    <span className="fa-brands fa-twitter text-info"></span>
                  </button>
                  <button className="btn btn-phoenix-primary btn-icon me-2">
                    <span className="fa-solid fa-envelope text-danger"></span>
                  </button>
                  <button className="btn btn-phoenix-primary btn-icon me-2">
                    <span className="fa-brands fa-linkedin-in text-info"></span>
                  </button>
                </div>
                {/* <button
                  className="btn btn-phoenix-primary w-100 mb-5 mb-xl-0"
                  type="button"
                >
                  Load more
                </button> */}
              </div>
              <div className="col-xl-4">
                <h3 className="mb-5 mb-xl-4">Owned by</h3>
                <div className="row g-2 mb-6 align-items-center">
                  <div className="col-auto">
                    <img
                      className="rounded img-fluid"
                      src="https://img.freepik.com/premium-vector/draw-funny-kawaii-japan-tradition-sweet-mochi-vector-illustration-japanese-asian-traditional-food-cooking-menu-concept-doodle-cartoon-style_564312-840.jpg"
                      alt="..."
                      width="40"
                      height="40"
                    />
                  </div>
                  <div className="col-sm-auto flex-1">
                    <a
                      className="mb-0 text-primary fw-semi-bold lh-sm"
                      href="#!"
                    >
                      ???????????????1020????????????
                    </a>
                  </div>

                  <div className="col-sm-auto">
                    <button
                      className="btn btn-phoenix-primary px-3"
                      type="button"
                    >
                      <span className="fa-solid fa-user-plus me-2"></span>Follow
                    </button>
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="mb-5 mb-xl-4">Location </h3>
                  {/* <div className="googlemap mb-3 mb-xl-4 location-map border" data-googlemap="data-googlemap" data-gmap="data-gmap" data-latlng="40.7228022,-74.0020158" data-scrollwheel="false" data-zoom="15">
                    <div className="marker-content py-3">
                      <h5>Google map </h5>
                      <p className="mb-0">A nice template for your site.<br />Customize it as you want.</p>
                    </div>
                  </div> */}
                 s {/* <Map/> */}
                  <div className="row flex-between-center g-0 gy-3">
                    <div className="col-12 col-sm-auto me-1">
                      <div className="d-flex">
                        <h3 className="fw-bold text-1000 fs-0 me-2 mb-0">
                          James Tiberius Auditorium
                        </h3>
                        <p className="mb-0 text-1000 fs--1">Vancouver</p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-auto col-xl-12">
                      <button
                        className="btn btn-phoenix-primary w-100"
                        type="button"
                      >
                        <span className="fa-solid fa-route me-2"></span>Get
                        directions
                      </button>
                    </div>
                  </div>
                </div>
                <h3 className="mb-3">Tags</h3>
                <div className="d-flex flex-wrap pb-7 border-bottom">
                  <span className="badge badge-tag me-2 mb-2">Music</span>
                  <span className="badge badge-tag me-2 mb-2">CONCERT</span>
                  <span className="badge badge-tag mb-2">
                    Greatest show on earth
                  </span>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer position-absolute">
            <div className="row g-0 justify-content-between align-items-center h-100">
              <div className="col-12 col-sm-auto text-center">
                <p className="mb-0 mt-2 mt-sm-0 text-900">
                  Thank you for creating with Phoenix
                  <span className="d-none d-sm-inline-block"></span>
                  <span className="d-none d-sm-inline-block mx-1">|</span>
                  <br className="d-sm-none" />
                  2023 &copy;
                  <a className="mx-1" href="https://themewagon.com">
                    Themewagon
                  </a>
                </p>
              </div>
              <div className="col-12 col-sm-auto text-center">
                <p className="mb-0 text-600">v1.8.0</p>
              </div>
            </div>
          </footer>
        </div>
      </Layout>
    </>
  );
}
export default withAuth(Shop);
