import React, { Component } from 'react';
import {
ScrollView, Image, View, Text, TextInput, TouchableOpacity, Dimensions, TouchableHighlight, StyleSheet, ActivityIndicator, ListView, Alert } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { trips } from '../config/data';
import Modal from 'react-native-modal'

class Explore extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      isModalVisible: true,
    }
  }
  // state = {
  //   isModalVisible: true   //change to true for first time user
  // }
 
  _showModal = () => this.setState({ isModalVisible: true })
 
  _hideModal = () => this.setState({ isModalVisible: false })

  seeMustSee = () => {
    this.props.navigation.navigate('MustSee');
  }

  seeAllBeaches = () => {
    this.props.navigation.navigate('Beaches');
  }

  seeAllHikes = () => {
    this.props.navigation.navigate('Hikes');
  }

  seeAllRestaurants = () => {
    this.props.navigation.navigate('Restaurants');
  }

  seeAllSports = () => {
    this.props.navigation.navigate('Sports');
  }

  GetItem (activityname){
    Alert.alert(activityname);  // activityname
  }

  createTrip = () => {
    this._hideModal();
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
          <Text style={{paddingLeft: 10, fontSize: 40, fontWeight: 'bold', color: '#9013FE'}}> Explore </Text>
          <Text style={{paddingTop: 15, paddingLeft: 10, fontSize: 25, fontWeight: 'bold', color: '#9013FE'}}> Vancouver </Text>
          
        </View>

        <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems:'flex-start', paddingTop:20, paddingLeft: 20}}>
          <Image
            style={{height:25, width:25, paddingTop: 15, paddingRight:10}}
            source={require('../assets/explore/SearchIcon.png')}
          />
          <TextInput
            style={{height: 40, paddingLeft: 15}}
            placeholder="Type any place, activity, event, ..."
            // onChangeText={(country) => this.setState({country})}
          />
        </View>

        <View style={{flex:1}}>
            <View style={{flex:1, flexDirection: "row", justifyContent: 'space-between'}}>
              <Text style={{paddingTop: 15, paddingLeft: 10, fontSize: 25, fontWeight: 'normal', color: '#000'}}> Best Beaches </Text>
              <TouchableOpacity onPress={this.seeAllBeaches}>
                  <Text style={{paddingTop: 25, paddingLeft: 10, paddingRight:5,fontSize: 12, fontWeight: 'normal', color: '#000'}}> SEE ALL </Text>
              </TouchableOpacity>
            </View>

       
          <View style={{ flex:1, flexDirection: 'row'}}>
            <ScrollView horizontal={true}>
              <View style={{padding:5}}>
                <Image
                  style={{height:150, width:250,  borderRadius: 5,}}
                  source={require('../assets/explore/English-Bay.jpg')}
                />
                <Text style={{paddingTop: 10}}> English Bay </Text>
                <View style={{flexDirection: 'row', paddingTop:5}}>
                  <Image
                    style={{height:15, width:100,  }}
                    source={require('../assets/explore/StarsIcons.png')}
                   />
                   <Text style={{fontSize: 15}}> 295 Reviews </Text>
                </View>
              </View>
              
              <View style={{padding:5}}>
                <Image
                  style={{height:150, width:250, borderRadius: 5,}}
                  source={require('../assets/explore/Stearman-Beach.jpg')}
                />
                <Text style={{paddingTop: 10}}> Stearman Beach </Text>
                <View style={{flexDirection: 'row', paddingTop:5}}>
                  <Image
                    style={{height:15, width:100,  }}
                    source={require('../assets/explore/StarsIcons.png')}
                   />
                   <Text style={{fontSize: 15}}> 295 Reviews </Text>
                </View>
              </View>
              <View style={{padding:5}}>
                <Image
                  style={{height:150, width:250, borderRadius: 5,}}
                  source={require('../assets/explore/spanishbanksbeachpark.jpg')}
                />
                <Text style={{paddingTop: 10}}> Spanish Banks </Text>
                <View style={{flexDirection: 'row', paddingTop:5}}>
                  <Image
                    style={{height:15, width:100,  }}
                    source={require('../assets/explore/StarsIcons.png')}
                   />
                   <Text style={{fontSize: 15}}> 295 Reviews </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={{paddingTop:30, justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity onPress={this.seeMustSee}>
            <Image
              style={{height:150, width:250, borderRadius: 5,}}
              source={require('../assets/explore/ExploreVancouverCard.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', paddingTop: 30, justifyContent:'space-around', alignItems: 'center'}}>
          <Image
            style={{justifyContent: 'center',
            alignItems: 'center',
            width: 150,
            height: 150,
            borderRadius: 5,}}
            source={require('../assets/explore/Mountains.png')}
          />
          <Image
            style={{justifyContent: 'center',
            alignItems: 'center',
            width: 150,
            height: 150,
            borderRadius: 5,}}
            source={require('../assets/explore/Mountains.png')}
          />
        </View>

        <View style={{paddingTop:30}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{paddingTop: 15, paddingLeft: 10, fontSize: 25, fontWeight: 'normal', color: '#000'}}> Top Restaurants </Text>
            <TouchableOpacity onPress={this.seeAllRestaurants}>
                  <Text style={{paddingTop: 25, paddingLeft: 10, paddingRight:5, fontSize: 12, fontWeight: 'normal', color: '#000'}}> SEE ALL </Text>
              </TouchableOpacity>
          </View>
          
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
                  style={{justifyContent: 'center',
                  alignItems: 'center',
                  width: 150,
                  height: 150,
                  borderRadius: 5,}}
                  source={require('../assets/explore/CoastGlowbal.jpg')}
                />
              <Text style={{paddingTop: 10}}> Coast, Glowbal </Text>
              <View style={{flexDirection: 'row', paddingTop:5}}>
                <Image
                  style={{height:12, width:80,  }}
                  source={require('../assets/explore/StarsIcons.png')}
                 />
                 <Text style={{fontSize: 10}}> 465 Reviews </Text>
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

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{paddingTop: 30, paddingBottom:30, paddingLeft: 10, fontSize: 25, fontWeight: 'normal', color: '#000'}}> Top Hikes </Text>
          <TouchableOpacity onPress={this.seeAllHikes}>
                <Text style={{paddingTop: 35, paddingLeft: 10, fontSize: 12, paddingRight:5, fontWeight: 'normal', color: '#000'}}> SEE ALL </Text>
            </TouchableOpacity>
        </View>
        
        <View style={{ flex:1, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <View style={{padding:5}}>
              <Image
                style={{height:150, width:250,  borderRadius: 5,}}
                source={require('../assets/explore/eaglebluffs.jpg')}
              />
              <Text style={{paddingTop: 10}}> Eagle Bluffs </Text>
              <View style={{flexDirection: 'row', paddingTop:5}}>
                <Image
                  style={{height:15, width:100,  }}
                  source={require('../assets/explore/StarsIcons.png')}
                 />
                 <Text style={{fontSize: 15}}> 295 Reviews </Text>
              </View>
            </View>
            
            <View style={{padding:5}}>
              <Image
                style={{height:150, width:250, borderRadius: 5,}}
                source={require('../assets/explore/grousegrind.jpg')}
              />
              <Text style={{paddingTop: 10}}> Grouse Grind </Text>
              <View style={{flexDirection: 'row', paddingTop:5}}>
                <Image
                  style={{height:15, width:100,  }}
                  source={require('../assets/explore/StarsIcons.png')}
                 />
                 <Text style={{fontSize: 15}}> 295 Reviews </Text>
              </View>
            </View>
            <View style={{padding:5}}>
              <Image
                style={{height:150, width:250, borderRadius: 5,}}
                source={require('../assets/explore/thechief.jpg')}
              />
              <Text style={{paddingTop: 10}}> The Chief </Text>
              <View style={{flexDirection: 'row', paddingTop:5}}>
                <Image
                  style={{height:15, width:100,  }}
                  source={require('../assets/explore/StarsIcons.png')}
                 />
                 <Text style={{fontSize: 15}}> 295 Reviews </Text>
              </View>
            </View>
          </ScrollView>
        </View>


        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{paddingTop: 30, paddingBottom:30, paddingLeft: 10, fontSize: 25, fontWeight: 'normal', color: '#000'}}> Sports </Text>
          <TouchableOpacity onPress={this.seeAllSports}>
                <Text style={{paddingTop: 35, paddingLeft: 10, paddingRight:5, fontSize: 12, fontWeight: 'normal', color: '#000'}}> SEE ALL </Text>
            </TouchableOpacity>
        </View>
        
        <View style={{ flex:1, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <View style={{padding:5}}>
              <Image
                style={{height:150, width:250,  borderRadius: 5,}}
                source={require('../assets/explore/golfcourses.jpg')}
              />
              <Text style={{paddingTop: 10}}> Golf Courses </Text>
              
            </View>
            
            <View style={{padding:5}}>
              <Image
                style={{height:150, width:250, borderRadius: 5,}}
                source={require('../assets/explore/paddleboarding.jpeg')}
              />
              <Text style={{paddingTop: 10}}> Paddle Boarding </Text>
              
            </View>
            <View style={{padding:5}}>
              <Image
                style={{height:150, width:250, borderRadius: 5,}}
                source={require('../assets/explore/bclions.jpg')}
              />
              <Text style={{paddingTop: 10}}> BC Lions (Football) </Text>
              
            </View>
            <View style={{padding:5}}>
              <Image
                style={{height:150, width:250, borderRadius: 5,}}
                source={require('../assets/explore/whitecaps.jpg')}
              />
              <Text style={{paddingTop: 10}}> White Caps (Soccer) </Text>
              
            </View>
            <View style={{padding:5}}>
              <Image
                style={{height:150, width:250, borderRadius: 5,}}
                source={require('../assets/explore/canucks.jpg')}
              />
              <Text style={{paddingTop: 10}}> Canucks (Hockey) </Text>
              
            </View>
          </ScrollView>
        </View>
      
      </ScrollView>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold', paddingBottom: 40}}> Ready to plan your first trip, Laura? </Text>
             <Image
              style={{height:70, width:350}}
              source={require('../assets/_ModernPictograms/Gif/Thumbsup_Preview.gif')}
            />
            <TouchableOpacity onPress={this.createTrip} style={{height:100, width:350, paddingTop: 15}}>
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

export default Explore;
