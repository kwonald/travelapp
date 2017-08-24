import React, { Component } from 'react';
import {
ScrollView, Image, View, Text, TextInput, TouchableOpacity, Dimensions, TouchableHighlight, StyleSheet
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { trips } from '../config/data';
import Modal from 'react-native-modal'

class Explore extends Component {
  state = {
    isModalVisible: true
  }
 
  _showModal = () => this.setState({ isModalVisible: true })
 
  _hideModal = () => this.setState({ isModalVisible: false })


  onLearnMore = (trip) => {
    this.props.navigation.navigate('Details', { ...trip });
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
        <Text style={{paddingTop: 15, paddingLeft: 10, fontSize: 25, fontWeight: 'normal', color: '#000'}}> Best Beaches </Text>
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

        <View style={{paddingTop:30, justifyContent:'center', alignItems:'center'}}>
          <Image
            style={{height:150, width:250, borderRadius: 5,}}
            source={require('../assets/explore/ExploreVancouverCard.png')}
          />
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
          <Text style={{paddingTop: 15, paddingLeft: 10, fontSize: 25, fontWeight: 'normal', color: '#000'}}> Top Restaurants </Text>
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

        <Text style={{paddingTop: 30, paddingBottom:30, paddingLeft: 10, fontSize: 25, fontWeight: 'normal', color: '#000'}}> Top Hikes </Text>
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


        <Text style={{paddingTop: 30, paddingBottom:30, paddingLeft: 10, fontSize: 25, fontWeight: 'normal', color: '#000'}}> Sports </Text>
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
      {/*}
        <List>
          {trips.map((trip) => (
            <ListItem
              key={trip.tripID}
              roundAvatar
              avatar={{ uri: trip.picture.first }}
              title={trip.title}
              subtitle={`${trip.name.first.toUpperCase()} ${trip.name.last.toUpperCase()}`}
              onPress={() => this.onLearnMore(trip)}
            />
          ))}
        </List>
      */}
      </ScrollView>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold', paddingBottom: 40}}> Ready to plan your first trip, Laura? </Text>
            <TouchableOpacity onPress={this._hideModal} style={{height:100, width:350}}>
            <Image
              style={{height:70, width:350}}
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

export default Explore;
