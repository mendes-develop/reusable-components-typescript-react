import React, { useState, Dispatch, SetStateAction } from "react";
import LoginPage from "./LoginPage/LoginPage";
import SignUpPage from "./SignUpPage/SignUpPage";

interface IProps {
  setUserLogged : Dispatch<SetStateAction<boolean>>
}

const SignPage: React.FC<IProps> = ({setUserLogged}) => {
  const [login, setLogin] = useState<boolean>(true);
  
  const onClick = () => {
    setLogin(!login);
  };

  return (
    <React.Fragment>
      {login ? (
        <LoginPage  setLogin={onClick} setUserLogged={setUserLogged}/>
      ) : (
        <SignUpPage setSignUp={onClick} setUserLogged={setUserLogged}/>
      )}
    </React.Fragment>
  );
}

export default SignPage
