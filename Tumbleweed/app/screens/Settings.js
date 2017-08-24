import React, { Component } from 'react';
import { AppRegistry, } from 'react-native';
import { ScrollView, Image, View, Text, TextInput, TouchableOpacity, Dimensions, TouchableHighlight, StyleSheet, WebView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import { width, height, totalSize } from 'react-native-dimension';


class Settings extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: 0,
      height: 0,
      f_name: 'John',
      hometown: 'Enter Your Hometown',
      text: '',
      friends: '',
      country: '',
      city: '',
      date: ''
    };
    this.onDayPress = this.onDayPress.bind(this);
  } 

  render() {
    return (
      
      <Swiper style={styles.wrapper} loop={false} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Sign Up With FB</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Hey {this.state.f_name}. Enter your home town.</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Enter your hometown here!"
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
        </View>



        <View style={styles.slide3}>
        <ScrollView>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text1}>Final Step</Text>
          <Text style={styles.text2}>What are your travel interests?</Text>
          <Text style={styles.text3}>Pick any 3 to start</Text>
          </View>
          <View styl={{flexDirection:'column'}}>
            
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={this._onPressButton} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/my-icons-collection/png/006-sunbed.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/my-icons-collection/png/008-man-in-a-party-dancing-with-people.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/my-icons-collection/png/019-bike.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={this._onPressButton} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/my-icons-collection/png/022-golf-player.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/my-icons-collection/png/023-kayak.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/my-icons-collection/png/024-fishing-fish.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={this._onPressButton} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/my-icons-collection/png/026-climbing.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/my-icons-collection/png/032-hiking.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/my-icons-collection/png/034-travel.png')}
                />
              </TouchableOpacity>
            </View>

             <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={this._onPressButton} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/my-icons-collection/png/006-sunbed.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/my-icons-collection/png/008-man-in-a-party-dancing-with-people.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/my-icons-collection/png/019-bike.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={this._onPressButton} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/my-icons-collection/png/022-golf-player.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/my-icons-collection/png/023-kayak.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/my-icons-collection/png/024-fishing-fish.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={this._onPressButton} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/my-icons-collection/png/026-climbing.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/my-icons-collection/png/032-hiking.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressButton} style={styles.buttonWrapper}>
                <Image
                  style={styles.button}
                  source={require('../assets/my-icons-collection/png/034-travel.png')}
                />
              </TouchableOpacity>
            </View>

          </View>
          </ScrollView>
        </View>
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



       
      </Swiper>

    );
  }
  
  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

export default Settings;

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