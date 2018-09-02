import React from 'react';
import Helmet from 'react-helmet';
import config from '../utils/siteConfig';
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import SEO from '../components/SEO';
import Video from '../components/Video';
import VideoList from '../components/VideoList';

const Videos = ({ data }) => {
  const videos = data.allContentfulVideo.edges;
  const postNode = {
    title: `Videos - ${config.siteTitle}`,
  };

  return (
    <div>
      <Helmet>
        <title>{`Videos - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="video" customTitle />

      <Container>
        <PageTitle>Videos</PageTitle>
        <VideoList>
          {videos.map(({ node: video }) => (
            <Video
              key={video.id}
              title={video.title}
              url={video.url}
              description={video.description}
            />
          ))}
        </VideoList>
      </Container>
    </div>
  );
};

export const query = graphql`
  query videoQuery {
    allContentfulVideo {
      edges {
        node {
          title
          id
          url
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;

export default Videos;
