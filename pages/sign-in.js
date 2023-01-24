import Head from "next/head";
import Link from "next/link";

export default function Signin() {
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

      <main class="main" id="top">
        <div class="container-fluid px-0">
          <div class="container">
            <div class="row flex-center min-vh-100 py-5">
              <div class="col-sm-10 col-md-8 col-lg-5 col-xl-5 col-xxl-3">
                <a
                  class="d-flex flex-center text-decoration-none mb-4"
                  href="../../../index.html"
                >
                  <div class="d-flex align-items-center fw-bolder fs-5 d-inline-block">
                    <img
                      src="../../../assets/img/icons/logo.png"
                      alt="phoenix"
                      width="58"
                    />
                  </div>
                </a>
                <div class="text-center mb-7">
                  <h3 class="text-1000">サインイン</h3>
                  <p class="text-700">Get access to your account</p>
                </div>
                <button class="btn btn-phoenix-secondary w-100 mb-3">
                  <span class="fab fa-google text-danger me-2 fs--1"></span>Sign
                  in with google
                </button>
                <button class="btn btn-phoenix-secondary w-100">
                  <span class="fab fa-facebook text-primary me-2 fs--1"></span>
                  Sign in with facebook
                </button>
                <div class="position-relative">
                  <hr class="bg-200 mt-5 mb-4" />
                  <div class="divider-content-center">or use email</div>
                </div>
                <div class="mb-3 text-start">
                  <label class="form-label" for="email">
                    Email address
                  </label>
                  <div class="form-icon-container">
                    <input
                      class="form-control form-icon-input"
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                    />
                    <span class="fas fa-user text-900 fs--1 form-icon"></span>
                  </div>
                </div>
                <div class="mb-3 text-start">
                  <label class="form-label" for="password">
                    Password
                  </label>
                  <div class="form-icon-container">
                    <input
                      class="form-control form-icon-input"
                      id="password"
                      type="password"
                      placeholder="Password"
                    />
                    <span class="fas fa-key text-900 fs--1 form-icon"></span>
                  </div>
                </div>
                <div class="row flex-between-center mb-7">
                  <div class="col-auto">
                    <div class="form-check mb-0">
                      <input
                        class="form-check-input"
                        id="basic-checkbox"
                        type="checkbox"
                        checked="checked"
                      />
                      <label class="form-check-label mb-0" for="basic-checkbox">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div class="col-auto">
                    <Link class="fs--1 fw-bold" href="/forgot-password">
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <button class="btn btn-primary w-100 mb-3">Sign In</button>
                <div class="text-center">
                  <Link class="fs--1 fw-bold" href="/sign-up">
                    Create an account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
