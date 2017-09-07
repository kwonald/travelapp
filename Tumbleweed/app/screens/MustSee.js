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

class MustSee extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      isModalVisible: false,
    }
  }

  onLearnMore = (rowData) => {
    this.props.navigation.navigate('UserDetail', rowData);
  }

  _showModal = () => this.setState({ isModalVisible: true })
 
  _hideModal = () => this.setState({ isModalVisible: false })

  GetItem (activityname){
    Alert.alert(activityname);  // activityname
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
      
        <View style={{flex:1, backgroundColor: '#6172E1'}}>
          <ScrollView>
          <View style={{flex: 1,  justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 15, paddingLeft: 5, paddingRight: 55}}>
            <Text style={{paddingLeft: 10, fontSize: 40, fontWeight: 'bold', color: '#fff'}}> Must See </Text>
            <Text style={{paddingTop: 15, paddingLeft: 10, fontSize: 25, fontWeight: 'bold', color: '#fff'}}> Vancouver </Text>
          </View>
          
          <View style={{flex: 1, flexDirection: "row",  justifyContent: 'space-around', alignItems: 'flex-start', paddingTop: 15, paddingLeft: 5, paddingRight: 55}}>
            <Text style={{paddingLeft: 10, fontSize: 28, fontWeight: 'bold', color: '#fff'}}> Our Top 10 </Text>
            <ModalDropdown textStyle={{fontSize: 16, padding: 10, color: 'white'}} options={['Beaches', 'Sports', 'Hiking', 'Food', 'Spiritual', 'Festival']} defaultValue={'Categories...'}/>
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
                <Text style={{paddingTop: 10, color: '#fff'}}> Tacofino </Text>
                <View style={{flexDirection: 'row', paddingTop:5}}>
                  <Image
                    style={{height:12, width:80,  }}
                    source={require('../assets/explore/StarsIcons.png')}
                   />
                   <Text style={{fontSize: 10, color: '#fff'}}> 779 Reviews </Text>
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
                <Text style={{paddingTop: 10, color: '#fff'}}> Coast, Glowbal </Text>
                <View style={{flexDirection: 'row', paddingTop:5}}>
                  <Image
                    style={{height:12, width:80,  }}
                    source={require('../assets/explore/StarsIcons.png')}
                   />
                   <Text style={{fontSize: 10, color: '#fff'}}> 465 Reviews </Text>
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
                <Text style={{paddingTop: 10, color: '#fff'}}> Hoke Poke </Text>
                <View style={{flexDirection: 'row', paddingTop:5}}>
                  <Image
                    style={{height:12, width:80,  }}
                    source={require('../assets/explore/StarsIcons.png')}
                   />
                   <Text style={{fontSize: 10, color: '#fff'}}> 281 Reviews </Text>
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
                <Text style={{paddingTop: 10, color: '#fff'}}> Virtous Pie (Vegan) </Text>
                <View style={{flexDirection: 'row', paddingTop:5}}>
                  <Image
                    style={{height:12, width:80,  }}
                    source={require('../assets/explore/StarsIcons.png')}
                   />
                   <Text style={{fontSize: 10, color: '#fff'}}> 526 Reviews </Text>
                </View>
              </View>
              
              
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
                <Text style={{paddingTop: 10, color: '#fff'}}> Tacofino </Text>
                <View style={{flexDirection: 'row', paddingTop:5}}>
                  <Image
                    style={{height:12, width:80,  }}
                    source={require('../assets/explore/StarsIcons.png')}
                   />
                   <Text style={{fontSize: 10, color: '#fff'}}> 779 Reviews </Text>
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
                <Text style={{paddingTop: 10, color: '#fff'}}> Coast, Glowbal </Text>
                <View style={{flexDirection: 'row', paddingTop:5}}>
                  <Image
                    style={{height:12, width:80,  }}
                    source={require('../assets/explore/StarsIcons.png')}
                   />
                   <Text style={{fontSize: 10, color: '#fff'}}> 465 Reviews </Text>
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
                <Text style={{paddingTop: 10, color: '#fff'}}> Hoke Poke </Text>
                <View style={{flexDirection: 'row', paddingTop:5}}>
                  <Image
                    style={{height:12, width:80,  }}
                    source={require('../assets/explore/StarsIcons.png')}
                   />
                   <Text style={{fontSize: 10, color: '#fff'}}> 281 Reviews </Text>
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
                <Text style={{paddingTop: 10, color: '#fff'}}> Virtous Pie (Vegan) </Text>
                <View style={{flexDirection: 'row', paddingTop:5}}>
                  <Image
                    style={{height:12, width:80,  }}
                    source={require('../assets/explore/StarsIcons.png')}
                   />
                   <Text style={{fontSize: 10, color: '#fff'}}> 526 Reviews </Text>
                </View>
              </View>
              
              
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
                <Text style={{paddingTop: 10, color: '#fff'}}> Tacofino </Text>
                <View style={{flexDirection: 'row', paddingTop:5}}>
                  <Image
                    style={{height:12, width:80,  }}
                    source={require('../assets/explore/StarsIcons.png')}
                   />
                   <Text style={{fontSize: 10, color: '#fff'}}> 779 Reviews </Text>
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
                <Text style={{paddingTop: 10, color: '#fff'}}> Coast, Glowbal </Text>
                <View style={{flexDirection: 'row', paddingTop:5}}>
                  <Image
                    style={{height:12, width:80,  }}
                    source={require('../assets/explore/StarsIcons.png')}
                   />
                   <Text style={{fontSize: 10, color: '#fff'}}> 465 Reviews </Text>
                </View>
              </View>           
            </View>

          </View>
          
          {/*}
          <ListView
            dataSource={this.state.dataSource}
            renderSeparator= {this.ListViewItemSeparator} 
            renderRow={(rowData) => 
              <View style={{justifyContent: 'center', alignItems: 'center', paddingBottom: 15, paddingTop:15}}>
                <TouchableOpacity onPress={()=> this.onLearnMore(rowData)} >
                  <Image
                    style={{height:150, width:250, borderRadius: 5,}}
                    source={require('../assets/explore/English-Bay.jpg')}
                  />

                  <Text style={styles.text}>
                    {rowData.city}
                  </Text>
                  <Text style={styles.text}>
                    {rowData.activityname} 
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._showModal}>
                  <Icon name="favorite" size={35} color='#fff' style={{paddingTop:15}}/>
                </TouchableOpacity>
              </View>

            }
          />
        */}


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
          </ScrollView>
        </View>
      
    );
  }
}

export default MustSee;

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
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
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