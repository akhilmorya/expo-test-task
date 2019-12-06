import {
  createAppContainer
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/home/container';
import List from '../screens/list/container';

// Configure screens navigation
const AppStackNavigator = createStackNavigator(
  {
    HomeScreen: { screen: Home },
    ListScreen: { screen: List },
  },
  { 
    initialRouteName: 'HomeScreen',
    headerMode: 'none' 
  }
);

export default createAppContainer(AppStackNavigator);
