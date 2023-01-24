import Head from "next/head";
import Link from "next/link";

export default function Signup() {
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
                      src="assets/img/icons/logo.png"
                      alt="phoenix"
                      width="58"
                    />
                  </div>
                </a>
                <div class="text-center mb-7">
                  <h3 class="text-1000">サインアップ</h3>
                  <p class="text-700">今すぐアカウントを作成してください</p>
                </div>
                <button class="btn btn-phoenix-secondary w-100 mb-3">
                  <span class="fab fa-google text-danger me-2 fs--1"></span>Sign
                  up with google
                </button>
                <button class="btn btn-phoenix-secondary w-100">
                  <span class="fab fa-facebook text-primary me-2 fs--1"></span>
                  Sign up with facebook
                </button>
                <div class="position-relative mt-4">
                  <hr class="bg-200" />
                  <div class="divider-content-center">or use email</div>
                </div>
                <form>
                  <div class="mb-3 text-start">
                    <label class="form-label" for="name">
                      Name
                    </label>
                    <input
                      class="form-control"
                      id="name"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div class="mb-3 text-start">
                    <label class="form-label" for="email">
                      Email address
                    </label>
                    <input
                      class="form-control"
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div class="row g-3 mb-3">
                    <div class="col-md-6">
                      <label class="form-label" for="password">
                        Password
                      </label>
                      <input
                        class="form-control form-icon-input"
                        id="password"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label" for="confirmPassword">
                        Confirm Password
                      </label>
                      <input
                        class="form-control form-icon-input"
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      id="termsService"
                      type="checkbox"
                    />
                    <label
                      class="form-label fs--1 text-none"
                      for="termsService"
                    >
                      I accept the <a href="#!">terms </a>and{" "}
                      <a href="#!">privacy policy</a>
                    </label>
                  </div>
                  <button class="btn btn-primary w-100 mb-3">
                    サインアップ
                  </button>
                  <div class="text-center">
                    <Link class="fs--1 fw-bold" href="/sign-in">
                      Sign in to an existing account
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
