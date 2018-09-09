import React from 'react';
import '../styles/video.css';
import styled from 'styled-components';
import PageTitle from './PageTitle';

const Container = styled.div`
  max-width: 800px;
  margin: auto;
`;
const StyledP = styled.p`
  max-width: 832px;
  padding: 50px 0;
  font-size: 18px;
`;
const Video = props => {
  return (
    <div style={{ backgroundColor: '#f8f8f8' }}>
      <PageTitle small>{props.title}</PageTitle>
      <Container>
        <div
          style={{
            position: 'relative',
            height: 0,
            overflow: 'hidden',
            maxWidth: '100%',
            paddingBottom: '56.25%',
          }}
        >
          <iframe
            src={props.url}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <StyledP
          dangerouslySetInnerHTML={{
            __html: props.description.childMarkdownRemark.html,
          }}
        />
      </Container>
    </div>
  );
};

export default Video;
