import React from 'react';
import styled from 'styled-components'

const SectionLink = styled.a`
  height: 16px;
  width: 16px;
  border-radius: 100%;
  margin-bottom: 10px;
  display: block;
  cursor: pointer;
`
const InnerLink = styled.span`
  border-radius: 100%;
  display: block;
  width: 14px;
  height: 14px;
  vertical-align: top;
  cursor: pointer;
  background-color: rgba(0,0,0,0.2);
`
const SideNavBtn = (props) => {
  const { to, className } = props
  return(
    <SectionLink href={to} className={className} >
      <InnerLink/>
    </SectionLink>
  )  
}

export default SideNavBtn