import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { MultiStepProgressBar } from "../components/StepsComponents/MultiStepProgressBar";
import { MultiStepForm } from "../components/StepsComponents/MultiStepForm";
import { steps } from "../utils/steps";

export default function Signup() {
  const [index, setIndex] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const totalPagesCount = steps?.length || 0;
  // numbered by pages. for exampe { 1: [{"key" : "value"}], 2:["key": "value"], 3: []}
  const [pagesAnswers, setPagesAnswers] = useState({});

  const prevButton = () => {
    if (index > 1) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextButton = () => {
    if (index - 6) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      // clear the form on submit
      setPagesAnswers({});
      setSubmitted(true);
    }
  };

  const onPageAnswerUpdate = (step, answersObj) => {
    setPagesAnswers({ ...pagesAnswers, [step]: answersObj });
  };

  const handleStart = () => {
    setIndex(1);
    setSubmitted(false);
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

      <main class="main" id="top">
        <div class="container-fluid px-0">
          <div class="container">
            <div class="row flex-center min-vh-100 py-5">
              <div class="col-sm-10 col-md-8 col-lg-5 col-xl-5 col-xxl-3">
                <Link
                  class="d-flex flex-center text-decoration-none mb-4"
                  href="/"
                >
                  <div class="d-flex align-items-center fw-bolder fs-5 d-inline-block">
                    <img
                      src="assets/img/icons/logo.png"
                      alt="phoenix"
                      width="58"
                    />
                  </div>
                </Link>

                <div class="text-center mb-7">
                  <h3 class="text-1000">サインアップ</h3>
                  <p class="text-700">今すぐアカウントを作成してください</p>
                </div>
                <Row className="m-5">
                  <Col className="align-self-center">
                    <MultiStepProgressBar step={index} />
                  </Col>
                </Row>
                <div class="position-relative mt-4">
                  <hr class="bg-200" />
                </div>
                {submitted ? (
                  <p className="text-center">
                    Your have been successfuly registered!
                  </p>
                ) : (
                  <form>
                    <MultiStepForm
                      list={steps}
                      step={index}
                      onPageUpdate={onPageAnswerUpdate}
                      pagesAnswers={pagesAnswers}
                    />
                    <Button onClick={nextButton} className="w-100 mt-3">
                      {index == totalPagesCount ? "Confirmed" : "Next"}
                    </Button>

                    {/* <div class="mb-3 text-start">
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
                    </button> */}

                    {/* <div class="text-center">
                      <Link class="fs--1 fw-bold" href="/sign-in">
                        Sign in to an existing account
                      </Link>
                    </div> */}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
  {
    /* return (
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
                <Link
                  class="d-flex flex-center text-decoration-none mb-4"
                  href="/"
                >
                  <div class="d-flex align-items-center fw-bolder fs-5 d-inline-block">
                    <img
                      src="assets/img/icons/logo.png"
                      alt="phoenix"
                      width="58"
                    />
                  </div>
                </Link>

                <div class="text-center mb-7">
                  <h3 class="text-1000">サインアップ</h3>
                  <p class="text-700">今すぐアカウントを作成してください</p>
                </div>

                <div class="position-relative mt-4">
                  <hr class="bg-200" />
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
  ); */
  }
}
