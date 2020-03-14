import React from "react";
import {NavBarContainer, NavLogo} from './style'

const NavBar = () => (
    <NavBarContainer >
      <NavLogo src="https://codetheweb.blog/assets/img/icon2.png"/>
      <ul>
        <li><a href="#1">Home</a></li>
        <li><a href="#2">About</a></li>
      </ul>

    </NavBarContainer>
  );

  export default NavBar