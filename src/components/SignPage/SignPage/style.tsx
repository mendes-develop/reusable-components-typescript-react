import styled from 'styled-components';

const SignContainer = styled.div`
  border-radius: 10px;
  border: 1px solid gray;
  width: 500px;
  height: auto;
  margin: 6rem auto;
  background-color: white;
  padding: 1em;
  text-align: center;
  box-shadow: 10px 10px;
`;

const Title = styled.h3``;

const InputWrapper = styled.div`
  position: relative;
`;

const InputField = styled.input`
  border-radius: 5px;
  border: 1px solid var(--main-border-color);
  display: inline-block;
  margin: 0.5em auto;
  margin-left: 5px;
  padding: 10px;
  background-color: #e0e0e0;
  height: 2rem;
  width: 80%;
  font-size: 1.2rem;

`;

const CheckBox = styled.input`
  border-radius: 3px;
  border: 2px solid var(--main-border-color);
`;

const CheckBoxText = styled.p`
  display: inline-block;

`;

const Button = styled.button`
  background: var(--main-highlight-color);
  border-radius: 3px;
  color: white;
  width: 50%;
  padding: 0.5em 0;
  margin-bottom: 2em;
  cursor: pointer;
  font-size: 1.2rem;

`;

const SignAnchor = styled.a`
  cursor: pointer;
  color: var(--main-highlight-color);
  text-decoration: underline;
`;


export {
    SignContainer,
    Title,
    InputWrapper,
    InputField,
    CheckBox,
    CheckBoxText,
    Button,
    SignAnchor
}