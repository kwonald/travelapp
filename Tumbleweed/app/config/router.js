import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../screens/Feed';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';
import Onboard from '../screens/Onboard';
import Explore from '../screens/Explore';
import MyTrips from '../screens/MyTrips';
import MyDreamBoard from '../screens/MyDreamBoard';
import TripDetail from '../screens/TripDetail';
import Itinerary from '../screens/Itinerary';

// export const FeedStack = StackNavigator({
//   MyDreamBoard: {
//     screen: MyDreamBoard,
//     navigationOptions: {
//       title: 'MyDreamBoard',
//     },
//   },
//   Details: {
//     screen: UserDetail,
//     navigationOptions: ({ navigation }) => ({
//       title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
//     }),
//   },
// });

// export const ExploreStack = StackNavigator({
//   Explore: {
//     screen: Explore,
//     navigationOptions: {
//       title: 'Explore',
//     },
//   },
//   Details: {
//     screen: TripDetail,
//     navigationOptions: ({ navigation }) => ({
//       title: `${navigation.state.params.title.toUpperCase()}`,
//     }),
//   },
// });

export const Tabs = TabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => <Icon name="explore" size={35} color={tintColor} />,
    },
  },

  Itinerary: {
    screen: Itinerary,
    navigationOptions: {
      tabBarLabel: 'Itinerary',
      tabBarIcon: ({ tintColor }) => <Icon name="event" size={35} color={tintColor} />,
    },
  },

  MyDreamBoard: {
    screen: MyDreamBoard,
    navigationOptions: {
      tabBarLabel: 'MyDreamBoard',
      tabBarIcon: ({ tintColor }) => <Icon name="favorite" size={35} color={tintColor} />,
    },
  },

  

  MyTrips: {
    screen: MyTrips,
    navigationOptions: {
      tabBarLabel: 'MyTrips',
      tabBarIcon: ({ tintColor }) => <Icon name="flight-takeoff" size={35} color={tintColor} />,
    },
  },

   Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="perm-identity" size={35} color={tintColor} />
    },
  },
},
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#9013FE',
    labelStyle: {
      fontSize: 8,
    },
    
    showIcon: true,
    showLabel: true,
  }
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

export const Onboarding = StackNavigator({
  Onboarding: {
    screen: Onboard,
  },
  Root: {
    screen: Root,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});