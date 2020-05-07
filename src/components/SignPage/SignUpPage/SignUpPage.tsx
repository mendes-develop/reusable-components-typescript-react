import React, { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
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
import { registerUser} from "../../../services/fetch"; //, IUserData  


interface IProps {
  setSignUp: () => void;
}

const SingUp: React.FC<IProps> = ({ setSignUp }) => {

  // Component State
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [errors, setErrors] = useState<string[]>([])

  // Component Refs
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);

  //sets first input on focus
  useEffect(() => {
    (usernameRef as any).current.focus();
  }, []);

  // changes input on focus Enter key
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

  // Resets the form
  const resetForm = ():void =>{
    setUsername("");
    setEmail("");
    setPassword("");
    setPasswordConf("");
    setCheckbox(false);
  }

  // POST sign up form
  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      //sends the request to the server
      const registerResponse = await registerUser(username, email, password, passwordConf)

      //if the response is success, set Local Storage
      if((registerResponse as any).userData){
        localStorage.token = (registerResponse as any).userData.token
        localStorage.username = (registerResponse as any).userData.user.username
        localStorage.user_id = (registerResponse as any).userData.user.user_id
        resetForm()
        setErrors([])
        alert(localStorage.username)

        //else, set Errors[]
      } else if ((registerResponse as any).errors){
        setErrors((registerResponse as any).errors)
      }
    } catch (error){
      console.log(error)
      setErrors(["Network request problem"]);
    }
  };

  return (
    <SignContainer>
      <Title>Sign Up</Title>
      {errors.length
        ? errors.map((error, index) => <ErrorMessage key={index}>{error}</ErrorMessage>)
        : null}
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
          required
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
          required
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
