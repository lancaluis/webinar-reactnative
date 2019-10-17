import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default class Button extends Component {
  render() {
    const { title, type } = this.props;
    return (
      <>
        <TouchableOpacity style={styles[type]}>
          <Text>{title}</Text>
        </TouchableOpacity>
      </>
    )
  }
};