import React, { Component } from 'react';
import {
 Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';
import ModalDropdown from 'react-native-modal-dropdown';

class MyTrips extends Component {
  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };

  render() {
    return (
       <View style={{flex:1, backgroundColor: '#fff'}}>
          <ScrollView>
            
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

            <View style={{flex: 1, flexDirection: "row",  justifyContent: 'space-around', alignItems: 'flex-start', paddingTop: 15, paddingLeft: 5, paddingRight: 55}}>
              <Text style={{paddingLeft: 10, fontSize: 40, fontWeight: 'bold', color: '#9013FE'}}> My Trips </Text>
              <ModalDropdown textStyle={{fontSize: 16, padding: 10, color: '#9013FE'}} options={['Active', 'Dream', 'Complete', 'Wish']} defaultValue={'Active ...'}/>
            </View>

            <View style={{paddingTop:30, justifyContent:'center', alignItems:'center'}}>
              <TouchableOpacity >
                <Image
                  style={{height:150, width:250, borderRadius: 5,}}
                  source={require('../assets/explore/ExploreVancouverCard.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={{paddingTop:30, justifyContent:'center', alignItems:'center'}}>
              <TouchableOpacity >
                <Image
                  style={{height:150, width:250, borderRadius: 5,}}
                  source={require('../assets/explore/ExploreVancouverCard.png')}
                />
              </TouchableOpacity>
            </View>


            <View style={{paddingTop:30, justifyContent:'center', alignItems:'center'}}>
              <TouchableOpacity >
                <Image
                  style={{height:150, width:250, borderRadius: 5,}}
                  source={require('../assets/explore/ExploreVancouverCard.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={{paddingTop:30, justifyContent:'center', alignItems:'center'}}>
              <TouchableOpacity >
                <Image
                  style={{height:150, width:250, borderRadius: 5,}}
                  source={require('../assets/explore/ExploreVancouverCard.png')}
                />
              </TouchableOpacity>
            </View>

            

          </ScrollView>
        </View>
    );
  }
}

export default MyTrips;
