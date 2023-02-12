import axios from "axios";








const registerPhone = (phone) => {
  return axios.post("/api/v1/signup/send/phone", { phone });
};

const verifyPhone = (code, jwt) => {
  return axios.post(
    "/api/v1/signup/verify/phone",
    { code },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
};

const registerEmail = (email, jwt) => {
  return axios.post(
    "/api/v1/signup/send/email",
    { email },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
};

const verifyEmail = (code, jwt) => {
  return axios.post(
    "/api/v1/signup/verify/email",
    { code },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
};

const registerPassword = (password, jwt) => {
  return axios.post(
    "/api/v1/signup/",
    { password },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
};

export {
  registerPhone,
  verifyPhone,
  registerEmail,
  verifyEmail,
  registerPassword,
};
