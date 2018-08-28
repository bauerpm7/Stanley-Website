import React from 'react';
import styled from 'styled-components';
import SideNavBtn from './SideNavBtn';

const BtnContainer = styled.nav`
  position: fixed;
  right: 30px;
  top: 300px;
  transition-delay: 1s;
  width: 16px;
  height: auto;
  z-index: 100;
  display: block;
  transition: 1s all cubic-bezier(0.23, 1, 0.32, 1);
`
const active = {
  border: '2px solid rgba(0,0,0,0.4)'
}
const SideNavigation = () => {
  return (
    <BtnContainer>
      <SideNavBtn to='#top' activeStyle = {active} />
      <SideNavBtn to='#about' />
      <SideNavBtn to='#blog' />
    </BtnContainer>
  )
}

export default SideNavigation;
