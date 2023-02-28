import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Http } from "../webservice/http.module";

const http = new Http("http://13.208.124.247:8080/api/v1/token");

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const accessToken = localStorage.getItem("a_t");
      const refreshToken = localStorage.getItem("r_t");

      if (!accessToken || !refreshToken) {
        router.push("/sign-in");
      } else if (router.pathname === "/sign-in") {
        router.replace("/");
      }

      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return (
        <div class="spinner-container">
          <div class="spinner">
            <div
              class="spinner-letter"
              style={{ margin: "15px", color: "#ef9655" }}
            >
              L
            </div>
            <div class="spinner-letter">O</div>
            <div class="spinner-c spinner-c-1" style={{ margin: "15px" }}>
              C
            </div>
            <div class="spinner-letter">A</div>
            <div class="spinner-c spinner-c-2" style={{ margin: "15px" }}>
              C
            </div>
            <div class="spinner-letter">O</div>
          </div>
          <div class="progress-container">
    <div class="progress">
      <div class="progress-bar bg-gradient-indigo"></div>
    </div>
  </div>
        </div>
      );

      // return  <div className="spinner"></div>
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
