import React, { useState } from "react";
import LoginPage from "./LoginPage/LoginPage";
import SignUpPage from "./SignUpPage/SignUpPage";

const SignPage: React.FC = () => {
  const [login, setLogin] = useState<boolean>(true);
  const onClick = () => {
    setLogin(!login);
  };

  return (
    <React.Fragment>
      {login ? (
        <LoginPage  setLogin={onClick}/>
      ) : (
        <SignUpPage setSignUp={onClick} />
      )}
    </React.Fragment>
  );
}

export default SignPage
