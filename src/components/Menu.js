import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import StanLogo from '../images/Stan-Lowe-Logo.png';

const Header = styled.header`
  background-color: white;
  width: 100%;
  padding: 1.5em 0;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: block;
  width: 80%;
  height: 1px;
  border-bottom: 1px solid black;
  margin-top: 10px;
  padding-top: 2.1rem;
  text-align: center;
`;

const LogoLink = styled(Link)`
  background-color: white;
  display: inline-block;
  position: relative;
  line-height: 1.1;
  padding: 0 2.5rem;
  z-index: 101;
  top: -2.5rem;
`;

const Logo = styled.img`
  height: 80px;
  width: 80px;
`;

const Title = styled.h1`
  font-size: 4em;
  margin-top: 80px;
  text-align: center;
  color: ${props => props.theme.colors.base};
  text-transform: uppercase;
  @media (max-width: 800px) {
    font-size: 3em;
  }
  @media (max-width: 500px) {
    font-size: 2em;
  }
`;

const SubTitle = styled.h3`
  font-size: 1.1em;
  text-align: center;
  letter-spacing: -0.15px;
  margin-bottom: 50px;
  text-transform: uppercase;
  @media (max-width: 800px) {
    font-size: 0.9em;
    padding: 0 30px
  }
`;

const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    justify-content: space-between;
    width: 80%;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.base};
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: DarkGrey;
    }
  }
`;

const TitleStyles = {
  marginTop: 100,
  marginBottom: 0,
  paddingBottom: 0,
};

const Menu = () => {
  return (
    <Header id="top" name="top">
      <LogoContainer>
        <LogoLink to="/">
          <Logo src={StanLogo} />
        </LogoLink>
      </LogoContainer>
      <div>
        <Title styles={TitleStyles}>Stanley A. Lowe</Title>
        <SubTitle>Changing the way we think about community planning</SubTitle>
      </div>
      <Nav>
        <ul>
          <li>
            <Link to="/" exact>
              Home
            </Link>
          </li>
          <li>
            <Link to="#">Blog</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
          <li>
            <Link to="/videos">Publications</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </Nav>
    </Header>
  );
};

export default Menu;
