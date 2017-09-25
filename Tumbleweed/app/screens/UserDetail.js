import React, { Component } from 'react';
import { ScrollView, Image, View, StyleSheet, TouchableHighlight, Text, TouchableOpacity, Alert } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
class UserDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalVisible: false,
    }
  }
    _showModal = () => this.setState({ isModalVisible: true })
 
    _hideModal = () => this.setState({ isModalVisible: false })


   // use this function to add an activity to your dreamboard. 
  addToDreamboard = (city, country, id_activity) =>{ 
    fetch('http://localhost:3000/addToDreamboard.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userID: 100,
        city: city,
        country: country,
        activityID: id_activity
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
  render() {
    const { activityname, city, country, description, id_activity, photo } = this.props.navigation.state.params;

    return (
      <View style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <ScrollView>
          
          <Image
            style={{height:250, width:null,}}
            source={{uri:'https://s3.amazonaws.com/tumbleweed-files/app/site/Public/Images/Activity/' + id_activity + '_' + photo}}
          />
            <View style={{flexDirection: 'row', justifyContent: 'space-between' , padding:5}}>
              <Text style={styles.header}> {activityname} </Text>
              <TouchableOpacity onPress={()=> this.addToDreamboard(city, country, id_activity)}>
                <Image style={{height: 30, width: 30, borderRadius: 5, backgroundColor: 'transparent'}} source={require('../assets/explore/heartSaved.png')} />
              </TouchableOpacity>
            </View>



            <View style={{flexDirection: 'row', justifyContent: 'flex-start', padding:10}}>
              <Text style={styles.location}> {city} </Text>
              <Text style={styles.location}> {country} </Text>
            </View>
            
            <View style={{justifyContent:'center', alignItems:'center',}}>
              <Image style = {{height:150, width:'80%',}} source={require('../assets/explore/googleMap.png')} borderRadius={5} />
            </View>
            
            <Text style={styles.header}> Description </Text>
            <Text style={styles.bodyLabel}> {description} </Text>

        
        </ScrollView>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: '#000',
    paddingTop: 15,
    paddingLeft: 15,
    
  },
  location: {
    fontSize: 13,
    color: '#626366',
    paddingLeft: 15,
  },
  bodyLabel: {
    fontSize:16, 
    color: '#626366', 
    padding: 15,
  },

});

export default UserDetail;
