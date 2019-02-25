import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

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
      <View>
        <Text>Nombre: {item.name}</Text>
        <Text>Emitido: {item.air_date}</Text>
        <Text>Episodio: {item.episode}</Text>
      </View>
    );
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.container}>
          <MenuButton navigation={this.props.navigation}/>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.dataSource}
          renderItem={this.renderItem}
        />
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
