import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: '100%';
  padding: 0;
`;

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Container;
