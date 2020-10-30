import React from "react";

import GoogleLoginCard from "../components/cards/googleLogin";

const GoogleLogin = (props) => {
  const handleGoogleSignIn = () => {
    console.log("--== Navigate User On GoogleSignIn Click ==--");
    props.history.push("/features/dashboard/home");
  };

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="offset-3 col-6 h-100">
          <div className="d-flex flex-column justify-content-center h-100">
            <GoogleLoginCard handleClick={handleGoogleSignIn} {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleLogin;
