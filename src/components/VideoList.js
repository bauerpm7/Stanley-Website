import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoList = props => {
  return <List>{props.children}</List>;
};

export default VideoList;
