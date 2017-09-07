import React, { Component } from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';

class Me extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    return (
      <View style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <ScrollView>
          <View style={{flex:1}}>
             <Image
              style={{
                backgroundColor: '#fff',
                flex: 1,
                height:250, width:null,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.4)'
              }}
              source={require('../assets/explore/English-Bay.jpg')}
              >
                <Text style={{fontSize: 25, color: '#fff', justifyContent: 'flex-start', backgroundColor: 'rgba(0,0,0,0.1)',}}>
                  Laura Marie
                </Text>
                <View style={{alignItems: 'flex-start' }}>
                  <Text style={{fontSize:14, color: '#fff', backgroundColor: 'rgba(0,0,0,0.15)',}}> Explorer - Photographer - Icecream lover
                  </Text>
                  <Text style={{fontSize:14, alignItems: 'center', color: '#fff', backgroundColor: 'rgba(0,0,0,0.15)',}}> FB - INSTA - TW
                  </Text>
                </View>
                
              </Image>
              <View style={{alignItems: 'center'}}>
              <Image
                  style={{height:150, width:150, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}
                  source={require('../assets/onboarding/Account.png')}
                />
              </View>

              <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Text style={{fontSize:20, paddingRight: 25}}> 10 </Text>
                    
                    <Text style={{fontSize:20, paddingLeft: 25}}> 48 </Text>
                    
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    
                    <Text> Trips Completed </Text>
                    
                    <Text> Countries Visited </Text>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.header}> BIO </Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text style={styles.bodyLabel}> General </Text>
                <Text style={styles.bodyLabel}> Social </Text>
                <Text style={styles.bodyLabel}> Interests </Text>
              </View>
            

        </View>
        </ScrollView>  

        
      </View>
    );
  }
}

Me.defaultProps = { ...me };

export default Me;

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    color: '#000',
    paddingTop: 15,
    paddingLeft: 15,
    
  },
  location: {
    fontSize: 13,
    color: '#fff',
  },
  bodyLabel: {
    fontSize:16, 
    color: '#626366', 
    padding: 15,
  },

});
