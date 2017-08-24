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

class MyDreamBoard extends Component {
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
              <Text style={{paddingLeft: 10, fontSize: 40, fontWeight: 'bold', color: '#9013FE'}}> My Dream Board </Text>
              <Text style={{paddingTop: 15, paddingLeft: 10, fontSize: 25, fontWeight: 'bold', color: '#9013FE'}}>  </Text>
            </View>

            <View style={{paddingTop:30}}>
              
              <View style={{flexDirection: 'row',paddingTop: 20, justifyContent:'space-around', alignItems: 'center'}}>
                <View>
                   <Image
                      style={{justifyContent: 'center',
                      alignItems: 'center',
                      width: 150,
                      height: 150,
                      borderRadius: 5,}}
                      source={require('../assets/explore/Tacofino.jpg')}
                    />
                  <Text style={{paddingTop: 10}}> Tacofino </Text>
                  <View style={{flexDirection: 'row', paddingTop:5}}>
                    <Image
                      style={{height:12, width:80,  }}
                      source={require('../assets/explore/StarsIcons.png')}
                     />
                     <Text style={{fontSize: 10}}> 779 Reviews </Text>
                  </View>
                </View>

                <View>
                  <Image
                    style={{height:150, width:150,  borderRadius: 5,}}
                    source={require('../assets/explore/English-Bay.jpg')}
                  />
                  <Text style={{paddingTop: 10}}> English Bay </Text>
                  <View style={{flexDirection: 'row', paddingTop:5}}>
                    <Image
                      style={{height:12, width:80,  }}
                      source={require('../assets/explore/StarsIcons.png')}
                     />
                     <Text style={{fontSize: 10}}> 295 Reviews </Text>
                  </View>
                </View>         
              </View>

              <View style={{flexDirection: 'row', paddingTop: 20, justifyContent:'space-around', alignItems: 'center'}}>
                <View>
                   <Image
                      style={{justifyContent: 'center',
                      alignItems: 'center',
                      width: 150,
                      height: 150,
                      borderRadius: 5,}}
                      source={require('../assets/explore/hokepoke.png')}
                    />
                  <Text style={{paddingTop: 10}}> Hoke Poke </Text>
                  <View style={{flexDirection: 'row', paddingTop:5}}>
                    <Image
                      style={{height:12, width:80,  }}
                      source={require('../assets/explore/StarsIcons.png')}
                     />
                     <Text style={{fontSize: 10}}> 281 Reviews </Text>
                  </View>
                </View>

                <View>
                   <Image
                    style={{justifyContent: 'center',
                    alignItems: 'center',
                    width: 150,
                    height: 150,
                    borderRadius: 5,}}
                    source={require('../assets/explore/virtouspie.jpg')}
                  />
                  <Text style={{paddingTop: 10}}> Virtous Pie (Vegan) </Text>
                  <View style={{flexDirection: 'row', paddingTop:5}}>
                    <Image
                      style={{height:12, width:80,  }}
                      source={require('../assets/explore/StarsIcons.png')}
                     />
                     <Text style={{fontSize: 10}}> 526 Reviews </Text>
                  </View>
                </View>
                
                
              </View>
            </View>

          </ScrollView>
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
