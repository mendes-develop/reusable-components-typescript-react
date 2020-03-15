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
import { logUser } from "../../../services/fetch"; //, IUserData 



interface IProps {
  setLogin: () => void;
}

const Login: React.FC<IProps> = ({ setLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    (emailRef as any).current.focus();
    return () => {
      console.log("Unmounting");
    };
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

  const resetForm = (): void => {
    setPassword("");
    setEmail("");
  };

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const loginResponse = await logUser(email, password);
      console.log(loginResponse)

      if((loginResponse as any).userData){
        localStorage.token = (loginResponse as any).userData.token
        localStorage.username = (loginResponse as any).userData.user.username
        localStorage.user_id = (loginResponse as any).userData.user.user_id
        alert(localStorage.username)
        
      } else if ((loginResponse as any).error){
        setErrors([(loginResponse as any).error])
      }
    } catch (error){
      console.log(error)
      setErrors(["Network request problem"]);
    }
    resetForm()
  };

  return (
    <SignContainer>
      <Title>LOGIN</Title>
      {errors.length
        ? errors.map((error, index) => <ErrorMessage key={index}>{error}</ErrorMessage>)
        : null}

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
