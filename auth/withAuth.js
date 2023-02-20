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
        return;
      }

      const timer = setTimeout(() => {
        setLoading(false)
      }, 1500)
  
      return () => clearTimeout(timer)
      }, []);

    if (loading) {
      return  <div className="spinner"></div>
   
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
