import React from 'react';
import AppContainer from './app/screens/AppContainer';
import { Provider } from 'react-redux';

//redux infrastructure


export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}
