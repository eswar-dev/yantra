import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'


const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle} >
            <CloseIcon />
        </Icon>
        <SidebarMenu>
            <SidebarLink to='/#Workshops'>Workshops</SidebarLink>
            <SidebarLink to='/#Events'>Events</SidebarLink>
            <SidebarLink to='/'>Schedule</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/'>Register Now!</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar