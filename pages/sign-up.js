import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Http } from "@/webservice/http.module";
import Head from "next/head";
import Link from "next/link";
import { Row, Col, Button } from "react-bootstrap";
import { MultiStepProgressBar } from "../components/MultiStepProgressBar";

const http = new Http("13.208.124.247:8080/api/v1/signup", false);
const errors = [
  "Error sending phone number",
  "Error verifying phone number",
  "Error send email",
  "Error verifying email",
  "Error submitting data",
];

function UserInfo({ email, phone, password, onSubmit }) {
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setDisabled(true);
    onSubmit();
  };
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "16px",
        lineHeight: 1.5,
        margin: "5px 30px",
      }}
    >
      <p style={{ marginBottom: "10px" }}>
        Email:{" "}
        <span style={{ fontWeight: "bold", color: "indigo" }}>{email}</span>
      </p>
      <p style={{ marginBottom: "10px" }}>
        Phone:{" "}
        <span style={{ fontWeight: "bold", color: "indigo" }}>{phone}</span>
      </p>
      <p style={{ marginBottom: "10px" }}>
        Password:{" "}
        <span style={{ fontWeight: "bold", color: "indigo" }}>{password}</span>
      </p>

      <div className="d-flex justify-content-end">
        <Button
          disabled={disabled}
          onClick={handleClick}
          className="w-20 mt-3 text-right button__next"
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}

export default function Signup() {
  const router = useRouter();

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
          break;

        case 2:
          var response = await http.request("post", `/verify/phone`, {
            code: phoneCode,
          });
          var result = response.data;
          setSuccess(result.success);

          setStep(3);
          break;

        case 3:
          var response = await http.request("post", `/send/email`, {
            subject: email,
          });
          var result = response.data;
          setSuccess(result.success);

          setStep(4);
          break;
        case 4:
          var response = await http.request("post", `/verify/email`, {
            code: emailCode,
          });
          var result = response.data;
          setSuccess(result.success);

          setStep(5);
          break;
      }
    } catch (err) {
      // console.log(err)
      setError(errors[step - 1]);
    }
  };

  const handleConfirm = async () => {
    // Send form data to backend
    var response = await http.request("post", `/`, { secret: password });
    var result = response.data;
    result.success && setSuccess(result.success);
    setTimeout(() => {
      router.push("/sign-in");
    }, 0);
    setSuccess(result.success);
    localStorage.removeItem("rg_t");
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
                          {/* {item.label} */} Enter You Phone Number{" "}
                        </label>
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
                          {/* {item.label} */} Enter The code In Your SMS{" "}
                        </label>
                        <input
                          class="form-control form-icon-input"
                          type="text"
                          placeholder="Phone code"
                          value={phoneCode}
                          onChange={(e) => setPhoneCode(e.target.value)}
                        />

                        <Button
                          type="submit"
                          className="w-100 mt-3 button__next"
                          disabled={phoneCode === ""}
                        >
                          Verify Phone
                        </Button>
                      </form>
                    </div>
                  )}
                  {step === 3 && (
                    <form onSubmit={handleSubmit}>
                      <label class="form-label" htmlFor="email">
                        Enter You Email
                      </label>
                      <input
                        class="form-control form-icon-input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Button
                        type="submit"
                        className="w-100 mt-3 button__next"
                        disabled={email === ""}
                      >
                        Send Email
                      </Button>
                    </form>
                  )}
                  {step === 4 && (
                    <form onSubmit={handleSubmit}>
                      <input
                        class="form-control form-icon-input"
                        type="text"
                        placeholder="Email code"
                        value={emailCode}
                        onChange={(e) => setEmailCode(e.target.value)}
                      />

                      <Button
                        type="submit"
                        className="w-100 mt-3 button__next"
                        disabled={emailCode === ""}
                      >
                        Verify Phone
                      </Button>
                    </form>
                  )}
                  {step === 5 && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setStep(6);
                      }}
                    >
                      <input
                        class="form-control form-icon-input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />

                      <Button
                        type="submit"
                        className="w-100 mt-3 button__next"
                        disabled={password === ""}
                      >
                        Send Password
                      </Button>
                    </form>
                  )}

                  {success ? (
                    <div className="success-page">
                      <div className="text-center py-4">
                        <h2 className="text-3xl font-bold mb-4 text-green-600">
                          Registration successful!
                        </h2>
                        <p>
                          You will be redirected to Sign In page in 5 seconds.
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
                    step === 6 && (
                      <UserInfo
                        email={email}
                        phone={phone}
                        password={"************"}
                        onSubmit={handleConfirm}
                      />
                    )
                  )}

                  {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
