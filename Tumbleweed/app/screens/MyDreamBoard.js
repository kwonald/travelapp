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


import { Icon } from 'react-native-elements';

class MyDreamBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      isModalVisible: false,
      key: -1,
    }
  }

  onLearnMore = (rowData) => {
    this.props.navigation.navigate('UserDetail', rowData);
  }

 // use this function to add an activity to your dreamboard. 
  removeFromDreamboard = (rowData) =>{ 
    fetch('http://localhost:3000/removeFromDreamboard.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userID: 100,
        // city: rowData.city,
        // country: rowData.country,
        activityID: rowData.id_activity
        // add these two when event and places are added
        // remember to addd these fields to the php script
        // eventID: Username,
        // placeID: placeID
     
      })
     
    }).then((response) => response.json())
          .then((responseJson) => {
     
    // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
            
     
          }).catch((error) => {
            console.error(error);
          });


     
  }

  componentDidMount(){
     return fetch('http://localhost:3000/myDreamboard.php')
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
          
            
              <View style={{width: '100%', height: '25%', backgroundColor: '#fff', alignItems: 'flex-start', paddingLeft: 25, paddingBottom: 50, paddingTop: 25}}>
                  <View style={{flex: 1,  flexDirection: "row",  justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: 30, paddingLeft: 15, paddingRight: 15}}>
                    <Image
                      style={{height:15, width:15, paddingLeft: 15}}
                      source={require('../assets/explore/BurgerMenuIcon.png')}
                    />
                    <Image
                      style={{height:5, width:20, paddingRight: 15}}
                      source={require('../assets/explore/MoreIcon.png')}
                    />
                  </View>
               <Text style={{paddingLeft: 10, fontSize: 40, fontWeight: 'bold', color: '#9013FE'}}> My Dream Board </Text>
               
                <TextInput
                    style={{height: 40, paddingLeft: 15}}
                    placeholder="Find More ..."
                    // onChangeText={(country) => this.setState({country})}
                  />
              </View>
              
             <ListView
                dataSource={this.state.dataSource}
                // renderSeparator= {this.ListViewItemSeparator} 
                renderRow={(rowData) => 
                  <View style={{justifyContent: 'center', alignItems: 'center', paddingBottom: 15, paddingTop:15, width: '100%',}}>
                    <TouchableOpacity onPress={()=> this.onLearnMore(rowData)} >
                    
                      <Image
                          style={{height:150, width:350, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'flex-end', padding: 10}}
                          source={{uri:'https://s3.amazonaws.com/tumbleweed-files/app/site/Public/Images/Activity/' + rowData.id_activity + '_' + rowData.photo}}
                      >
                        {/*<Image style={{height: 13, width: 15, borderRadius: 5, backgroundColor: 'transparent'}} source={require('../assets/explore/heartsolo.png')}/> */}
                        <TouchableOpacity onPress={()=> this.removeFromDreamboard(rowData)} >
                          <Image style={{height: 30, width: 30, borderRadius: 5, backgroundColor: 'transparent'}} source={require('../assets/explore/heartSaved.png')}/>
                        </TouchableOpacity>
                      
                      </Image>
                      {/*}
                        <Text style={styles.text}>
                          {rowData.city}
                        </Text>
                      */}
                      <Text style={styles.text}>
                        {rowData.activityname} 
                      </Text>
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

export default MyDreamBoard;

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
