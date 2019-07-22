/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Colors} from './home_components';

import {
  ButtonBasics,
  Textview,
  UselessTextInput,
  DisplayAnImageWithStyle,
} from './controls';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.separator} />
        <ButtonBasics />
        <View style={styles.separator} />
        <Textview />
        <View style={styles.separator} />
        <UselessTextInput />
        <View style={styles.separator} />
        <DisplayAnImageWithStyle />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.primary,
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: Colors.dark,
  },
  separator: {
    backgroundColor: Colors.light,
    height: 1,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});
