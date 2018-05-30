import React from 'react';
import { Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';

export default class KickOff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear
    }).start();
    // handleAnimation()
  }

  render() {
    return (
      <LottieView source={require('../../assets/animations/LineAnimation.json')} progress={this.state.progress} />
    );
  }
};
