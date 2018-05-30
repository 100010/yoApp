import React from 'react';
import connect from 'react-redux';
import KickOff from './KickOff/index';
import Welcome from './Welcome/index';
export default class AppContainer extends React.Component {
  render() {
    if (false) {
      return (
        <KickOff />
      );
    }
    return (
      <Welcome />
    );
  }
}

// export default connect()
