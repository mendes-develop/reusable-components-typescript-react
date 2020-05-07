import React from "react";
import styled from "styled-components";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Review from '../components/Review/Review'
// import { UserPicture } from "../components/SideNav/style";

const habilitiesContainer = () => {
  return [1, 2, 3, 4, 5, 6].map((num) => {
    return (
      <HabilityWrapper id="habilities" key={num}>
        <FontAwesomeIcon icon={faCheckCircle} size="3x" />
        <HabilititesText>Experience</HabilititesText>
      </HabilityWrapper>
    );
  });
};

const UserPage = () => {
  return (
    <UserWrapper>

      <PictureWrapper>
        <UserPicture />
        <h2>Alex Mendes</h2>
        <h2>Front End Engineer</h2>
        <p>New York, NY. USA</p>
      </PictureWrapper>

      <Section>
        <h3>About Me</h3>
        <TextParagraph>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at.{" "}
          <br />
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
          <br />
          <br />
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
          Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
          in 45 BC. This book is a treatise on the theory of ethics, very
          popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
          ipsum dolor sit amet..", comes from a line in section 1.10.32. The
          standard chunk of Lorem Ipsum used since the 1500s is reproduced below
          for those interested. <br />
          <br /> Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
          Malorum" by Cicero are also reproduced in their exact original form,
          accompanied by English versions from the 1914 translation by H.
          Rackham.
        </TextParagraph>

        <h3>Experience</h3>
        <TextParagraph>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </TextParagraph>

        <h3>Habilities</h3>
        {habilitiesContainer()}
        <Review/>
        <Review/>
      </Section>
    </UserWrapper>
  );
};

const UserWrapper = styled.div`
  border: 2px solid red;
  /* height: 90vh; */
  width: 80vw;
  margin: auto;
`;

const PictureWrapper = styled.div`
  border: 1px solid blue;
  text-align: center;
`;

const TextParagraph = styled.p`
  border: 1px solid green;
  padding: 20px;
`;

const Section = styled.div`
  border: 1px solid black;
  margin: 0 200px;
`;

export const UserPicture = styled.div`
  border: 1px solid black;
  /* border-radius: 100%; */
  margin: 1rem auto;
  height: 200px;
  width: 200px;
  background-image: url("https://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_1986930_profile.jpg");
  background-size: cover;
`;

const HabilityWrapper = styled.div`
  display: inline;
  border: 3px dashed #1c87c9;
`;

const HabilititesText = styled.h3`
  display: inline;
`;

export default UserPage;
