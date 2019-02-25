import React from 'react';
import { Platform, ScrollView ,Dimensions, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class MenuDrawer extends React.Component {
  navLink(nav, text) {
    return(
      <TouchableOpacity style={styles.navlinks} onPress={() => this.props.navigation.navigate(nav)}>
        <Text style={styles.link}>{text}</Text>       
      </TouchableOpacity>
    )
  }
  
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.topLinks}>
          <View style={styles.viewImage}>
            <Image source={require('../assets/rick.jpg')} style={styles.imagen}/>
          </View>
        </View>
        <View style={styles.bottomLinks}>
          {this.navLink('Home','Home')}
          {this.navLink('Characters','Characters')}
          {this.navLink('Season01','Season 01')}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#DFE0E8',
  },
  navlinks:{
    height: 60,
  },
  topLinks:{
    height: 180,
    backgroundColor: '#067068',
  },
  viewImage:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    height: 90,
    width: 90,
    borderRadius: 50,
  },
  bottomLinks:{
    flex:1,
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 450,
  },
  link:{
    flex: 1,
    fontSize: 20,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left',
  },
});