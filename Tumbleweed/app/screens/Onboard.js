import React, { Component } from 'react';
import { AppRegistry, } from 'react-native';
import { ScrollView, Image, View, Text, TextInput, TouchableOpacity, Dimensions, TouchableHighlight, StyleSheet, WebView, Alert } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import { width, height, totalSize } from 'react-native-dimension';

import renderIf from '../config/renderIf';
import Modal from 'react-native-modal';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
} = FBSDK;
      
var Login = React.createClass({
  render: function() {
    return (
      <View>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions);
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
  }
});


class Onboard extends Component {

  InsertDataToServer = () =>{
 
 
     const { TextInputName }  = this.state ;
     const { Lastname }  = this.state ;
     const { TextInputEmail }  = this.state ;
     // const { TextInputPhoneNumber }  = this.state ;
     const { Password }  = this.state ;
     const { Username }  = this.state ;
     
    fetch('http://localhost:3000/createUser.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: TextInputName,
        l_name: Lastname,
        email: TextInputEmail,
        password: Password,
        username: Username
     
      })
     
    }).then((response) => response.json())
          .then((responseJson) => {
     
    // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
     
          }).catch((error) => {
            console.error(error);
          });
     
     
  }
  // state = {
  //   isModalVisible: false
  // }
 
  // _showModal = () => this.setState({ isModalVisible: true })
 
  // _hideModal = () => this.setState({ isModalVisible: false })

  _onPressButton = () => {
    this.props.navigation.navigate('Root');
    // this._hideModal();
  };

  _onPressButtonAdventure = () =>{
    if(this.state.adventure){
      this.setState(previousState => {
        return{
          adventure: !previousState.adventure,
          count:previousState.count-1,
        }
      })
    }
    else{
      this.setState(previousState => {
         return {
           adventure: !previousState.adventure,
           count: previousState.count+1,
        };
      });
    }
  };

  _onPressButtonBeaches = () =>{
    if(this.state.beaches){
      this.setState(previousState => {
        return{
          beaches: !previousState.beaches,
          count:previousState.count-1,
        }
      })
    }
    else{
      this.setState(previousState => {
         return {
           beaches: !previousState.beaches,
           count: previousState.count+1,
        };
      });
    }
  };

  _onPressButtonFood = () =>{
    if(this.state.food){
      this.setState(previousState => {
        return{
          food: !previousState.food,
          count:previousState.count-1,
        }
      })
    }
    else{
      this.setState(previousState => {
         return {
           food: !previousState.food,
           count: previousState.count+1,
        };
      });
    }
  };

  _onPressButtonWildLife = () =>{
    if(this.state.wildlife){
      this.setState(previousState => {
        return{
          wildlife: !previousState.wildlife,
          count:previousState.count-1,
        }
      })
    }
    else{
      this.setState(previousState => {
         return {
           wildlife: !previousState.wildlife,
           count: previousState.count+1,
        };
      });
    }
  };


  _onPressButtonRuins = () => {
    if(this.state.ruins){
      this.setState(previousState => {
        return{
          ruins: !previousState.ruins,
          count:previousState.count-1,
        }
      })
    }
    else{
      this.setState(previousState => {
         return {
           ruins: !previousState.ruins,
           count: previousState.count+1,
        };
      });
    }
    
  };

  _onPressButtonCruises = () => {
    if(this.state.cruises){
      this.setState(previousState => {
        return{
          cruises: !previousState.cruises,
          count:previousState.count-1,
        }
      })
    }
    else{
      this.setState(previousState => {
         return {
           cruises: !previousState.cruises,
           count: previousState.count+1,
        };
      });
    }
  };

  _onPressButtonFishing = () => {
    if(this.state.fishing){
      this.setState(previousState => {
        return{
          fishing: !previousState.fishing,
          count:previousState.count-1,
        }
      })
    }
    else{
      this.setState(previousState => {
         return {
           fishing: !previousState.fishing,
           count: previousState.count+1,
        };
      });
    }
  };

  _onPressButtonSpiritual = () => {
    if(this.state.spiritual){
      this.setState(previousState => {
        return{
          spiritual: !previousState.spiritual,
          count:previousState.count-1,
        }
      })
    }
    else{
      this.setState(previousState => {
         return {
           spiritual: !previousState.spiritual,
           count: previousState.count+1,
        };
      });
    }
  };

  _onPressButtonFestival = () => {
    if(this.state.festivals){
      this.setState(previousState => {
        return{
          festivals: !previousState.festivals,
          count:previousState.count-1,
        }
      })
    }
    else{
      this.setState(previousState => {
         return {
           festivals: !previousState.festivals,
           count: previousState.count+1,
        };
      });
    }
    
  };

  _onPressButtonSports = () => {
    if(this.state.sports){
      this.setState(previousState => {
        return{
          sports: !previousState.sports,
          count:previousState.count-1,
        }
      })
    }
    else{
      this.setState(previousState => {
         return {
           sports: !previousState.sports,
           count: previousState.count+1,
        };
      });
    }
  };

  _onPressButtonBoating = () => {
    if(this.state.boating){
      this.setState(previousState => {
        return{
          boating: !previousState.boating,
          count:previousState.count-1,
        }
      })
    }
    else{
      this.setState(previousState => {
         return {
           boating: !previousState.boating,
           count: previousState.count+1,
        };
      });
    }
  };

  _onPressButtonRoadTrips = () => {
    if(this.state.roadtrip){
      this.setState(previousState => {
        return{
          roadtrip: !previousState.roadtrip,
          count:previousState.count-1,
        }
      })
    }
    else{
      this.setState(previousState => {
         return {
           roadtrip: !previousState.roadtrip,
           count: previousState.count+1,
        };
      });
    }
  };


  constructor(props){
    super(props);
    this.state = {
      width: 0,
      height: 0,
      f_name: 'Laura',
      hometown: 'Enter Your Hometown',
      text: '',
      friends: '',
      country: '',
      city: '',
      date: '',
      adventure: false,
      beaches: false,
      food: false,
      wildlife: false,
      ruins: false,
      cruises: false,
      fishing: false,
      spiritual: false,
      festival: false,
      sports: false,
      boating: false,
      roadtrip: false,
      count: 0,

      loggedIn: true,

      TextInputName: '',

      Lastname: '',
   
      TextInputEmail: '',

      Password: '',
   
      Username: ''
    };
    this.onDayPress = this.onDayPress.bind(this);
  } 



  render() {
    
    let countStatus;
    if(this.state.count >= 3){
      countStatus = true;
    }
    else{
      countStatus = false;
    }
    return (
        
       <Swiper ref='swiper' style={styles.wrapper} loop={false} showsButtons={false} showsPagination={false} pagingEnabled={true} scrollEnabled={false}>
        <View style={styles.slide1}>
        <Image
          style={{
            backgroundColor: '#ccc',
            flex: 1,
            resizeMode: 'stretch',
            width: '100%',
            height: '100%',
            justifyContent: 'space-around',
            paddingLeft: 15,
            backgroundColor: 'rgba(0,0,0,0.4)'
          }}
          source={require('../assets/onboarding/eiffel.jpg')}
          >
            <Text style={{width:200, fontSize: 25, color: '#fff', justifyContent: 'flex-start', backgroundColor: 'rgba(0,0,0,0.1)',}}>
              Welcome to Tumbleweed
            </Text>
            <View style={{width:200, alignItems: 'flex-start' }}>
              <Text style={{fontSize:14, color: '#fff', backgroundColor: 'rgba(0,0,0,0.15)',}}> Plan the best travel experiences of your life. Explore out amazing planet. Create your greatest memories. Go everywhere!
              </Text>
            </View>
            <Login />

            {renderIf(this.state.loggedIn, 
                <TouchableHighlight style={{height:70, width:'100%', alignItems: 'center', paddingBottom: 5}} onPress={() => this.refs.swiper.scrollBy(1)}>
                  <Image
                      style={{flex:1}}
                      source={require('../assets/createTrip/NextBtn.png')}
                    />
                </TouchableHighlight>
              )}

              {renderIf(!this.state.loggedIn,
                <View style= {{height: 70, width: '100%', paddingBottom: 5}}/>
              )}



          </Image>

        </View>
        <View style={styles.slide2}>
          <Text style={styles.text1}>Welcome to Tumbleweed, {this.state.f_name}</Text>
          
          <Image
            style={{height:150, width:150}}
            source={require('../assets/onboarding/Account.png')}
          />
          <Text style={styles.text2}>Let's quickly set up your account.</Text>
          <Image
            style={{height:40, width:40}}
            source={require('../assets/onboarding/home.png')}
          />

          <Text style={styles.text2}>Where is home base?</Text>
          <Text style={styles.text3}> Vancouver, BC, Canada </Text>
          <TextInput
            style={{height: 80, paddingBottom: 50}}
            placeholder="Enter your hometown here!"
            onChangeText={(text) => this.setState({text})}
          />
          <TouchableHighlight style={{height:70, width:'100%', alignItems: 'center', paddingBottom: 5}} onPress={() => this.refs.swiper.scrollBy(1)}>
            <Image
                style={{flex:1}}
                source={require('../assets/createTrip/NextBtn.png')}
              />
          </TouchableHighlight>
          
        </View>

        <View style={styles.slide3}>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text1}>Final Step</Text>
          <Text style={styles.text2}>What are your travel interests?</Text>
          <Text style={styles.text3}>Pick any 3 to start</Text>
          
          </View>
          <ScrollView> 
          <View styl={{flexDirection:'column'}}>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={this._onPressButtonAdventure} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/onboarding/AdventureCard.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={this._onPressButtonBeaches} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/onboardingCards/beaches.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={this._onPressButtonFood} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/onboardingCards/food.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={this._onPressButtonWildLife} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/onboardingCards/wildlife.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={this._onPressButtonRuins} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/onboardingCards/ruins.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={this._onPressButtonCruises} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/onboardingCards/cruises.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={this._onPressButtonFishing} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/onboardingCards/fishing.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={this._onPressButtonSpiritual} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/onboardingCards/spiritual.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={this._onPressButtonFestival} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/onboardingCards/festival.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={this._onPressButtonSports} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/onboardingCards/sports.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={this._onPressButtonBoating} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/onboardingCards/boating.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={this._onPressButtonRoadTrips} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/onboardingCards/roadtrip.png')}
                />
              </TouchableOpacity>
            </View>

            

          </View>
          </ScrollView>
          {renderIf(countStatus, 
              <TouchableOpacity onPress={this._onPressButton} style={{height:100, width:350}}>
                <Image
                  style={{height:70, width:350}}
                  source={require('../assets/onboarding/ReserveButton.png')}
                />
              </TouchableOpacity>
            )}
        </View>
      </Swiper>

    );
  }
  
  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

export default Onboard;

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
    justifyContent: 'space-around',
    
    backgroundColor: '#ccc',
  },
  slide2: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide3: {
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
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: 'normal',
    paddingTop: 50
  },
  text2: {
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'normal',
    paddingTop: 20,
  },
  text3: {
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    padding:30
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderRadius: 5,
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