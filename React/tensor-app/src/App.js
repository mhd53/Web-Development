import React, { Component } from 'react';
import styled from 'styled-components';
import {Col, Row, Container} from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import defaultTheme from './theme';
import SimpleNN from './TensorComponent';

// Styled Components
const StyledContainer = styled.div`
  background: ${({theme}) => theme.background};
  font-family: ${({theme}) => theme.fontFamily};
  overflow: hidden;
  width: ${props => props.width};
  `; 

const StyledMainHeader = styled.div`
  background: ${({theme}) => theme.headerBgColor};
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  `;

const StyledMainHeaderTitle = styled.h1`
  margin: 0;
  font-size: ${({theme}) => theme.headerFontSize};
  color: ${({theme}) => theme.headerFontColor};
  `;

// Set default props for styled-components
StyledMainHeader.defaultProps = {
  theme: defaultTheme,
}

StyledMainHeaderTitle.defaultProps = {
  theme: defaultTheme,
}

// UI Components
class AppHeader extends React.Component {
  render() {
    return (
      <StyledMainHeader>
        <StyledMainHeaderTitle>
          {this.props.header}
        </StyledMainHeaderTitle>
      </StyledMainHeader>
      );
  }
}

class AppContainer extends React.Component {
  render() {
    return (
      <StyledContainer width="100%">
        <AppHeader header="Tensorflow is awesome!" />
        <Container>
          <SimpleNN />
        </Container>
      </StyledContainer>
      );
  }

} 

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppContainer />
      </div>
    );
  }
}

export default App;
