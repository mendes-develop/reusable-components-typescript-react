import React from "react";
import styled from "styled-components";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RegisterWrapper = styled.div`
  border: 2px solid red;
  /* height: 90vh; */
  width: 80vw;
  margin: auto;
`;

const CardPicture = styled.img`
  height: 150px;
  width: 150px;
  margin-top: 16px;
  border-radius: 100%;
  border: 1px solid navy;
  background: white;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/-Insert_image_here-.svg/1280px--Insert_image_here-.svg.png");
`;

const TextParagraph = styled.input`
  border: 1px solid green;
  margin: auto;
  width: 100%;
  height: 100px;
  padding: 20px;
  display: block;
`;

const Form = styled.form`
  border: 3px dashed black;
  margin: 0px 100px;
  padding: 0px 100px;
`;

const Button = styled.button`
  background: var(--main-highlight-color);
  border-radius: 10px;
  color: white;
  width: 200px;
  padding: 0.5em 0;
  margin: 20px auto;
  cursor: pointer;
  font-size: 1.2rem;
  display: block;
`;

const InputField = styled.input`
  border-radius: 5px;
  border: 1px solid var(--main-border-color);
  /* display: inline-block; */
  margin: 0.5em auto;
  margin-left: 5px;
  padding: 10px;
  background-color: #f1f3f4;
  height: 2rem;
  /* width: 80%; */
  font-size: 1.2rem;
`;

const Container = styled.div`
  border: 1px dashed red;
  margin-bottom: 50px;
`;
const CheckBoxContainer = styled.div`
  display: inline;
  border: 1px solid blue;
`;
const Label = styled.h3`
  display: inline;
  margin-right: 100px;
`;

const Register = () => {
  return (
    <RegisterWrapper>
      <h1>Personal Info</h1>
      <Form onSubmit={() => alert("submiting")}>
        <Container>
          <Label>Full Name</Label>
          <InputField placeholder="First Name"/>
          <InputField placeholder="Last Name"/>
        </Container>
        <Container>
          <Label>Profile Picture</Label>
          <CardPicture />
        </Container>
        <Container>
          <Label>Habilities</Label>
          <CheckBoxContainer>
            <input type="checkbox" />
            <label>Habilities</label>
            <input type="checkbox" />
            <label>Habilities</label>
            <input type="checkbox" />
            <label>Habilities</label>
            <label>Habilities</label>
            <input type="checkbox" />
            <label>Habilities</label>
            <input type="checkbox" />
            <label>Habilities</label>
            <input type="checkbox" />
            <label>Habilities</label>
          </CheckBoxContainer>
        </Container>
        <Container>
          <Label>Habilities</Label>
          <CheckBoxContainer>
            <input type="checkbox" />
            <label>Habilities</label>
            <input type="checkbox" />
            <label>Habilities</label>
            <input type="checkbox" />
            <label>Habilities</label>
            <label>Habilities</label>
            <input type="checkbox" />
            <label>Habilities</label>
            <input type="checkbox" />
            <label>Habilities</label>
            <input type="checkbox" />
            <label>Habilities</label>
          </CheckBoxContainer>
        </Container>
        <h3>Experience</h3>
        <TextParagraph>

        </TextParagraph>
        <h3>About Me</h3>
        <TextParagraph>

        </TextParagraph>
        <Button>Submit</Button>
      </Form>
    </RegisterWrapper>
  );
};

export default Register;
