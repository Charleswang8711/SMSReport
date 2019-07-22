import React, {Component} from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Home from './Home';
import IScrolledDownAndWhatHappenedNextShockedMe from './ControlsList';

const RootStack = createStackNavigator(
    {
      Home: {
        screen: Home,
      },
      Details: {
        screen: IScrolledDownAndWhatHappenedNextShockedMe,
      },
    },
    {
      initialRouteName: 'Home',
    },
);
const AppContainer = createAppContainer(RootStack);
export default class App extends Component {
    render() {
      return <AppContainer />;
    }
}
