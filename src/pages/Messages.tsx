import React from "react";
import styled from "styled-components";
import Message from "../components/Message/Message";
import Modal from "../components/Modal/index";

const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  border: 2px solid red;
  height: 100%;
  width: 100%;
`;

const ContactsContainer = styled.div`
  border: 2px solid brown;
  display: flex;
  flex-direction: column;
  /* height: 90vh; */
  flex: 1;
  margin: 20px 5px;
`;
const ChatContrainer = styled.div`
  border: 2px solid blue;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 100px;
  display: flex;
  height: 800px;
  flex: 2;
  margin: 5px;
`;

const TextParagraph = styled.input`
  border: 1px solid green;
  margin: auto;
  width: 90%;
  height: 100px;
  padding: 20px;
  display: block;
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
  display: inline-block;
`;

const MessagesPage = () => {
  return (
    <React.Fragment>
      <Modal />
      <PageWrapper>
        <ContactsContainer>
          <Message />
          <Message />
          <Message />
        </ContactsContainer>
        <ChatContrainer>
          <div>
            <Message />
            <Message />
          </div>
          <div>
            <TextParagraph />
            <Button>Scheduke a Meetting</Button>
            <Button>Submit</Button>
          </div>
        </ChatContrainer>
      </PageWrapper>
    </React.Fragment>
  );
};

export default MessagesPage;
