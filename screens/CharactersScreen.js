import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator,Image, ScrollView } from 'react-native';

import MenuButton from '../components/MenuButton';

export default class CharactersScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource:[]
    }
  }

  componentDidMount(){
    return fetch('https://rickandmortyapi.com/api/character/?page=1')
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
        <Image style={styles.imagen}source={{uri: item.image}}/>
        <View style={styles.name}>
          <Text>{item.name}</Text>
        </View>
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
  imagen:{
    height:100,
    width: 100,
    marginBottom: 10,
  },
});
