import React, { Component } from 'react';
import { ScrollView, Image, View, StyleSheet, TouchableHighlight, Text, TouchableOpacity,  } from 'react-native';
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
  // handleSettingsPress = () => {
  //   this.props.navigation.navigate('Cart');
  // };
  render() {
    const { activityname, city, country, description } = this.props.navigation.state.params;

    return (
      <View style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <ScrollView>
          <View>
          <Image
            style={{height:250, width:null,}}
            source={require('../assets/explore/English-Bay.jpg')}
          />
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Text style={styles.header}> {activityname} </Text>
              <TouchableOpacity onPress={this._showModal}>
                <Image style={{height: 30, width: 30, borderRadius: 5, backgroundColor: 'transparent'}} source={require('../assets/explore/heartSaved.png')} />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <Text style={styles.location}> {city} </Text>
              <Text style={styles.location}> {country} </Text>
            </View>
            
                
            <Text style={styles.header}> Description </Text>
            <Text style={styles.bodyLabel}> {description} </Text>

        </View>
        </ScrollView>  

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
