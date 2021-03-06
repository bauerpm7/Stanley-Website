import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CardList = props => {
  return <List>{props.children}</List>;
};

export default CardList;
