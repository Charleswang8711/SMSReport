import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Textview extends Component {
    constructor(props) {
      super(props);
      this.state = {
        titleText: 'Company info',
        bodyText: 'This is not really a company.',
      };
    }
    render() {
      return (
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={this.onPressTitle}>
            {this.state.titleText}{'\n'}{'\n'}
          </Text>
          <Text numberOfLines={5}>
            {this.state.bodyText}
          </Text>
        </Text>
      );
    }
}
const styles = StyleSheet.create({
    baseText: {
      fontFamily: 'Cochin',
      margin: 20,
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 20,
    },
});
