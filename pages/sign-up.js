import React, { useState, useEffect } from "react";
import Router from "next/router";
import { Http } from "@/webservice/http.module";

import Head from "next/head";
import Link from "next/link";
//import { ProgressBar } from "react-step-progress-bar";
// import Script from "next/script";
import { Row, Col, Button } from "react-bootstrap";
import { MultiStepProgressBar } from "../components/StepsComponents/MultiStepProgressBar";
// import { MultiStepForm } from "../components/StepsComponents/MultiStepForm";
// import { steps } from "../utils/steps";

const http = new Http("13.208.124.247:8080/api/v1/signup", false)
const errors = ["Error sending phone number",
  "Error verifying phone number",
  "Error send email",
  "Error verifying email",
  "Error submitting data"]

export default function Signup() {
  const [isLoading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [email, setEmail] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  console.log("success", success, "loading", isLoading);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      switch (step) {
        case 1:
          var response = await http.request("post", `/send/phone`, {
            subject: phone,
          });
          var result = response.data;
          setSuccess(result.success);

          setStep(2);
          break

        case 2:
          var response = await http.request("post", `/verify/phone`, {
            code: phoneCode,
          });
          var result = response.data;
          setSuccess(result.success);

          setStep(3);
          break

        case 3:
          var response = await http.request("post", `/send/email`, { subject: email });
          var result = response.data;
          setSuccess(result.success);

          setStep(4);
          break
        case 4:
          var response = await http.request("post", `/verify/email`, { code: emailCode });
          var result = response.data;
          setSuccess(result.success);

          setStep(5);
          break

        case 5:
          var response = await http.request("post", `/`, { secret: password });
          var result = response.data;
          setSuccess(result.success);
          localStorage.removeItem("rg_t");
          setStep(6);
          break
      }
    } catch (err) {
      // console.log(err)
      setError(errors[step - 1]);
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
          <div className="container">
            <div className="row flex-center min-vh-100 py-5">
              <div className="col-sm-10 col-md-8 col-lg-5 col-xl-5 col-xxl-3">
                <Link
                  className="d-flex flex-center text-decoration-none mb-4"
                  href="/"
                >
                  <div className="d-flex align-items-center fw-bolder fs-5 d-inline-block">
                    <img
                      src="assets/img/icons/logo.png"
                      alt="phoenix"
                      width="58"
                    />
                  </div>
                </Link>

                <div className="text-center mb-7">
                  <h3 className="text-1000">サインアップ</h3>
                  <p className="text-700">今すぐアカウントを作成してください</p>
                </div>

                <Row className="m-5">
                  <Col className="align-self-center">
                    <MultiStepProgressBar step={step} />
                  </Col>
                </Row>

                <div className="position-relative mt-4">
                  <hr className="bg-200" />
                </div>

                <div>
                  {step === 1 && (
                    <div class="col-md-12">

                      <form onSubmit={handleSubmit}>



                        <label class="form-label" htmlFor="code">
                          {/* {item.label} */} Enter You Phone Number            </label>
                        <input
                          class="form-control form-icon-input"

                          type="text"
                          placeholder="Phone number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}

                        />


                        <Button
                          type="submit"
                          className="w-100 mt-3 button__next"
                          disabled={phone === ""}
                        >
                          Send Phone
                        </Button>


                      </form>
                    </div>
                  )}
                  {step === 2 && (



                    <div class="col-md-12">

                      <form onSubmit={handleSubmit}>



                        <label class="form-label" htmlFor="code">
                          {/* {item.label} */} Enter The code In Your SMS          </label>
                        <input
                          class="form-control form-icon-input"

                          type="text"
                          placeholder="Phone code"
                          value={phoneCode}
                          onChange={(e) => setPhoneCode(e.target.value)}

                        />


                        <Button
                          type="submit"
                          className="w-100 mt-3"
                          disabled={phoneCode === ""}
                        >
                          Verify Phone
                        </Button>


                      </form>
                    </div>




                  )}
                  {step === 3 && (
                    <form onSubmit={handleSubmit}>
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button type="submit">Next</button>
                    </form>
                  )}
                  {step === 4 && (
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        placeholder="Email code"
                        value={emailCode}
                        onChange={(e) => setEmailCode(e.target.value)}
                      />
                      <button type="submit">Next</button>
                    </form>
                  )}
                  {step === 5 && (
                    <form onSubmit={handleSubmit}>
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button type="submit">Sign up</button>
                    </form>
                  )}
                  {step === 6 && <p>Signup successful!</p>}
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );

  {
    // const [index, setIndex] = useState(1);
    // const [submitted, setSubmitted] = useState(false);
    // const totalPagesCount = steps?.length || 0;
    // // numbered by pages. for exampe { 1: [{"key" : "value"}], 2:["key": "value"], 3: []}
    // const [pagesAnswers, setPagesAnswers] = useState({});
    // function isEmpty(obj) {
    //   return Object.keys(obj).length === 0;
    // }
    // const objec = isEmpty(pagesAnswers)
    //   ? "empty"
    //   : Object.values(pagesAnswers[Object.keys(pagesAnswers)[`${index}`]])[1];
    // console.log("signup", pagesAnswers);
    // console.log("signup", objec);
    // const prevButton = () => {
    //   if (index > 1) {
    //     setIndex((prevIndex) => prevIndex - 1);
    //   }
    // };
    // const test = () => {
    //   return pagesAnswers;
    // };
    // const nextButton = () => {
    //   if (index - 6) {
    //     setIndex((prevIndex) => prevIndex + 1);
    //   } else {
    //     // clear the form on submit
    //     setPagesAnswers({});
    //     setSubmitted(true);
    //   }
    // };
    // const onPageAnswerUpdate = (step, answersObj) => {
    //   console.log("answersObj", answersObj);
    //   setPagesAnswers({ ...pagesAnswers, [step]: answersObj });
    // };
    // const handleStart = () => {
    //   setIndex(1);
    //   setSubmitted(false);
    // };
    // {pagesAnswers[index - 1] == "3" && JSON.stringify(test())}
    // <Row className="m-5">
    //   <Col className="align-self-center">
    //     <MultiStepProgressBar step={index} />
    //   </Col>
    // </Row>
    // {submitted ? (
    //   <p className="text-center">
    //     Your have been successfuly registered!
    //   </p>
    // ) : (
    //   <form>
    //     <MultiStepForm
    //       list={steps}
    //       step={index}
    //       onPageUpdate={onPageAnswerUpdate}
    //       pagesAnswers={pagesAnswers}
    //     />
    //     <Button onClick={prevButton} disabled={index == 1}>Previous</Button>
    //     <Button
    //       onClick={nextButton}
    //       className="w-100 mt-3"
    //     >
    //       {index == totalPagesCount ? "Submit" : "Next"}
    //     </Button>
    //     <Button
    //       onClick={prevButton}
    //       disabled={index == 1}
    //       className="w-100 mt-3"
    //     >
    //       Previous
    //     </Button>
    //   </form>
    // )}
  }

  {
    /* 
    
    
    
    
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
          <div className="container">
            <div className="row flex-center min-vh-100 py-5">
              <div className="col-sm-10 col-md-8 col-lg-5 col-xl-5 col-xxl-3">
                <Link
                  className="d-flex flex-center text-decoration-none mb-4"
                  href="/"
                >
                  <div className="d-flex align-items-center fw-bolder fs-5 d-inline-block">
                    <img
                      src="assets/img/icons/logo.png"
                      alt="phoenix"
                      width="58"
                    />
                  </div>
                </Link>
   
                <div className="text-center mb-7">
                  <h3 className="text-1000">サインアップ</h3>
                  <p className="text-700">今すぐアカウントを作成してください</p>
                </div>
   
                <div className="position-relative mt-4">
                  <hr className="bg-200" />
                </div>
                <form>
                  <div className="mb-3 text-start">
                    <label className="form-label" for="name">
                      Name
                    </label>
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label className="form-label" for="email">
                      Email address
                      
                    </label>
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label" for="password">
                        Password
                      </label>
                      <input
                        className="form-control form-icon-input"
                        id="password"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" for="confirmPassword">
                        Confirm Password
                      </label>
                      <input
                        className="form-control form-icon-input"
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      id="termsService"
                      type="checkbox"
                    />
                    <label
                      className="form-label fs--1 text-none"
                      for="termsService"
                    >
                      I accept the <a href="#!">terms </a>and{" "}
                      <a href="#!">privacy policy</a>
                    </label>
                  </div>
                  <button className="btn btn-primary w-100 mb-3">
                    サインアップ
                  </button>
                  <div className="text-center">
                    <Link className="fs--1 fw-bold" href="/sign-in">
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
