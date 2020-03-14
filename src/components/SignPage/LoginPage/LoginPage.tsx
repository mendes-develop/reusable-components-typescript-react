import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  SignContainer,
  Title,
  InputWrapper,
  InputField,
  CheckBox,
  CheckBoxText,
  Button,
  SignAnchor,
  ErrorMessage
} from "../style";

interface IProps {
  setLogin: () => void;
}

const Login: React.FC<IProps> = ({ setLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [errors, setErrors] = useState(true)

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    (emailRef as any).current.focus();
  }, []);

  const onKeyDown = (e: any) => {
    if (e.key === "Enter") {
      switch (e.target.id) {
        case "email-login": {
          (passwordRef as any).current.focus();
          break;
        }
        case "password-login": {
          (checkboxRef as any).current.focus();
          break;
        }
        case "checkbox-login": {
          setCheckbox(!checkbox);
          // (submitRef as any).current.focus();
          break;
        }
        default:
          return;
      }
    }
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    alert("Submitting");
  };

  return (
    <SignContainer>
      <Title>LOGIN</Title>
      {errors && (<ErrorMessage>
            Password or Email invalid.
          </ErrorMessage>)}
          

      <InputWrapper>
        <FontAwesomeIcon icon={faEnvelope} color="var(--main-text-color)" />
        <InputField
        // style={{"backgroundColor" : "red"}}
          type="email"
          placeholder="Email"
          id="email-login"
          value={email}
          onChange={e => setEmail(e.target.value)}
          ref={emailRef}
          onKeyDown={e => onKeyDown(e)}
        />
      </InputWrapper>

      <InputWrapper>
        <FontAwesomeIcon icon={faUnlock} color="var(--main-text-color)" />
        <InputField
          type="password"
          placeholder="Password"
          id="password-login"
          value={password}
          onChange={e => setPassword(e.target.value)}
          ref={passwordRef}
          onKeyDown={e => onKeyDown(e)}
        />
      </InputWrapper>

      <div>
        <CheckBox
          type="checkbox"
          id="checkbox-login"
          ref={checkboxRef}
          checked={checkbox}
          onChange={e => setCheckbox(!checkbox)}
          onKeyDown={e => onKeyDown(e)}
        />
        <CheckBoxText>Remember me</CheckBoxText>
      </div>

      <Button onClick={e => onSubmit(e)}>LOGIN</Button>
      <p>
        Not a Member?
        <SignAnchor onClick={() => setLogin()}>SignUp</SignAnchor>
      </p>
    </SignContainer>
  );
};

export default Login;
