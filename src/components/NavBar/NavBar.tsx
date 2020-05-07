import React from "react";
import {useDispatch} from 'react-redux'
import {logout} from '../../reducers/User/actions'
// import {NavBarContainer, NavLogo, LogoutButton} from './style'
import {NavLink, useHistory} from 'react-router-dom'
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

const NavBar: React.FC = () => {

  const dispatch = useDispatch()
  let history = useHistory()
  
  const onClick = () =>{
    localStorage.clear()
    history.go("/")
    // dispatch(logout)
  }
  
  return (

    <NavBarContainer>

        <NavLogo src="https://codetheweb.blog/assets/img/icon2.png"/>
        <ul>
          <li><NavLink to="/messages">Messages</NavLink></li>
          <li><NavLink to="/main">Main</NavLink></li>
          <li><NavLink to="/user/1">User</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
          <li><NavLink to="/landing">Landing</NavLink></li>
          
        </ul>

      <LogoutButton onClick={onClick}>Log Out</LogoutButton>
    </NavBarContainer>
  )};

  export default NavBar