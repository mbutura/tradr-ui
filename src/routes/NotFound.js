import React, { useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const redirectHome = setTimeout(() => {
      navigate(-1);
    }, 8000);
    return () => clearTimeout(redirectHome);
  }, [navigate]);

  return (
    <>
      <Header />
      <div className="container-fluid py-5 extend-height login-background">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="jumbotron text-center">
              <h1 className="display-3 theme-font">404 - Page Not Found</h1>
              <p className="lead theme-font">Sorry, the page you are looking for does not exist.</p>
              <p>Redirecting to the previous page in 8 seconds...</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;