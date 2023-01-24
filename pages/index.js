import Head from "next/head";   
import Link from "next/link";
import Layout from "../components/Layout";
export default function Home() {

  return (
    <>
       <Layout>

      
      
     <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
    
     
    
          <div class="content">
            <div class="pb-9">
              <div class="row gy-3 gx-5 gx-xxl-6">
                <div class="col-12 order-0">
                  <div class="card cover-image mb-5">
                    <div
                      class="card-header hover-actions-trigger d-flex justify-content-center align-items-end position-relative mb-7 mb-xxl-0"
                      style={{ minHeight: "214px" }}
                    >
                      <div
                        class="bg-holder"
                        style={{
                          backgroundImage:
                            "url(../../assets/img/generic/cover-photo.png)",
                        }}
                      ></div>
                      <input
                        class="d-none"
                        id="upload-cover-image"
                        type="file"
                      />
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
                          src="../../assets/img/team/9.png"
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
                            <h2 class="me-2">Erza Bridgest</h2>
                            <span class="fw-semi-bold fs-1 text-1100">
                              u/hansolo
                            </span>
                          </div>
                          <div class="mb-5">
                            <div class="d-md-flex align-items-center">
                              <div class="d-flex align-items-center">
                                <span class="fa-solid fa-user-group fs--1 text-700 me-2 me-lg-1 me-xl-2"></span>
                                <a class="text-decoration-none" href="#!">
                                  <span class="fs-1 fw-bold text-600 hover-text-1100">
                                    1297{" "}
                                    <span class="fw-semi-bold ms-1 me-4">
                                      Followers
                                    </span>
                                  </span>
                                </a>
                              </div>
                              <div class="d-flex align-items-center">
                                <span class="fa-solid fa-user-check fs--1 text-700 me-2 me-lg-1 me-xl-2"></span>
                                <a class="text-decoration-none" href="#!">
                                  <span class="fs-1 fw-bold text-600 hover-text-1100">
                                    3971{" "}
                                    <span class="fw-semi-bold ms-1 me-4">
                                      Following
                                    </span>
                                  </span>
                                </a>
                              </div>
                              <div class="d-flex align-items-center">
                                <span class="fa-solid fa-location-dot fs--1 text-700 me-2 me-lg-1 me-xl-2"></span>
                                <a class="text-decoration-none" href="#!">
                                  <span class="fs-1 fw-semi-bold text-600 hover-text-1100">
                                    Vancouver, Lothal
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <p class="fs-2 text-800">
                            “Whenever you find yourself on the side of the
                            majority, it is time to pause and reflect.”
                          </p>
                        </div>
                        <div class="col-auto">
                          <div class="d-flex"></div>
                          <button class="btn btn-phoenix-secondary me-2 mb-2 mb-sm-0 lh-1">
                            <span class="fa-solid fa-chevron-down me-2"></span>{" "}
                            More
                          </button>
                          <button class="btn btn-phoenix-primary me-2 mb-2 mb-sm-0 lh-1">
                            <span class="fa-solid fa-message me-2"></span>Send
                            Message
                          </button>
                          <button class="btn btn-primary mb-2 mb-sm-0 lh-1">
                            <span class="fa-solid fa-user-plus me-2"></span>
                            Follow Request
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <div class="mb-9">
                    <div class="mb-5">
                      <div class="card mb-4 overflow-hidden">
                        <div class="card-body">
                          <div class="d-flex align-items-center mb-3">
                            <div class="avatar avatar-xl status-online me-2">
                              <img
                                class="rounded-circle border border-2 border-white"
                                src="../../assets/img/team/9.png"
                                alt="alt"
                              />
                            </div>
                            <div class="flex-1">
                              <a
                                class="fw-bold mb-0 text-decoration-none text-black"
                                href="#!"
                              >
                                Erza Bridgest
                              </a>
                              <p class="fs--2 mb-0 text-600 fw-semi-bold">
                                35 mins ago
                                <span
                                  class="fa-solid fa-circle text-300"
                                  data-fa-transform="shrink-10 down-2"
                                ></span>
                                Mustafar, British Columbia
                                <span
                                  class="fa-solid fa-circle text-300"
                                  data-fa-transform="shrink-10 down-2"
                                ></span>
                                <span class="fa-solid fa-earth-americas text-900"></span>
                              </p>
                            </div>
                            <div class="btn-reveal-trigger">
                              <button
                                class="btn btn-sm btn dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span class="fas fa-ellipsis-h"></span>
                              </button>
                              <div class="dropdown-menu dropdown-menu-end py-2">
                                <a class="dropdown-item" href="#!">
                                  Edit
                                </a>
                                <a class="dropdown-item text-danger" href="#!">
                                  Delete
                                </a>
                                <a class="dropdown-item" href="#!">
                                  Download
                                </a>
                                <a class="dropdown-item" href="#!">
                                  Report abuse
                                </a>
                              </div>
                            </div>
                          </div>
                          <p class="text-800">
                            Melancholy is sadness that has taken on lightness.
                          </p>
                          <div class="row g-1 mb-5 border-bottom pb-4">
                            <div class="col-3">
                              <a
                                href="../../assets/img/gallery/22.png"
                                data-gallery="gallery-posts-0"
                              >
                                <img
                                  class="rounded h-100 w-100"
                                  src="../../assets/img/gallery/22.png"
                                  alt="..."
                                />
                              </a>
                            </div>
                            <div class="col-3">
                              <a
                                href="../../assets/img/gallery/23.png"
                                data-gallery="gallery-posts-0"
                              >
                                <img
                                  class="rounded h-100 w-100"
                                  src="../../assets/img/gallery/23.png"
                                  alt="..."
                                />
                              </a>
                            </div>
                            <div class="col-6">
                              <a
                                href="../../assets/img/gallery/24.png"
                                data-gallery="gallery-posts-0"
                              >
                                <img
                                  class="rounded h-100 w-100"
                                  src="../../assets/img/gallery/24.png"
                                  alt="..."
                                />
                              </a>
                            </div>
                          </div>
                          <div class="d-flex">
                            <button
                              class="btn btn-link p-0 me-3 fs--2 fw-bolder"
                              type="button"
                            >
                              <span class="fa-solid fa-heart me-1"></span>345
                              Likes
                            </button>
                            <button
                              class="btn btn-link text-900 p-0 fs--2 me-3 fw-bolder"
                              type="button"
                            >
                              <span class="fa-solid fa-comment me-1"></span>45
                              Comments
                            </button>
                            <button
                              class="btn btn-link text-900 p-0 fs--2 me-2 fw-bolder"
                              type="button"
                            >
                              <span class="fa-solid fa-share me-1"></span>56
                              shares
                            </button>
                          </div>
                        </div>
                        <div class="bg-100 ps-2 pe-3 py-3 border-top">
                          <div class="d-flex align-items-start ps-3">
                            <div class="avatar avatar-m status-online me-3">
                              <img
                                class="rounded-circle"
                                src="../../assets/img/team/30.png"
                                alt="alt"
                              />
                            </div>
                            <div class="flex-1">
                              <div class="d-flex align-items-center">
                                <a
                                  class="fw-bold mb-0 text-decoration-none text-black"
                                  href="#!"
                                >
                                  Mamur Fechetti
                                </a>
                                <span class="text-600 fw-semi-bold fs--2 ms-2">
                                  35 mins ago
                                </span>
                              </div>
                              <p class="mb-0">
                                How long did it take to create this? It appears
                                that you quickly produced the second one.
                              </p>
                              <button
                                class="btn btn-link p-0 text-900 text-decoration-none fw-bolder mb-2"
                                type="button"
                              >
                                <span class="fa-solid fa-reply fs--2 me-1"></span>
                                <span class="d-inline-block fw-bold fs--2">
                                  Reply
                                </span>
                              </button>
                              <div class="d-flex align-items-start ps-3 mb-3">
                                <div class="avatar avatar-m status-online me-3">
                                  <img
                                    class="rounded-circle"
                                    src="../../assets/img/team/62.png"
                                    alt="alt"
                                  />
                                </div>
                                <div class="flex-1">
                                  <div class="d-flex align-items-center">
                                    <a
                                      class="fw-bold mb-0 text-decoration-none text-black"
                                      href="#!"
                                    >
                                      Zingko Kudobum
                                    </a>
                                    <span class="text-600 fw-semi-bold fs--2 ms-2">
                                      5 mins ago
                                    </span>
                                  </div>
                                  <p class="mb-0">
                                    I am so clever that sometimes I don't
                                    understand a single word of what I am
                                    saying.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="d-flex align-items-center ps-3">
                            <div class="avatar avatar-m me-3">
                              <img
                                class="rounded-circle"
                                src="../../assets/img/team/9.png"
                                alt="alt"
                              />
                            </div>
                            <div class="flex-1">
                              <input
                                class="form-control"
                                type="text"
                                placeholder="Add comment"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-5">
                      <div class="card mb-4 overflow-hidden">
                        <div class="card-body">
                          <div class="d-flex align-items-center mb-3">
                            <div class="avatar avatar-xl status-online me-2">
                              <img
                                class="rounded-circle border border-2 border-white"
                                src="../../assets/img/team/9.png"
                                alt="alt"
                              />
                            </div>
                            <div class="flex-1">
                              <a
                                class="fw-bold mb-0 text-decoration-none text-black"
                                href="#!"
                              >
                                Erza Bridgest
                              </a>
                              <p class="fs--2 mb-0 text-600 fw-semi-bold">
                                3 days ago
                                <span
                                  class="fa-solid fa-circle text-300"
                                  data-fa-transform="shrink-10 down-2"
                                ></span>
                                Lothal, USA
                                <span
                                  class="fa-solid fa-circle text-300"
                                  data-fa-transform="shrink-10 down-2"
                                ></span>
                                <span class="fa-solid fa-earth-americas text-900"></span>
                              </p>
                            </div>
                            <div class="btn-reveal-trigger">
                              <button
                                class="btn btn-sm btn dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span class="fas fa-ellipsis-h"></span>
                              </button>
                              <div class="dropdown-menu dropdown-menu-end py-2">
                                <a class="dropdown-item" href="#!">
                                  Edit
                                </a>
                                <a class="dropdown-item text-danger" href="#!">
                                  Delete
                                </a>
                                <a class="dropdown-item" href="#!">
                                  Download
                                </a>
                                <a class="dropdown-item" href="#!">
                                  Report abuse
                                </a>
                              </div>
                            </div>
                          </div>
                          <p class="text-800">
                            A guy enters a bakery while carrying a 25-pound
                            haddock. He asks the baker if he makes fish cakes.
                            The rather perplexed baker responds in the negative.
                            The guy responds &quot;That's unfortunate.Today is
                            his birthday&quot;
                          </p>
                          <div class="d-flex">
                            <button
                              class="btn btn-link p-0 me-3 fs--2 fw-bolder"
                              type="button"
                            >
                              <span class="fa-solid fa-heart me-1"></span>23
                              Likes
                            </button>
                            <button
                              class="btn btn-link text-900 p-0 fs--2 me-3 fw-bolder"
                              type="button"
                            >
                              <span class="fa-solid fa-comment me-1"></span>9
                              Comments
                            </button>
                            <button
                              class="btn btn-link text-900 p-0 fs--2 me-2 fw-bolder"
                              type="button"
                            >
                              <span class="fa-solid fa-share me-1"></span>3
                              shares
                            </button>
                          </div>
                        </div>
                        <div class="bg-100 ps-2 pe-3 py-3 border-top">
                          <div class="d-flex align-items-center ps-3">
                            <div class="avatar avatar-m me-3">
                              <img
                                class="rounded-circle"
                                src="../../assets/img/team/20.png"
                                alt="alt"
                              />
                            </div>
                            <div class="flex-1">
                              <input
                                class="form-control"
                                type="text"
                                placeholder="Add comment"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-5">
                      <div class="card mb-4 overflow-hidden">
                        <div class="card-body">
                          <div class="d-flex align-items-center mb-3">
                            <div class="avatar avatar-xl status-online me-2">
                              <img
                                class="rounded-circle border border-2 border-white"
                                src="../../assets/img/team/9.png"
                                alt="alt"
                              />
                            </div>
                            <div class="flex-1">
                              <a
                                class="fw-bold mb-0 text-decoration-none text-black"
                                href="#!"
                              >
                                Zingko Kudobum
                              </a>
                              <p class="fs--2 mb-0 text-600 fw-semi-bold">
                                35 mins ago
                                <span
                                  class="fa-solid fa-circle text-300"
                                  data-fa-transform="shrink-10 down-2"
                                ></span>
                                Consett, UK
                                <span
                                  class="fa-solid fa-circle text-300"
                                  data-fa-transform="shrink-10 down-2"
                                ></span>
                                <span class="fa-solid fa-earth-americas text-900"></span>
                              </p>
                            </div>
                            <div class="btn-reveal-trigger">
                              <button
                                class="btn btn-sm btn dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-boundary="window"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-bs-reference="parent"
                              >
                                <span class="fas fa-ellipsis-h"></span>
                              </button>
                              <div class="dropdown-menu dropdown-menu-end py-2">
                                <a class="dropdown-item" href="#!">
                                  Edit
                                </a>
                                <a class="dropdown-item text-danger" href="#!">
                                  Delete
                                </a>
                                <a class="dropdown-item" href="#!">
                                  Download
                                </a>
                                <a class="dropdown-item" href="#!">
                                  Report abuse
                                </a>
                              </div>
                            </div>
                          </div>
                          <p class="text-800">
                            Fear can hold you prisoner. Hope can set you free. -
                            King
                          </p>
                          <div class="row g-1 mb-5 border-bottom pb-4">
                            <div class="col-3">
                              <a
                                href="../../assets/img/gallery/25.png"
                                data-gallery="gallery-posts-2"
                              >
                                <img
                                  class="rounded h-100 w-100"
                                  src="../../assets/img/gallery/25.png"
                                  alt="..."
                                />
                              </a>
                            </div>
                            <div class="col-3">
                              <a
                                href="../../assets/img/gallery/26.png"
                                data-gallery="gallery-posts-2"
                              >
                                <img
                                  class="rounded h-100 w-100"
                                  src="../../assets/img/gallery/26.png"
                                  alt="..."
                                />
                              </a>
                            </div>
                          </div>
                          <div class="d-flex">
                            <button
                              class="btn btn-link p-0 me-3 fs--2 fw-bolder"
                              type="button"
                            >
                              <span class="fa-solid fa-heart me-1"></span>345
                              Likes
                            </button>
                            <button
                              class="btn btn-link text-900 p-0 fs--2 me-3 fw-bolder"
                              type="button"
                            >
                              <span class="fa-solid fa-comment me-1"></span>45
                              Comments
                            </button>
                            <button
                              class="btn btn-link text-900 p-0 fs--2 me-2 fw-bolder"
                              type="button"
                            >
                              <span class="fa-solid fa-share me-1"></span>56
                              shares
                            </button>
                          </div>
                        </div>
                        <div class="bg-100 ps-2 pe-3 py-3 border-top">
                          <div class="d-flex align-items-start ps-3">
                            <div class="avatar avatar-m status-online me-3">
                              <img
                                class="rounded-circle"
                                src="../../assets/img/team/14.png"
                                alt="alt"
                              />
                            </div>
                            <div class="flex-1">
                              <div class="d-flex align-items-center">
                                <a
                                  class="fw-bold mb-0 text-decoration-none text-black"
                                  href="#!"
                                >
                                  Sutanuka Gomez
                                </a>
                                <span class="text-600 fw-semi-bold fs--2 ms-2">
                                  35 mins ago
                                </span>
                              </div>
                              <p class="mb-0">
                                Time is the best teacher; Unfortunately it kills
                                all its students!
                              </p>
                              <button
                                class="btn btn-link p-0 text-900 text-decoration-none fw-bolder mb-2"
                                type="button"
                              >
                                <span class="fa-solid fa-reply fs--2 me-1"></span>
                                <span class="d-inline-block fw-bold fs--2">
                                  Reply
                                </span>
                              </button>
                              <div class="d-flex align-items-start ps-3 mb-3">
                                <div class="avatar avatar-m status-online me-3">
                                  <img
                                    class="rounded-circle"
                                    src="../../assets/img/team/27.png"
                                    alt="alt"
                                  />
                                </div>
                                <div class="flex-1">
                                  <div class="d-flex align-items-center">
                                    <a
                                      class="fw-bold mb-0 text-decoration-none text-black"
                                      href="#!"
                                    >
                                      Zingko Kudobum
                                    </a>
                                    <span class="text-600 fw-semi-bold fs--2 ms-2">
                                      5 mins ago
                                    </span>
                                  </div>
                                  <p class="mb-0">
                                    If you’re too open-minded, your brains will
                                    fall out.!
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="d-flex align-items-center ps-3">
                            <div class="avatar avatar-m me-3">
                              <img
                                class="rounded-circle"
                                src="../../assets/img/team/14.png"
                                alt="alt"
                              />
                            </div>
                            <div class="flex-1">
                              <input
                                class="form-control"
                                type="text"
                                placeholder="Add comment"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-center">
                    <a class="btn btn-link fs-0 p-0" href="#!">
                      Load more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <footer class="footer position-absolute">
              <div class="row g-0 justify-content-between align-items-center h-100">
                <div class="col-12 col-sm-auto text-center">
                  <p class="mb-0 mt-2 mt-sm-0 text-900">
                    Thank you for visiting CliCa
                    <span class="d-none d-sm-inline-block"></span>
                    <span class="d-none d-sm-inline-block mx-1">|</span>
                    <br class="d-sm-none" />
                    2023 &copy;
                    <a class="mx-1" href="https://themewagon.com">
                      Themewagon
                    </a>
                  </p>
                </div>
                <div class="col-12 col-sm-auto text-center">
                  <p class="mb-0 text-600">v1.8.0</p>
                </div>
              </div>
            </footer>
          </div>
      
        </Layout>
    </>
  );
}