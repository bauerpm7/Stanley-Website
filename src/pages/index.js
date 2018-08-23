import React from 'react'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import HeroContainer from '../components/HeroContainer'
import PageTitle from '../components/PageTitle'

const Index = ({ data }) => {
  const posts = data.allContentfulPost.edges
  const image = data.contentfulCoverImage.image
  const heroTitle = data.contentfulCoverImage.title
  const subtitle = data.contentfulCoverImage.subtitle
  return (
    <div>
      <SEO />
      <HeroContainer>
      <Hero
        image = {image}
        title = {heroTitle}
        subtitle = {subtitle}
      />
      </HeroContainer>
      <Container>
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
  )
}

export const query = graphql`
  query indexQuery {
    allContentfulPost(
      limit: 3
      sort: { fields: [publishDate], order: DESC }
    ) {
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
    contentfulCoverImage {
      title
      subtitle
      image {
        sizes {
          aspectRatio
          srcSet
        }
      }
    }
  }
`

export default Index
