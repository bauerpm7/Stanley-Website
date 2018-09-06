import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 8em 1.5em 2em;
`;

const Container = props => {
  const { id } = props;
  return <Wrapper id={id}>{props.children}</Wrapper>;
};

export default Container;
