import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  &::after {
    content: '';
    flex: 0 0 32%;
  }
<<<<<<< HEAD
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
||||||| merged common ancestors
=======
  @media (max-width: 800px) {
    flex-direction: column;
  }
>>>>>>> c054abf5859d3d6c3fb29ce5f7f075ed88ccea51
`

const CardList = props => {
  return <List>{props.children}</List>
}

export default CardList
