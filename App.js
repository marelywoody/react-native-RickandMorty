import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import CharactersScreen from './screens/CharactersScreen';
import Season01Screen from './screens/Season01Screen';
import DrawerNavigator from './navigation/DrawerNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DrawerNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
