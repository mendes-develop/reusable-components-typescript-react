import styled from "styled-components";

const NavBarContainer = styled.nav`
  background-color: rgb(46, 56, 66);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 25px 0 black;
  * {
    display: inline;
  }
  li {
    margin: 20px;
  }
  li a {
    color: white;
    text-decoration: none;
  }
`;

const NavLogo = styled.img`
  height: 80px;
  margin-left: 40px;
`;
const LogoutButton = styled.button`
  position: absolute;
  right: 0;
  margin-right: 50px;

  border:1px solid #f9f68a; 
 
  border-radius: 3px;
  font-size:16px;
  font-family:arial, helvetica, sans-serif;
  /* font-weight: bold;    */
  padding: 10px 10px 10px 10px; 

`

export { NavBarContainer, NavLogo, LogoutButton };
