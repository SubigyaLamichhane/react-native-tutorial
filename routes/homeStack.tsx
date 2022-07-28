import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import CreateComplain from '../screens/CreateComplain';
import Login from '../screens/Login';
import Register from '../screens/Register';
import UserProfile from '../screens/UserProfile';
import ViewComplainDetails from '../screens/ViewComplainDetails';
import MapScreen from '../screens/MapScreen';
import Header from '../components/Header';
import React from 'react';

const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }: any) => {
      return {
        headerTitle: () => {
          return (
            <Header title="Infrastructure Ambulance" navigation={navigation} />
          );
        },
      };
    },
  },
  CreateComplain: {
    screen: CreateComplain,
    navigationOptions: {
      title: 'Create Complain',
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register',
    },
  },
  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      title: 'User Profile',
    },
  },
  ViewComplainDetails: {
    screen: ViewComplainDetails,
    navigationOptions: {
      title: 'View Complain Details',
    },
  },
  Map: {
    screen: MapScreen,
    navigationOptions: {
      title: 'Map',
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#f4511e' },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});

export default createAppContainer(HomeStack);
