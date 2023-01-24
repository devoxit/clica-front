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
              <div class="col-sm-10 col-md-8 col-lg-5 col-xxl-4">
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
                <div class="px-xxl-7">
                  <div class="text-center mb-6">
                    <h4 class="text-1000">パスワードをお忘れですか？</h4>
                    <p class="text-700 mb-5">
                      以下にメールアドレスを入力してください。リセットリンクをお送りします
                    </p>
                    <form class="d-flex align-items-center mb-5">
                      <input
                        class="form-control flex-1"
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                      <button class="btn btn-primary ms-2">
                        Send<span class="fas fa-chevron-right ms-2"></span>
                      </button>
                    </form>
                    <a class="fs--1 fw-bold" href="#!">
                      Still having problems?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
