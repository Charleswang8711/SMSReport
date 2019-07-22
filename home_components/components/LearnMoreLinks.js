/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from './Colors';

const forms = [
  {
    title: 'Form 1',
    description: 'Please Press me to create a Form 1.',
  },
  {
    title: 'Form 2',
    description: 'Please Press me to create a Form 2.',
  },
  {
    title: 'Form 3',
    description: 'Please Press me to create a Form 3.',
  },
  {
    title: 'Form 4',
    description: 'Please Press me to create a Form 4.',
  },
  {
    title: 'Form 5',
    description: 'Please Press me to create a Form 5.',
  },
  {
    title: 'Form 6',
    description: 'Please Press me to create a Form 6.',
  },
  {
    title: 'Form 7',
    description: 'Please Press me to create a Form 7.',
  },
];
class LinkList extends Component {
  constructor(props) {
    super(props);
    this._buttonPress = this._buttonPress.bind(this);
  }
  _buttonPress() {
    this.props.navigation.navigate('Details');
  }

  render() {
    return (
      <View style={styles.container}>
        {forms.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <View style={styles.separator} />
              <TouchableOpacity
                accessibilityRole={'button'}
                onPress={() => this._buttonPress()}
                style={styles.linkContainer}>
                <Text style={styles.link}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </TouchableOpacity>
            </React.Fragment>
          );
        })}
      </View>
    );
  }
}
// const LinkList = () => (
//   <View style={styles.container}>
//     {forms.map((item, index) => {
//       return (
//         <React.Fragment key={index}>
//           <View style={styles.separator} />
//           <TouchableOpacity
//             accessibilityRole={'button'}
//             onPress={() => openURLInBrowser(item.link)}
//             style={styles.linkContainer}>
//             <Text style={styles.link}>{item.title}</Text>
//             <Text style={styles.description}>{item.description}</Text>
//           </TouchableOpacity>
//         </React.Fragment>
//       );
//     })}
//   </View>
// );

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
});

export default LinkList;
