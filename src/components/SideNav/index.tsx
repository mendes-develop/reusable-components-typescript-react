import React from "react";
import {NavLink} from "react-router-dom"
import {SideNavContainer, UserPicture, SideBarButton} from './style'

export default function SideNav(){
    return (
      <SideNavContainer>
          <UserPicture/>
          <h3>Alex Mendes</h3>

         
          <NavLink to="/"><SideBarButton>Profile</SideBarButton></NavLink>
          <NavLink to="/"><SideBarButton>Messages</SideBarButton></NavLink>
          <NavLink to="/"><SideBarButton>Calendar</SideBarButton></NavLink>
          
      </SideNavContainer>
    )
  }