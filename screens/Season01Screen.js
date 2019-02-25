import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Season01Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Season 01</Text>
      </View>
    );
  }
}

export default Season01Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
