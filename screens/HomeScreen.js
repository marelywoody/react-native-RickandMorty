import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';

import MenuButton from '../components/MenuButton'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation}/>
        <Image source={require('../assets/rickandmorty.jpg')} style={styles.image} />
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 210,
    width: 270,
    borderRadius: 10,
  }
});