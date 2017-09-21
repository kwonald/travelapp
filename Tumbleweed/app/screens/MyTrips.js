import React, { Component } from 'react';
import {
   Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator, ListView, Alert, TextInput
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';
import ModalDropdown from 'react-native-modal-dropdown';

class MyTrips extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      isModalVisible: false,
    }
  }
  onLearnMore = (user) => {
    // this.props.navigation.navigate('Details', { ...user });
  };
  componentDidMount(){
     return fetch('http://localhost:3000/myTrips.php')
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
        <View style={{flex:1, backgroundColor: '#fff'}}>
          <View style={{width: '100%', height: '20%', backgroundColor: '#fff', alignItems: 'flex-start', paddingLeft: 25,  paddingTop: 25}}>
            <View style={{flex: 1, flexDirection: "row",  justifyContent: 'space-around', alignItems: 'flex-start', paddingTop: 15, paddingLeft: 5, paddingRight: 55}}>
              <Text style={{paddingLeft: 10, fontSize: 40, fontWeight: 'bold', color: '#9013FE'}}> My Trips </Text>
              <ModalDropdown textStyle={{fontSize: 16, padding: 10, color: '#9013FE'}} options={['Active', 'Dream', 'Complete', 'Wish']} defaultValue={'Active ...'}/>
            </View>
            
            
          </View>
          <ListView
            dataSource={this.state.dataSource}
            // renderSeparator= {this.ListViewItemSeparator} 
            renderRow={(rowData) => 
              <View style={{justifyContent: 'center', alignItems: 'center', paddingBottom: 15, paddingTop:15, width: '100%',}}>
                <TouchableOpacity onPress={()=> this.onLearnMore(rowData)} >
                
                  <Image
                      style={{height:150, width:350, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'flex-end', padding: 10}}
                      source={require('../assets/createTrip/mytrip.png')}
                  >
                  
                  </Image>
                  {/*}
                    <Text style={styles.text}>
                      {rowData.city}
                    </Text>
                  */}
                  <View style={{flexDirection: 'row'}}>

                  <Text style={styles.text}>
                    {rowData.tripname} 
                  </Text>
                 
                  </View>
                </TouchableOpacity>
                {/*}
                <TouchableOpacity onPress={this._showModal}>
                  <Icon name="favorite" size={35} color='#9013FE' style={{paddingTop:15}}/>
                </TouchableOpacity>
              */}
              </View>
            }
          />


        </View>
            

        
    );
  }
}

export default MyTrips;

const styles = StyleSheet.create({

  MainContainer :{
  // Setting up View inside content in Vertically center.
  justifyContent: 'center',
  flex:1,
  margin: 10
   
  },
 
  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingLeft:20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    color: '#9292AF',
    fontSize: 18,
    // fontWeight: 'bold',
    paddingTop: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});
