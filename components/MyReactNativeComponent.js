import React from 'react'
import styled from 'styled-components/native'

const StyledView = styled.View`
  margin: ${props => props.margin || '15px' };  
  background-color: #F2E257;
  padding: 15px;
  
`

const StyledText = styled.Text`
  color: #7858f2;
  text-align: center;
  font-weight: bold;
`

class MyReactNativeComponent extends React.Component {
  render() {
    return (
      <StyledView margin={'15px'} >
        <StyledText>Are you HAPPY? 💜</StyledText>
      </StyledView>
    )
  }
}

export default MyReactNativeComponent