import React from "react";
import styled from "styled-components";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ReviewContainer = styled.div`
  border: 2px dashed yellow;
`;

const ReviewTitle = styled.div`
  /* border: 5px solid red; */
  display: flex;
  flex-grow: 1;
  /* margin-right: 10px; */
`;

const ReviewText = styled.div`
  /* border: 2px dashed black; */
  display: inline-block;
`;

const CardPicture = styled.img`
  height: 50px;
  width: 50px;
  margin-top: 16px;
  border-radius: 100%;
  border: 1px solid navy;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_pDFERWYWYKNFtAhSoAv0_uZx3XDGbjcs4jlNgliq7uvWuIsZ&usqp=CAU");
`;

const TextParagraph = styled.p`
  border: 1px solid green;
  padding: 20px;
  margin-top: 0px;
`;

const Message = () => {
  return (
    <ReviewContainer>
      <ReviewTitle>
        <CardPicture />
        <ReviewText>
          <h2>Alex Mendes</h2>
        </ReviewText>
      </ReviewTitle>
      <TextParagraph>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        undoubtable source.
      </TextParagraph>
    </ReviewContainer>
  );
};

export default Message;
