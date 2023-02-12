import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [email, setEmail] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (step === 1) {
        const response = await axios.post("/api/v1/signup/send/phone", {
          phone,
        });

        if (response.data.success) {
          setToken(response.data.token);
          setStep(2);
        } else {
          setError("Something went wrong");
        }
      } else if (step === 2) {
        const response = await axios.post("/api/v1/signup/verify/phone", {
          token,
          phoneCode,
        });

        if (response.data.success) {
          setToken(response.data.token);
          setStep(3);
        } else {
          setError("Incorrect verification code");
        }
      } else if (step === 3) {
        const response = await axios.post("/api/v1/signup/send/email", {
          token,
          email,
        });

        if (response.data.success) {
          setToken(response.data.token);
          setStep(4);
        } else {
          setError("Something went wrong");
        }
      } else if (step === 4) {
        const response = await axios.post("/api/v1/signup/verify/email", {
          token,
          emailCode,
        });

        if (response.data.success) {
          setToken(response.data.token);
          setStep(5);
        } else {
          setError("Incorrect verification code");
        }
      } else if (step === 5) {
        const response = await axios.post("/api/v1/signup", {
          token,
          password,
        });

        if (response.data.success) {
          console.log("User created successfully");
        } else {
          setError("Something went wrong");
        }
      }
    } catch (error) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="signup">
      {step === 1 && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
          />
          <button type="submit">Next</button>

          <p className="error">{error}</p>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={phoneCode}
            onChange={(e) => setPhoneCode(e.target.value)}
            placeholder="Verification code"
          />
          <button type="submit">Next</button>
          <p className="error">{error}</p>
        </form>
      )}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
          />
          <button type="submit">Next</button>
          <p className="error">{error}</p>
        </form>
      )}
      {step === 4 && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={emailCode}
            onChange={(e) => setEmailCode(e.target.value)}
            placeholder="Verification code"
          />
          <button type="submit">Next</button>
          <p className="error">{error}</p>
        </form>
      )}
      {step === 5 && (
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Sign Up</button>
          <p className="error">{error}</p>
        </form>
      )}
    </div>
  );
};

export default Signup;
