import React from 'react';
import Helmet from 'react-helmet';
import config from '../utils/siteConfig';
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

const Contact = () => {
  const postNode = {
    title: `Contact - ${config.siteTitle}`,
  };

  return (
    <div style={{ backgroundColor: '#f8f8f8' }}>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
        <PageTitle>Contact</PageTitle>
        <ContactForm />
      </Container>
    </div>
  );
};

export default Contact;
