import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnlock,
  faEnvelope,
  faUser
} from "@fortawesome/free-solid-svg-icons";
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
  setSignUp: () => void;
}

const SingUp: React.FC<IProps> = ({ setSignUp }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    (usernameRef as any).current.focus();
  }, []);

  const onKeyDown = (e: any) => {
    if (e.key === "Enter") {
      switch (e.target.id) {
        case "username-signup": {
          (emailRef as any).current.focus();
          break;
        }
        case "email-signup": {
          (passwordRef as any).current.focus();
          break;
        }
        case "password-signup": {
          (passwordConfRef as any).current.focus();
          break;
        }
        case "passwordConf-signup": {
          (checkboxRef as any).current.focus();
          break;
        }
        case "checkbox-signup": {
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
      <Title>Sign Up</Title>
      <ErrorMessage>
            Password or Email invalid.
          </ErrorMessage>
      <InputWrapper>
        <FontAwesomeIcon icon={faUser} color="var(--main-text-color)" />
        <InputField
          type="text"
          placeholder="Username"
          id="username-signup"
          value={username}
          onChange={e => setUsername(e.target.value)}
          ref={usernameRef}
          onKeyDown={e => onKeyDown(e)}
        />
      </InputWrapper>

      <InputWrapper>
        <FontAwesomeIcon icon={faEnvelope} color="var(--main-text-color)" />
        <InputField
          type="email-signup"
          id="email-signup"
          placeholder="Email"
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
          id="password-signup"
          value={password}
          onChange={e => setPassword(e.target.value)}
          ref={passwordRef}
          onKeyDown={e => onKeyDown(e)}
        />
      </InputWrapper>

      <InputWrapper>
        <FontAwesomeIcon icon={faUnlock} color="var(--main-text-color)" />
        <InputField
          type="password"
          placeholder="Password Confirmation"
          id="passwordConf-signup"
          value={passwordConf}
          onChange={e => setPasswordConf(e.target.value)}
          ref={passwordConfRef}
          onKeyDown={e => onKeyDown(e)}
        />
      </InputWrapper>

      <div>
        <CheckBox
          type="checkbox"
          id="checkbox-signup"
          ref={checkboxRef}
          checked={checkbox}
          onChange={e => setCheckbox(!checkbox)}
          onKeyDown={e => onKeyDown(e)}
        />
        <CheckBoxText>Remember me</CheckBoxText>
      </div>

      <Button ref={submitRef} onClick={e => onSubmit(e)} type="submit">
        {" "}
        SIGN UP{" "}
      </Button>

      <p>
        Already a Member?
        <SignAnchor onClick={() => setSignUp()}>Login</SignAnchor>
      </p>
    </SignContainer>
  );
};

export default SingUp;
