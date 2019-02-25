import React from 'react';
import { Dimensions, Platform } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import CharactersScreen from '../screens/CharactersScreen';
import Season01Screen from '../screens/Season01Screen';
import MenuDrawer from '../components/MenuDrawer';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.70,
  contentComponent: ({ navigation }) => {
    return(<MenuDrawer navigation={navigation}/>);
  }
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