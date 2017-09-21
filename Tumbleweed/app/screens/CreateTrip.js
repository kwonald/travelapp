import React, { Component } from 'react';
import { AppRegistry, } from 'react-native';
import { ScrollView, Image, View, Text, TextInput, TouchableOpacity, Dimensions, TouchableHighlight, StyleSheet, WebView, Alert, Button } from 'react-native';
import Swiper from 'react-native-swiper';
import renderIf from '../config/renderIf';
import DateTimePicker from 'react-native-modal-datetime-picker';


class CreateTrip extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	     TripName: '',
	     TripType: null,
	     LeavingFrom: '',
	     GoingTo: '',
	     DeaprtDate: '',
	     ReturnDate: '',
	     isDateTimePickerVisible: false,
	     Emails: '',
	     Emails2: '',
	     Emails3: '',

	    };
    }

    InsertDataToServer = () =>{
 
 
     const { TripName }  = this.state ;
     const { TripType }  = this.state ;
     const { LeavingFrom }  = this.state ;
     const { GoingTo }  = this.state ;
     
     const { DeaprtDate }  = this.state ;
     const { ReturnDate }  = this.state ;
     
    fetch('http://localhost:3000/createTrip.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tripname: TripName,
        triptype: TripType,
        leavingfrom: LeavingFrom,
        goingto: GoingTo,
        departdate: DeaprtDate,
        returndate: ReturnDate
     
      })
     
    }).then((response) => response.json())
          .then((responseJson) => {
     
    // Showing response message coming from server after inserting records.
            // Alert.alert(responseJson);
     
          }).catch((error) => {
            // console.error(error);
          });
     
     	this.refs.swiper.scrollBy(1);
      }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
	_hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

	_handleDatePickedDepart = (date) => {
		this._hideDateTimePicker();
		this.setState({DeaprtDate: date.toString().substring(0,15)});
	}

	_goToMustSee = () => {
    this.props.navigation.navigate('MustSee');
    // this._hideModal();
  	}

  	_goToMyTrips = () => {
    this.props.navigation.navigate('MyTrips');
    // this._hideModal();
  	}

	_handleDatePickedReturn = (date) => {
		this._hideDateTimePicker();
		this.setState({ReturnDate: date.toString().substring(0,15)});
	}

    _setTripTypeSafari = () =>{
    	this.setState({TripType: 'Safari'});
    }

    _setTripTypeBeach = () =>{
    	this.setState({TripType: 'Beach'});
    }

    _setTripTypeSpiritual = () =>{
    	this.setState({TripType: 'Spiritual'});
    }

    _setTripTypeHistoricalSites = () =>{
    	this.setState({TripType: 'Historical Sites'});
    }

    _setTripTypeAdventure = () =>{
    	this.setState({TripType: 'Adventure'});
    }

    _setTripTypeCruise = () =>{
    	this.setState({TripType: 'Cruise'});
    }

    _setTripTypeRoadTrip = () =>{
    	this.setState({TripType: 'Road Trip'});
    }

    _setTripTypeWork = () =>{
    	this.setState({TripType: 'Work'});
    }

    _setTripTypeOther = () =>{
    	this.setState({TripType: 'Other'});
    }

  render() {
  	let countStatus;
    if(this.state.TripType != null ){
      countStatus = true;
    }
    else{
      countStatus = false;
    }
    return (
    	<Swiper ref='swiper' style={styles.wrapper} loop={false} showsButtons={false} showsPagination={false} pagingEnabled={true} scrollEnabled={false}>
    	

    		{/* Set name of your trip */}
    		<View style={styles.slide1}>
    			<View style={{flexDirection: 'row', backgroundColor: '#9013FE', width: '100%', height: '33%'}}>
    				<View style={{justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 20}}>
    					<Text style={{width: 250, fontSize: 25, color: '#fff', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
			              What is the name of your trip?
			            </Text>
    				</View>
    				<Image style={{height: 100, width: 100}} source={{uri:'https://s3.amazonaws.com/tumbleweed-files/app/site/Public/Images/Activity/3_the-louvre-24-1.jpg'}}/>

		            <Image
			          style={{
			            backgroundColor: '#9013FE',
			            // flex: 1,
			            // resizeMode: 'stretch',
			            width: '50%',
			            height: '100%',
			            justifyContent: 'center',
			            alignItems: 'flex-end',
			            paddingLeft: 25,
			          }}
			          source={require('../assets/createTrip/globe.png')}
			          >
		          </Image>
		        </View>
		        <Image style={{height: 70, width: 70}} source={require('../assets/createTrip/003-trip-name.png')}/>
    			<View style={{borderBottomColor: '#ccc', borderBottomWidth: 1, width: '80%'}}>
	    			<TextInput
						style={{height: 80, justifyContent: 'center', alignItems: 'center',}}
						placeholder="e.g. My Awesome Trip!"
						onChangeText={(TripName) => this.setState({TripName})}
						borderBottomColor="#ccc"
					/>
    			</View>
    			

				{renderIf(this.state.TripName != '', 
	              <TouchableHighlight style={{height:70, width:'100%', alignItems: 'center', paddingBottom: 5}} onPress={() => this.refs.swiper.scrollBy(1)}>
					<Image
	                  style={{flex:1}}
	                  source={require('../assets/createTrip/NextBtn.png')}
	                />
				  </TouchableHighlight>
	            )}

	            {renderIf(this.state.TripName == '',
            		<View style= {{height: 70, width: '100%', paddingBottom: 5}}/>
            	)}
	        </View>

	        {/* Set type of your trip */}
    		<View style={styles.slide1}>
    			<View style={{flexDirection: 'row', backgroundColor: '#9013FE', width: '100%', height: '33%'}}>
    				<View style={{justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 20}}>
    					<Text style={{width: 250, fontSize: 25, color: '#fff', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
			              What type of trip are you planning?
			            </Text>
    				</View>
		            <Image
			          style={{
			            backgroundColor: '#9013FE',
			            // flex: 1,
			            // resizeMode: 'stretch',
			            width: '50%',
			            height: '100%',
			            justifyContent: 'center',
			            alignItems: 'flex-end',
			            paddingLeft: 25,
			          }}
			          source={require('../assets/createTrip/globe.png')}
			          >
		          </Image>
		        </View>
		        <Image style={{height: 70, width: 70}} source={require('../assets/createTrip/007-what-type-of-trip.png')}/>
    			
		        <View styl={{flexDirection:'column'}}>
		            <View style={{flexDirection:'row'}}>
		              <TouchableOpacity onPress={this._setTripTypeSafari} style={styles.buttonWrapper}>
		                <Image
		                  style={styles.button}
		                  source={require('../assets/createTrip/safari.png')}
		                />
		              </TouchableOpacity>

		              <TouchableOpacity onPress={this._setTripTypeBeach} style={styles.buttonWrapper}>
		                <Image
		                  style={styles.button}
		                  source={require('../assets/createTrip/beach.png')}
		                />
		              </TouchableOpacity>

		              <TouchableOpacity onPress={this._setTripTypeSpiritual} style={styles.buttonWrapper}>
		                <Image
		                  style={styles.button}
		                  source={require('../assets/createTrip/spiritual.png')}
		                />
		              </TouchableOpacity>
		            </View>

		            <View style={{flexDirection:'row'}}>
		              <TouchableOpacity onPress={this._setTripTypeHistoricalSites} style={styles.buttonWrapper}>
		                <Image
		                  style={styles.button}
		                  source={require('../assets/createTrip/historicalSites.png')}
		                />
		              </TouchableOpacity>

		              <TouchableOpacity onPress={this._setTripTypeAdventure} style={styles.buttonWrapper}>
		                <Image
		                  style={styles.button}
		                  source={require('../assets/createTrip/adventure.png')}
		                />
		              </TouchableOpacity>

		              <TouchableOpacity onPress={this._setTripTypeCruise} style={styles.buttonWrapper}>
		                <Image
		                  style={styles.button}
		                  source={require('../assets/createTrip/cruise.png')}
		                />
		              </TouchableOpacity>
		            </View>

		            <View style={{flexDirection:'row'}}>
		              <TouchableOpacity onPress={this._setTripTypeRoadTrip} style={styles.buttonWrapper}>
		                <Image
		                  style={styles.button}
		                  source={require('../assets/createTrip/roadTrip.png')}
		                />
		              </TouchableOpacity>

		              <TouchableOpacity onPress={this._setTripTypeWork} style={styles.buttonWrapper}>
		                <Image
		                  style={styles.button}
		                  source={require('../assets/createTrip/work.png')}
		                />
		              </TouchableOpacity>

		              <TouchableOpacity onPress={this._setTripTypeOther} style={styles.buttonWrapper}>
		                <Image
		                  style={styles.button}
		                  source={require('../assets/createTrip/other.png')}
		                />
		              </TouchableOpacity>
		            </View>

		            
          		</View>




    			
		        {renderIf(countStatus, 
	              <TouchableHighlight style={{height:70, width:'100%', alignItems: 'center', paddingBottom: 5}} onPress={() => this.refs.swiper.scrollBy(1)}>
					<Image
	                  style={{flex:1}}
	                  source={require('../assets/createTrip/NextBtn.png')}
	                />
				  </TouchableHighlight>
	            )}

	            {renderIf(!countStatus,
            		<View style= {{height: 70, width: '100%', paddingBottom: 5}}/>
            	)}
				
	        </View>

	    	{/* Where are you leaving from/ going to? */}
	        <View style={styles.slide2}>
	            <View style={{flexDirection: 'row', backgroundColor: '#9013FE', width: '100%', height: '33%'}}>
    				<View style={{justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 20}}>
    					<Text style={{width: 250, fontSize: 25, color: '#fff', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
			              Where are you traveling to?
			            </Text>
    				</View>
		            <Image
			          style={{
			            backgroundColor: '#9013FE',
			            // flex: 1,
			            // resizeMode: 'stretch',
			            width: '50%',
			            height: '100%',
			            justifyContent: 'center',
			            alignItems: 'flex-end',
			            paddingLeft: 25,
			          }}
			          source={require('../assets/createTrip/globe.png')}
			          >
		          	</Image>
		        </View>
		        
		        <Image style={{height: 70, width: 70}} source={require('../assets/createTrip/002-where-going.png')}/>
		        <Text> Depart From </Text>
		        <View style={{borderBottomColor: '#ccc', borderBottomWidth: 1, width: '80%'}}>
	    			<TextInput
						style={{height: 80, justifyContent: 'center', alignItems: 'center',}}
						placeholder="e.g. Vancouver, BC, Canada"
						onChangeText={(LeavingFrom) => this.setState({LeavingFrom})}
						borderBottomColor="#ccc"
					/>
    			</View>
    			<Text> Traveling To </Text>
    			<View style={{borderBottomColor: '#ccc', borderBottomWidth: 1, width: '80%'}}>
	    			<TextInput
						style={{height: 80, justifyContent: 'center', alignItems: 'center',}}
						placeholder="e.g. Bangkok, Thailand"
						onChangeText={(GoingTo) => this.setState({GoingTo})}
						borderBottomColor="#ccc"
					/>
    			</View>

		        
		        
	            {renderIf(this.state.LeavingFrom != '' && this.state.GoingTo != '', 
	              <TouchableHighlight style={{height:70, width:'100%', alignItems: 'center', paddingBottom: 5}} onPress={() => this.refs.swiper.scrollBy(1)}>
					<Image
	                  style={{flex:1}}
	                  source={require('../assets/createTrip/NextBtn.png')}
	                />
				  </TouchableHighlight>
	            )}

	            {renderIf(this.state.LeavingFrom == '' || this.state.GoingTo == '',
            		<View style= {{height: 70, width: '100%', paddingBottom: 5}}/>
            	)} 
	        </View>

	        {/* When do you want to leave? */}
	        <View style={styles.slide2}>
	            <View style={{flexDirection: 'row', backgroundColor: '#9013FE', width: '100%', height: '33%'}}>
    				<View style={{justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 20}}>
    					<Text style={{width: 250, fontSize: 25, color: '#fff', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
			              What date do you take off?
			            </Text>
    				</View>
		            <Image
			          style={{
			            backgroundColor: '#9013FE',
			            // flex: 1,
			            // resizeMode: 'stretch',
			            width: '50%',
			            height: '100%',
			            justifyContent: 'center',
			            alignItems: 'flex-end',
			            paddingLeft: 25,
			          }}
			          source={require('../assets/createTrip/globe.png')}
			          >
		          	</Image>
		        </View>

		        <TouchableOpacity onPress={this._showDateTimePicker}>
		          <Image style={{height: 70, width: 70}} source={require('../assets/createTrip/005-depart.png')}/>
		        </TouchableOpacity>


		        <TouchableOpacity onPress={this._showDateTimePicker}>
		          <View style={{borderBottomColor: '#ccc', borderBottomWidth: 1, width: '80%'}}>
		          
			          <View style={{flexDirection: 'row', }}>
			          	<Text style={{color: '#ccc', fontSize: 22}}> Depart Date: </Text> 
				          {renderIf(this.state.DeaprtDate != '',
				        	<Text style={{fontSize: 22}}> {this.state.DeaprtDate}</Text>
				        	)}
				          {renderIf(this.state.ReturnDate == '',
				        	<Text style={{fontSize: 22, color: '#ccc'}}> ... </Text>
				        	)}
			          </View>

		          </View>
		        </TouchableOpacity>
		       
		        <DateTimePicker
		          isVisible={this.state.isDateTimePickerVisible}
		          onConfirm={this._handleDatePickedDepart}
		          onCancel={this._hideDateTimePicker}
		          datePickerModeAndroid='calendar'
		          mode='date'
		        />
		       
		        
		        
	            {renderIf(this.state.DeaprtDate != '', 
	              <TouchableHighlight style={{height:70, width:'100%', alignItems: 'center', paddingBottom: 5}} onPress={() => this.refs.swiper.scrollBy(1)}>
					<Image
	                  style={{flex:1}}
	                  source={require('../assets/createTrip/NextBtn.png')}
	                />
				  </TouchableHighlight>
	            )}

	            {renderIf(this.state.DeaprtDate == '',
            		<View style= {{height: 70, width: '100%', paddingBottom: 5}}/>
            	)}
	        </View>

	        {/* When are you coming back? */}
	        <View style={styles.slide2}>
	            <View style={{flexDirection: 'row', backgroundColor: '#9013FE', width: '100%', height: '33%'}}>
    				<View style={{justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 20}}>
    					<Text style={{width: 250, fontSize: 25, color: '#fff', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
			              What date do you return?
			            </Text>
    				</View>
		            <Image
			          style={{
			            backgroundColor: '#9013FE',
			            // flex: 1,
			            // resizeMode: 'stretch',
			            width: '50%',
			            height: '100%',
			            justifyContent: 'center',
			            alignItems: 'flex-end',
			            paddingLeft: 25,
			          }}
			          source={require('../assets/createTrip/globe.png')}
			          >
		          	</Image>
		        </View>

		         
		        <TouchableOpacity onPress={this._showDateTimePicker}>
		          <Image style={{height: 70, width: 70}} source={require('../assets/createTrip/004-return.png')}/>
		        </TouchableOpacity>
		        <TouchableOpacity onPress={this._showDateTimePicker}>
		          <View style={{borderBottomColor: '#ccc', borderBottomWidth: 1, width: '80%'}}>
		          
			          <View style={{flexDirection: 'row', }}>
			          	<Text style={{color: '#ccc', fontSize: 22}}> Return Date: </Text> 
				          {renderIf(this.state.ReturnDate != '',
				        	<Text style={{fontSize: 22}}> {this.state.ReturnDate}</Text>
				        	)}
				          {renderIf(this.state.ReturnDate == '',
				        	<Text style={{fontSize: 22, color: '#ccc'}}> ... </Text>
				        	)}
			          </View>

		          </View>
		        </TouchableOpacity>
		       
		        <DateTimePicker
		          isVisible={this.state.isDateTimePickerVisible}
		          onConfirm={this._handleDatePickedReturn}
		          onCancel={this._hideDateTimePicker}
		          datePickerModeAndroid='calendar'
		          mode='date'
		        />
		       
		        
	            {renderIf(this.state.ReturnDate != '', 
	              <TouchableHighlight style={{height:70, width:'100%', alignItems: 'center', paddingBottom: 5}} onPress={() => this.refs.swiper.scrollBy(1)}>
					<Image
	                  style={{flex:1}}
	                  source={require('../assets/createTrip/NextBtn.png')}
	                />
				  </TouchableHighlight>
	            )}

	            {renderIf(this.state.ReturnDate == '',
            		<View style= {{height: 70, width: '100%', paddingBottom: 5}}/>
            	)} 
	        </View>

	    	{/* Who's coming with you? */}
	        <View style={styles.slide2}>
	            <View style={{flexDirection: 'row', backgroundColor: '#9013FE', width: '100%', height: '33%'}}>
    				<View style={{justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 20}}>
    					<Text style={{width: 250, fontSize: 25, color: '#fff', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
			              {this.state.GoingTo}, Exciting! Who's coming with you?
			            </Text>
    				</View>
		            <Image
			          style={{
			            backgroundColor: '#9013FE',
			            // flex: 1,
			            // resizeMode: 'stretch',
			            width: '50%',
			            height: '100%',
			            justifyContent: 'center',
			            alignItems: 'flex-end',
			            paddingLeft: 25,
			          }}
			          source={require('../assets/createTrip/globe.png')}
			          >
		          	</Image>
		        </View>

		        <Image style={{height: 70, width: 70}} source={require('../assets/createTrip/006-who-else-is-coming.png')}/>
		        <Text> Their email: (You can add more later) </Text>
    			<View style={{borderBottomColor: '#ccc', borderBottomWidth: 1, width: '80%'}}>
	    			<TextInput
						style={{height: 80, justifyContent: 'center', alignItems: 'center',}}
						placeholder="e.g. emma@example.com"
						onChangeText={(Emails) => this.setState({Emails})}
						borderBottomColor="#ccc"
					/>
    			</View>
	            <View style={{borderBottomColor: '#ccc', borderBottomWidth: 1, width: '80%'}}>
	    			<TextInput
						style={{height: 80, justifyContent: 'center', alignItems: 'center',}}
						placeholder="e.g. somayan@example.com"
						onChangeText={(Emails2) => this.setState({Emails2})}
						borderBottomColor="#ccc"
					/>
    			</View>
	            <View style={{borderBottomColor: '#ccc', borderBottomWidth: 1, width: '80%'}}>
	    			<TextInput
						style={{height: 80, justifyContent: 'center', alignItems: 'center',}}
						placeholder="e.g. seungjae@example.com"
						onChangeText={(Emails3) => this.setState({Emails3})}
						borderBottomColor="#ccc"
					/>
    			</View>
	            
	              <TouchableHighlight style={{height:70, width:'100%', alignItems: 'center', paddingBottom: 5}} onPress={this.InsertDataToServer}>
					<Image
	                  style={{flex:1}}
	                  source={require('../assets/createTrip/NextBtn.png')}
	                />
				  </TouchableHighlight>	            
	        </View>

	    {/* Askk for recommendations or explore destination <Button title="Insert Text Input Data to Server" onPress={this.InsertDataToServer} color="#2196F3" />*/}
	        <View style={styles.slide2}>
	            <View style={{flexDirection: 'row', backgroundColor: '#9013FE', width: '100%', height: '33%'}}>
    				<View style={{justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 20}}>
    					<Text style={{width: 250, fontSize: 25, color: '#fff', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
			              {this.state.GoingTo}
			            </Text>
			            <Text style={{width: 250, fontSize: 14, color: '#fff', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
			              {this.state.DeaprtDate}
			            </Text>
			            <Text style={{width: 250, fontSize: 14, color: '#fff', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
			              {this.state.ReturnDate}
			            </Text>
    				</View>
		            <Image
			          style={{
			            backgroundColor: '#9013FE',
			            // flex: 1,
			            // resizeMode: 'stretch',
			            width: '50%',
			            height: '100%',
			            justifyContent: 'center',
			            alignItems: 'flex-end',
			            paddingLeft: 25,
			          }}
			          source={require('../assets/createTrip/globe.png')}
			          >
		          	</Image>
		        </View>

		        <Image style={{height: 70, width: 70}} source={require('../assets/createTrip/006-who-else-is-coming.png')}/>
		        <Text style={{fontSize: 18}}> Congratulations on setting up your trip. </Text>
		        <Text style={{fontSize: 12}}> What would you like to do next? </Text>
    			


	            <TouchableHighlight style={{height:60, width:'80%', alignItems: 'center', paddingBottom: 5}} >
				  	<View
			          style={{
			            backgroundColor: '#9013FE',
			            // flex: 1,
			            // resizeMode: 'stretch',
			            width: '100%',
			            height: 60,
			            justifyContent: 'center',
			            alignItems: 'center',
			          }}
			          >
						<Text style={{color: '#fff', fontSize: 20}}> Ask friends for recommendations </Text>
					</View>
				</TouchableHighlight>
	            

				<TouchableHighlight style={{height:100, width:'80%', alignItems: 'center',}} onPress={this._goToMustSee}  >
				  	<View
			          style={{
			            backgroundColor: '#9013FE',
			            // flex: 1,
			            // resizeMode: 'stretch',
			            width: '100%',
			            height: '100%',
			            justifyContent: 'center',
			            alignItems: 'flex-start',
			            paddingLeft: 20,
			          }}
			          >
						<Text style={{color: '#fff', fontSize: 20}}> Explore {this.state.GoingTo} </Text>
						<View style={{width: '70%'}}>
							<Text style={{color: '#fff', fontSize: 14}}> Discover the best places, activities and events in {this.state.GoingTo} </Text>
						</View>
					</View>
				</TouchableHighlight>

				<TouchableHighlight style={{height:40, width:'80%', alignItems: 'center', paddingBottom: 15}} onPress={this._goToMyTrips}>
				  	<View
			          style={{
			            backgroundColor: '#BD10E0',
			            // flex: 1,
			            // resizeMode: 'stretch',
			            width: '100%',
			            height: '100%',
			            justifyContent: 'center',
			            alignItems: 'center',
			          }}
			          >
						<Text style={{color: '#fff', fontSize: 16}}> Continue to trip dashboard </Text>
					</View>
				</TouchableHighlight>	            
	        </View>
	        

    	</Swiper>
        

       


    );
  }
}

export default CreateTrip;

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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide2: {
    flex: 1,
    justifyContent: 'space-between',
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
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  buttonWrapper:{
    padding: 7,
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  }
})