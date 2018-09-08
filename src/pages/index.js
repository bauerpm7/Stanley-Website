import React from 'react';
import CardList from '../components/CardList';
import Card from '../components/Card';
import Container from '../components/Container';
import SEO from '../components/SEO';
import PageTitle from '../components/PageTitle';
import SideNavigation from '../components/SideNavigation';
import Video from '../components/Video';
import VideoList from '../components/VideoList';
import AccomplishmentCard from '../components/accomplishmentCard';

const Index = ({ data }) => {
  const posts = data.allContentfulPost.edges;
  const video = data.allContentfulVideo.edges[1].node;
  const accomplishments = data.allContentfulAccomplishmentsAndAwards.edges;
  return (
    <div style={{ backgroundColor: 'white' }}>
      <SEO />
      <SideNavigation />
      <Container>
        <CardList>
          {accomplishments.map(({ node: post }) => (
            <AccomplishmentCard
              key={post.id}
              image={post.heroImage}
              title={post.title}
              body={post.bodyText}
              url={post.url}
            />
          ))}
        </CardList>
      </Container>
      <Container>
        <VideoList>
          <Video
            key={video.id}
            title={video.title}
            url={video.url}
            description={video.description}
          />
        </VideoList>
      </Container>
      <Container id="about" name="about">
        <PageTitle>Recent Posts</PageTitle>
        <CardList>
          {posts.map(({ node: post }) => (
            <Card
              key={post.id}
              slug={post.slug}
              image={post.heroImage}
              title={post.title}
              date={post.publishDate}
              excerpt={post.body}
            />
          ))}
        </CardList>
      </Container>
    </div>
  );
};

export const query = graphql`
  query indexQuery {
    allContentfulPost(limit: 3, sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
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
    allContentfulAccomplishmentsAndAwards {
      edges {
        node {
          id
          title
          heroImage {
            sizes {
              srcSet
              aspectRatio
            }
          }
          bodyText {
            bodyText
          }
          url
        }
      }
    }
  }
`;

export default Index;
