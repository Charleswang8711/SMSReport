import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <TextInput
        style={styles.original}
        placeholder="Please input something"
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

const styles = StyleSheet.create({
    original: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
    },
});
