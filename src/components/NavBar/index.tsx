import React from "react";
import {useDispatch} from 'react-redux'
import {logout} from '../../reducers/User/actions'
import {NavBarContainer, NavLogo, LogoutButton} from './style'
import {NavLink} from 'react-router-dom'


const NavBar: React.FC = () => {

  const dispatch = useDispatch()
  
  const onClick = () =>{
    localStorage.clear()
    dispatch(logout)
  }
  
  return (

    <NavBarContainer>

        <NavLogo src="https://codetheweb.blog/assets/img/icon2.png"/>
        <ul>
          <li><NavLink to="/sidenav">SideNav</NavLink></li>
          <li><NavLink to="/modal">Modal</NavLink></li>
        </ul>

      <LogoutButton onClick={onClick}>Log Out</LogoutButton>
    </NavBarContainer>
  )};

  export default NavBar