import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link'
import Scrollchor from 'react-scrollchor'
const BtnContainer = styled.div`
  position: fixed;
  right: 30px;
  top: 300px;
  width: 16px;
  height: auto;
  z-index: 100;
  display: block;
`

const NavBtn = styled(Scrollchor)`
  height: 16px;
  width: 16px;
  border-radius: 100%;
  margin-bottom: 10px;
  display: block;
  cursor: pointer;
  &:active {
    border: 3px solid rgba(0,0,0,0.5)
  }
`
const BtnBG = styled.span`
  border-radius: 100%;
  display: block;
  width: 14px;
  height: 14px;
  vertical-align: top;
  cursor: pointer;
  background-color: rgba(0,0,0,0.2);
`

const SideNavigation = () => {
  return (
    <BtnContainer >
      <NavBtn to='#top'><BtnBG/></NavBtn>
      <NavBtn to='#about'><BtnBG/></NavBtn>
      <NavBtn to='#blog'><BtnBG/></NavBtn>
    </BtnContainer>
  )
}

export default SideNavigation;
