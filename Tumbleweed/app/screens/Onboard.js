import React, { Component } from 'react';
import { AppRegistry, } from 'react-native';
import { ScrollView, Image, View, Text, TextInput, TouchableOpacity, Dimensions, TouchableHighlight, StyleSheet, WebView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import { width, height, totalSize } from 'react-native-dimension';

import renderIf from '../config/renderIf';
import Modal from 'react-native-modal';



class Onboard extends Component {

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
      count: 0
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
        
       <Swiper style={styles.wrapper} loop={false} showsButtons={true} showsPagination={false}>
       {/*
        
        
        <TouchableOpacity onPress={this._onPressButton} style={{height:100, width:350}}>
                <Image
                  style={{height:70, width:350}}
                  source={require('../assets/onboarding/ReserveButton.png')}
                />
              </TouchableOpacity>
        */}
        <View style={styles.slide1}>
          <Image
          style={{height:730, width:375}}
          source={require('../assets/onboarding/BlurOverlay.png')}
          />
          


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
          
        </View>

        <View style={styles.slide3}>
        <ScrollView>
        
        {/*}
        <Text style={{fontSize:16, color: '#bcd756', paddingTop: 15,}}> {adventureStatus} </Text>
        <Text style={{fontSize:16, color: '#bcd756', paddingTop: 15,}}> {beachStatus} </Text>
        <Text style={{fontSize:16, color: '#bcd756', paddingTop: 15,}}> {foodStatus} </Text>
        <Text style={{fontSize:16, color: '#bcd756', paddingTop: 15,}}> {wildlifeStatus} </Text>  
        <Text style={{fontSize:16, color: '#bcd756', paddingTop: 15,}}> {this.state.count} </Text>
        <TouchableOpacity onPress={this._showModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={this._onPressButton} style={{height:100, width:350}}>
            <Image
              style={{height:70, width:350}}
              source={require('../assets/onboarding/ReserveButton.png')}
            />
          </TouchableOpacity>
          </View>
        </Modal>
      */}
          
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text1}>Final Step</Text>
          <Text style={styles.text2}>What are your travel interests?</Text>
          <Text style={styles.text3}>Pick any 3 to start</Text>
          {renderIf(countStatus, 
              <TouchableOpacity onPress={this._onPressButton} style={{height:100, width:350}}>
                <Image
                  style={{height:70, width:350}}
                  source={require('../assets/onboarding/ReserveButton.png')}
                />
              </TouchableOpacity>
            )}
          </View>
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
        </View>
        {/*}
        <View style={styles.slide1}>
          <Text style={styles.text}>Who's Coming?</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Enter their email!"
            onChangeText={(friends) => this.setState({friends})}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.friends.split(' ').map((word) => word && '🐱').join(' ')}
          </Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Have a country in mind?</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Enter country name or skip"
            onChangeText={(country) => this.setState({country})}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.country.split(' ').map((word) => word && '🇹🇭').join(' ')}
          </Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Any cities in particular?</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Enter city name or skip"
            onChangeText={(city) => this.setState({city})}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.city.split(' ').map((word) => word && '🏙️').join(' ')}
          </Text> 
        </View>



        <View style={styles.slide1}>
          <Text style={styles.text}>When do you want to go?</Text>
          
            <Calendar
              onDayPress={this.onDayPress}
              style={styles.calendar}
              hideExtraDays
              markedDates={{[this.state.selected]: {selected: true}}} 
            />
          
        </View>
      */}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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