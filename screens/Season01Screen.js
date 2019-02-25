import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, ScrollView } from 'react-native';

import MenuButton from '../components/MenuButton';

class Season01Screen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource:[]
    }
  }

  componentDidMount(){
    return fetch('https://rickandmortyapi.com/api/episode?page=1')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          dataSource: data.results,
        }, function(){

        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderItem = ({item}) => {
    return(
      <View style={styles.containerInfo}>
        <Text>Nombre: {item.name}</Text>
        <Text>Emitido: {item.air_date}</Text>
        <Text>Episodio: {item.episode}</Text>
      </View>
    );
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.containerLoad}>
          <MenuButton navigation={this.props.navigation}/>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View  style={styles.containerButton}>
          <MenuButton navigation={this.props.navigation}/>
        </View>
        <ScrollView style={styles.scrollView}>
          <View>
          <FlatList 
          data={this.state.dataSource}
          renderItem={this.renderItem}
        />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Season01Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerLoad:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  scrollView:{
    flex: 1,
  },
  containerInfo:{
    marginBottom: 10,
  },
});
