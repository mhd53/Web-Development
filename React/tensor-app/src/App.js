import React, { Component } from 'react';
import styled from 'styled-components';
import {Col, Row, Container} from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import defaultTheme from './theme';
import ModelContainer from './TensorComponent';

// Styled Components
const StyledAppContainer = styled.div`
  margin: 0;
  padding: 0;
  background: ${({theme}) => theme.background};
  font-family: ${({theme}) => theme.fontFamily};
  overflow: hidden;
  width: ${props => props.width};
  height: 100%;
  `; 

const StyledMainHeader = styled.div`
  background: ${({theme}) => theme.headerBgColor};
  width: 100%;
  padding: 15px;
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
      <StyledAppContainer width="100%">
        <AppHeader header="Tensorflow is awesome!" />
        <ModelContainer modelName='snn' />
      </StyledAppContainer>
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
