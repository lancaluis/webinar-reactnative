import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './components/Button';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="cancelar" type="btn_success_rounded" />
        <Button title="confirmar" type="btn_cancel_rounded" />
        <Button title="confirmar" type="btn_normal" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
});