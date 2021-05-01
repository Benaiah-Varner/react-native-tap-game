import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from '../../components/Header';
import styles from './styles';
import PropTypes from 'prop-types';
import { generateRGB, mutateRGB } from '../../utilities';


export default class Home extends Component {
  state = {
    points: 0,
    timeLeft: 15,
  };
  
  componentWillMount() {
    this.interval = setInterval(() => {
      this.setState((state) => ({ timeLeft: state.timeLeft - 1 }));
    });
  }

  componentWillUnmount () {
      clearInterval(this.interval)
  }

  render() {
    return (
      <View style={styles.container}>
        <Header fontSize={55} />
      </View>
    );
  }
}

Header.propTypes = {
  fontSize: PropTypes.number,
};

Header.defaultProps = {
  fontSize: 55,
};
