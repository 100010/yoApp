import React from 'react';
import AppContainer from './app/screens/AppContainer';
import configStore from './app/store';
import { Provider } from 'react-redux';

//redux infrastructure


export default class App extends React.Component {
  render() {
    console.log('aaaa');
    return (
      <Provider store={configStore.store}>
        <AppContainer/>
      </Provider>
    );
  }
}
