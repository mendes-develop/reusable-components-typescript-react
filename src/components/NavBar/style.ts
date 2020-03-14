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
    color: black;
    color: white;
    text-decoration: none;
}
`

const NavLogo = styled.img`
    height: 80px;
    margin-left: 40px;
`

export {
    NavBarContainer,
    NavLogo
}