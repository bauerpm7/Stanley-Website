import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Post = styled.li`
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  height: 100%;
  max-width: 500px;
  transition: background 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 49%;
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: 0 0 32%;
  }
  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
  a {
    display: flex;
    flex-flow: column;
    
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
    }
  }
`;

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`;

const Body = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
  text-align: justify;
`;

const StyledLink = styled.a`
margin: 0 1rem 1rem 1rem;
line-height: 1.6;
text-align: justify;
font-weight: 600
`;

const AccomplishmentCard = props => {
  return (
    <Post>
      <Img sizes={props.image.sizes} backgroundColor={'#eeeeee'} />
      <Title>{props.title}</Title>
      <Body>{props.body.bodyText}</Body>
      <StyledLink style={{ color: '#0A548C'}} href={props.url}>Find Out More</StyledLink>
    </Post>
  );
};

export default AccomplishmentCard;
