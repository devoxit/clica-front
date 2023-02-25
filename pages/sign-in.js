import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import LanguageSwitcher from '../components/SelectLanguage/LanguageSwitcher';
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { Http } from "@/webservice/http.module";

const http = new Http("13.208.124.247:8080/api/v1/auth", false);
const errors = [
  "Error sending phone number",
  "Error verifying phone number",
  "Error send email",
  "Error verifying email",
  "Error submitting data",
];

function Signin({ t }) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await http.request("post", "/signin", {
        email: email,
        secret: password,
      });
      const result = response;
      result.success && setSuccess(result.success);
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (err) {
      setError(JSON.stringify(err));
    }
  };

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

      <main className="main" id="top">
        <div className="container-fluid px-0">
          <LanguageSwitcher />
          <div className="container">
            <div className="row flex-center min-vh-100 py-5">
              <div className="col-sm-10 col-md-8 col-lg-5 col-xl-5 col-xxl-3">
                <a
                  className="d-flex flex-center text-decoration-none mb-4"
                  href="../../../index.html"
                >
                  <div className="d-flex align-items-center fw-bolder fs-5 d-inline-block">
                    <img
                      src="../../../assets/img/icons/logo.png"
                      alt="phoenix"
                      width="58"
                    />
                  </div>
                </a>
                <div className="text-center mb-7">
                  <h3 className="text-1000">{t("signIn")} </h3>
                  <p className="text-700">Get access to your account</p>
                </div>

                <div className="position-relative">
                  <hr className="bg-200 mt-5 mb-4" />
                  <div className="divider-content-center"></div>
                </div>
                <div className="col-md-12">
                  {success ? (
                    <div className="success-page">
                      <div className="text-center py-4">
                        <h2 className="text-3xl font-bold mb-4 text-green-600">
                          Login successful!
                        </h2>
                        <p>
                          You will be redirected to the home page in 5 seconds.
                        </p>
                      </div>

                      <style jsx>{`
                        .success-page {
                          display: flex;
                          flex-direction: column;
                          align-items: center;
                          justify-content: center;
                        }
                      `}</style>
                    </div>
                  ) : (
                    <>
                      <form onSubmit={handleSubmit}>
                        <label className="form-label" htmlFor="email">
                          Email{" "}
                          {email == "" && (
                            <span style={{ color: "red" }}>*</span>
                          )}
                        </label>
                        <input
                          className="form-control form-icon-input"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />

                        <label className="form-label" htmlFor="password">
                          Password{" "}
                          {password == "" && (
                            <span style={{ color: "red" }}>*</span>
                          )}
                        </label>
                        <input
                          className="form-control form-icon-input"
                          type="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button
                          type="submit"
                          className="w-100 mt-3 button__next"
                          disabled={email === "" || password === ""}
                        >
                          Sign In
                        </Button>
                      </form>
                      <div className="row flex-between-center mb-7">
                        <div className="col-auto">
                          <Link
                            className="fs--1 fw-bold"
                            href="/forgot-password"
                          >
                            Forgot Password?
                          </Link>
                        </div>
                      </div>
                      <div className="text-center">
                        <Link className="fs--1 fw-bold" href="/sign-up">
                          Create an account
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default withTranslation()(Signin);
