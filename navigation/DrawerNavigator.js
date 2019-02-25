import React from 'react';
import { Dimensions, Platform } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import CharactersScreen from '../screens/CharactersScreen';
import Season01Screen from '../screens/Season01Screen';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.65,
};

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Characters: {
    screen: CharactersScreen,
  },
  Season01: {
    screen: Season01Screen,
  }
},
DrawerConfig
);

export default createAppContainer(DrawerNavigator);