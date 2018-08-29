import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import Video from '../components/Video'

const Videos = ({ data }) => {
  const postNode = {
    title: `Videos - ${config.siteTitle}`,
  }

  return (
    <div>
      <Helmet>
        <title>{`Videos - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
        <PageTitle>Videos</PageTitle>
        <Video/>
      </Container>
    </div>
  )
}

export default Videos
