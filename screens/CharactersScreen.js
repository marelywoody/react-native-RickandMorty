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
      <View style={styles.containerInfo}>
        <Image style={styles.imagen}source={{uri: item.image}}/>
        <View style={styles.containerName}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </View>
    );
  }
  
  renderSeparador = () => {
    return(
      <View style={styles.separador}>

      </View>
    );
  };

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
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={this.renderSeparador}
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
  containerInfo:{
    flex: 1,
    flexDirection:'row',
  },
  imagen:{
    height:100,
    width: 100,
    marginBottom: 3,
    marginTop: 3,
  },
  containerName:{
    flex: 1,
    justifyContent: 'center',
    marginLeft: 5,
  },
  name: {
    fontSize: 18,
    marginBottom: 15,
  },
  separador:{
    height: 1,
    width: '100%',
    backgroundColor: '#000',
  },
});
