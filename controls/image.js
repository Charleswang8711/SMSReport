import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  stretch: {
    width: 200,
    height: 200,
  },
  left: {
    margin: 20,
  },
});

export default class DisplayAnImageWithStyle extends Component {
  render() {
    return (
      <View style={styles.left}>
        <Image
          style={styles.stretch}
          source={require('./logo.png')}
        />
      </View>
    );
  }
}
