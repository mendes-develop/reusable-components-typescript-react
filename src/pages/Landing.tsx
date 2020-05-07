import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  border: 2px dashed red;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 85vh;
  text-align: center;
`;

const TopContainer = styled.div`
  /* border: 2px solid red; */
  /* height: 200px; */
  width: 600px;
  margin: 30px auto;
`;
const MiddleContainer = styled.div`
  /* border: 2px solid green; */
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 5px;
`;

const ImageWarapper = styled.div`
  /* border: 2px solid purple; */
  border: 1px solid black;
  border-radius: 5px;
  height: 300px;
  width: 600px;
  background-image: url("https://cdn.mos.cms.futurecdn.net/eokEtAiUrupiB3okuijcD5.jpg");
  background-size: cover;
`;

const TextBox = styled.div`
  border: 2px solid black;
  height: 300px;
  width: 600px;
  background: #FFF;
  box-shadow: 0 0 5px 0 black;
  border-radius: 5px;
`;

const Button = styled.div`
  border: 1px solid black;
  background: #FFF;
  border-radius: 20px;
  padding: 30px 100px;
  margin:auto;
  cursor: pointer;
  box-shadow: 0 0 5px 0 black;
  :hover{
      border: 2px solid black;
  }
`;

const LandingPage = () => {
  return (
    <PageWrapper>
      <TopContainer>
      <h1>COOL COLABS</h1>
      <h3>Find your best partner</h3>
      </TopContainer>
      <MiddleContainer>
        <ImageWarapper></ImageWarapper>
        <TextBox>
            <h3>Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at</h3>
            <h3>Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at</h3>
        </TextBox>
      </MiddleContainer>
      <Button>
      <h4>Find a Colaborato now</h4>
      <h5>Click here and get started</h5>
      </Button>
    </PageWrapper>
  );
};

export default LandingPage;
