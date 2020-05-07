import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'


const CardWrapper = styled.div`
  border: 2px solid black;
  background-color: burlywood;
  display: flex;
  padding: 20px;
  /* height: 250px; */
  width: 800px;
  margin: 45px auto;

  :hover{
    /* border: 5px solid black; */
    box-shadow: inset 0px 0px 0px 1px black;
    cursor: pointer;
  }

`;
const CardLeftWrapper = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  flex-grow: 1;
  /* margin-right: 10px; */
`;
const CardRightWrapper = styled.div`
  /* border: 2px solid green; */
  margin-left: 10px;
  text-align: center;
  width: 350px;
`;
const Line = styled.div`
  border-left: 6px solid green;
`;

const CardPicture = styled.img`
  height: 150px;
  width: 150px;
  margin-top: 16px;
  border-radius: 100%;
  border: 1px solid navy;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_pDFERWYWYKNFtAhSoAv0_uZx3XDGbjcs4jlNgliq7uvWuIsZ&usqp=CAU");
  background-size: cover;
`;

const TitleContainer = styled.div`
  /* border: 1px solid purple; */
  margin-left: 20px;
`;

const Table = () =>{
    return (
        <div>
            <p>Disponibility</p>
            <table style={{ width: "100%" }}>
                <thead>
                    <tr>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                    <th>Sun</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>AM</td>
                    <td>AM</td>
                    <td>AM</td>
                    <td>AM</td>
                    <td></td>
                    <td></td>
                        <td></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                    <td>PM</td>
                    <td>PM</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>PM</td>
                    <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const LinkUser = styled(Link)`
    border: 1px solid black;
    display: flex;
    text-decoration: none;
    color: inherit;
    /* width: 800px; */
`

interface IProps {
    id: number;
}

const Card: React.FC<IProps> = ({id}) => {
  return (
      <LinkUser to={`/user/${id}`}>
        <CardWrapper>
        <CardLeftWrapper>
            <CardPicture />
            <TitleContainer>
            <h2>Front End Engineer</h2>
            <p>Alex Mendes</p>
            <p>New York, NY. USA</p>
            <div>
                <FontAwesomeIcon icon={faStar} /> 5.0 (+1.k)
            </div>
            </TitleContainer>
        </CardLeftWrapper>
        <Line />
        <CardRightWrapper>
            <Table/>
        </CardRightWrapper>
        </CardWrapper>
      </LinkUser>
  );
};

export default Card;
