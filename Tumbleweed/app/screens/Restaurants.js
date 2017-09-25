import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator, ListView, Alert
} from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import ModalDropdown from 'react-native-modal-dropdown';

class Restaurants extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      isModalVisible: false,
    }
  }


 // use this function to add an activity to your dreamboard. 
  addToDreamboard = (rowData) =>{ 
    fetch('http://localhost:3000/addToDreamboard.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userID: 100,
        city: rowData.city,
        country: rowData.country,
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

  onLearnMore = (rowData) => {
    this.props.navigation.navigate('UserDetail', rowData);
  }

  _showModal = () => this.setState({ isModalVisible: true })
 
  _hideModal = () => this.setState({ isModalVisible: false })

  componentDidMount(){
     return fetch('http://localhost:3000/restaurants.php')
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
          <View style={{width: '100%', height: '30%', backgroundColor: '#fff', alignItems: 'flex-start', paddingLeft: 25, paddingBottom: 50, paddingTop: 25}}>
            <Text style={{
              fontSize:25, 
              color: '#9013FE', 
              fontWeight: 'bold',
            }}> Discover </Text>
            <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, width: '80%'}}>
              <Text style={{fontSize: 16, padding:10, color: '#9013FE', }}> City:  </Text>
              <ModalDropdown textStyle={{fontSize: 16, padding: 10, color: '#9013FE', fontWeight: 'bold',}} options={['Vancouver', 'Bora Bora', 'Railay', 'Kenya', 'Dubai', 'Santorini']} defaultValue={'Vancouver'}/>
              
              {/*<Image
                style={{height:12, width:10,}}
                source={require('../assets/explore/ArrowIcon.png')}
              /> */}
            </View>
            <View style={{flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, width: '80%'}}>
              <Text style={{fontSize: 16, padding:10, color: '#9013FE', }}> Category: </Text>
              <ModalDropdown textStyle={{fontSize: 16, padding: 10, color: '#9013FE', fontWeight: 'bold'}} options={['Beaches', 'Sports', 'Hiking', 'Food', 'Spiritual', 'Festival', 'Restaurants']} defaultValue={'Restaurants'}/>
              
              {/*<Image
                style={{height:12, width:10,}}
                source={require('../assets/explore/ArrowIcon.png')}
              />*/}
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
                      source={{uri:'https://s3.amazonaws.com/tumbleweed-files/app/site/Public/Images/Activity/' + rowData.id_activity + '_' + rowData.photo}}
                  >
                    {/* by clicking on the heart you add this activity/place to your dreamboard. */}
                    <TouchableOpacity onPress={()=> this.addToDreamboard(rowData)} >
                      <Image style={{height: 13, width: 15, borderRadius: 5, backgroundColor: 'transparent'}} source={require('../assets/explore/heartsolo.png')}/>
                    </TouchableOpacity>
                    {/*                  
                    <Image style={{height: 30, width: 30, borderRadius: 5, backgroundColor: 'transparent'}} source={require('../assets/explore/heartSaved.png')}/>
                  */}


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
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold', paddingBottom: 40}}> Added To Your Dreamboard! </Text>
             <Image
              style={{height:70, width:350}}
              source={require('../assets/_ModernPictograms/Gif/Heart_Preview.gif')}
            />
            <TouchableOpacity onPress={this._hideModal} style={{height:100, width:350, paddingTop: 15}}>
            <Image
              style={{height:70, width:350, }}
              source={require('../assets/explore/createtrip.png')}
            />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={this._hideModal} style={{height:100, width:350}}>
            <Image
              style={{height:70, width:350}}
              source={require('../assets/explore/KeepExploring.png')}
            />
          </TouchableOpacity>
 
          </View>
        </Modal>

        </View>
      
    );
  }
}

export default Restaurants;

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