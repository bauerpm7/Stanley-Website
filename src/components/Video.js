import React, { Component } from 'react';
import ResponsiveEmbed from 'react-responsive-embed';
import '../styles/video.css'
import styled from 'styled-components'
import PageTitle from './PageTitle';

const Container = styled.div`
  max-width: 800px;
  margin: auto;
`
const StyledP = styled.p`
  max-width: 832px;
  padding: 50px 0;
  font-size: 18px;
`
class Video extends Component {

  render() {
    return(
      <div>
        <PageTitle small>
          Pittsburgh Story - Remaking Cities 2013
        </PageTitle>
          <Container>
            <div style={{position:'relative', height:0, overflow:'hidden', maxWidth:'100%', paddingBottom:'56.25%'}}>
              <iframe src="https://www.youtube.com/embed/2yqz9zgoC-U"  
                style={{position:'absolute', top:0, left:0,width:'100%', height:'100%'}}
                frameBorder="0"
                allowFullScreen/>
            </div>
            <StyledP>Stanley Lowe, former director of Pittsburgh Housing Authority and current president of the Economic Opportunity Planning Association (Toledo) speaks about neighborhood revitalization in Pittsburgh at the Remaking Cities Congress.</StyledP>
          </Container>
          
      </div>
    )
  } 
}

export default Video