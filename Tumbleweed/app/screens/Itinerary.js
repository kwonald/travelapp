import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ListView,
  Alert
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';

class MyDreamBoard extends Component {
  // onLearnMore = (user) => {
  //   this.props.navigation.navigate('Details', { ...user });
  // };
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
  }
  GetItem (activityname){
    Alert.alert(activityname);  // activityname
  }

  createTrip = () => {
    
    this.props.navigation.navigate('CreateTrip');
    
  }

  componentDidMount(){
     return fetch('http://localhost:3000/submit_user_info.php')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
       
        
          <View style={styles.MainContainer}>
            
            <TouchableOpacity onPress={this.createTrip} style={{height:100, width:350, paddingTop: 15}}>
            <Image
              style={{height:70, width:350, }}
              source={require('../assets/explore/createtrip.png')}
            />
            </TouchableOpacity>      
 
      
         
        </View>
    );
  }
}

export default MyDreamBoard;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  MainContainer :{
  // Setting up View inside content in Vertically center.
  justifyContent: 'center',
  flex:1,
  margin: 10
   
  },
 
  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text1: {
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  text2: {
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text3: {
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10,
  },
  button:{
    width: 80,
    height: 80,
  },
  buttonWrapper:{
    padding: 10,
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  }
})
