import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'

import Settings from './views/settings/Settings'

import Appointments from './views/appointments/Appointments'
import AppointmentDetail from './views/appointments/detail/detail'

import ExplorerHome from './views/explorer/Home'
import ExplorerDetail from './views/explorer/detail/detail'
import Card from './components/provider/card'
import ProviderDetail from './views/explorer/providers/detail/detail'
import ServiceDetail from './views/explorer/services/detail/detail'

import Login from './views/account/login/login'
import ResetPassword from './views/account/reset/reset'
import SignUp from './views/account/signup/signup'

import logo from './assets/images/logo.png';
import HomeIcon from './assets/images/search.png';
import HomeIconGrey from './assets/images/search.png';
import settingsIcon from './assets/images/user.png';
import settingsColorIcon from './assets/images/user.png';
import calendarIcon from './assets/images/calendar.png';



const headerConf = {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: 'white',
      borderBottomWidth: 0
    },
    headerTintColor: 'Black',
    headerTitle: "Prim",
    headerLeft: (
      <TouchableOpacity onPress={() => {
        const param = navigation.getParam('param');
        const isParam = navigation.getParam('isParamShown');
        isParam === false ? navigation.navigate(navigation.getParam('leftPage')) : navigation.navigate(navigation.getParam('leftPage'), {
          id: param,
        });
      }}
      >
        <View style={{
          alignItems: 'center', flexDirection: 'row', justifyContent: 'center', borderBottomWidth: 0
        }}
        >
        {
          navigation.getParam('isShownLeftOption') === true ?
          <Icon
          name='arrow-left'
          type='font-awesome'
          iconStyle={{ marginLeft: 25}} /> : null
        }
        </View>
      </TouchableOpacity>
    ),
    headerRight: null,
    gesturesEnabled: false,
    animationEnabled: false,
  }),
};

const AccountStack = createStackNavigator({
  SignUp: SignUp,
}, {headerMode: 'none'});

const ExplorerStack = createStackNavigator({
  HomePage: ExplorerHome,
  ExplorerDetail,
  Card,
  ProviderDetail: {
        screen: ProviderDetail,
        navigationOptions: ({ navigation }) => ({
            headerTransparent: true,
            headerStyle: {
              color: 'white',
              backgroundColor: 'transparent',
              borderBottomWidth: 0
            },
            headerTitle: "",
            headerLeft: (
              <TouchableOpacity onPress={() => {
                navigation.navigate(navigation.getParam('leftPage'))
              }}
              >
                <Icon
                  name='arrow-left'
                  color="white"
                  type='font-awesome'
                  iconStyle={{ marginLeft: 25}} />
            </TouchableOpacity>
          )
        })
    },
  ServiceDetail: {
          screen: ServiceDetail,
          navigationOptions: ({ navigation }) => ({
              headerTransparent: true,
              headerStyle: {
                color: 'white',
                backgroundColor: 'transparent',
                borderBottomWidth: 0
              },
              headerTitle: "",
              headerLeft: (
                <TouchableOpacity onPress={() => {
                  navigation.navigate(navigation.getParam('leftPage'))
                }}
                >
                  <Icon
                    name='arrow-left'
                    color="white"
                    type='font-awesome'
                    iconStyle={{ marginLeft: 25}} />
              </TouchableOpacity>
            )
          })
      },
}, headerConf);

const AppointmentsStack = createStackNavigator({
  Appointments: Appointments,
  AppointmentDetail
}, headerConf);

const ProfileStack = createStackNavigator({
  Profile: Settings
}, headerConf);

const BottomStack = createBottomTabNavigator({
  HomePage: ExplorerStack,
  Appointments: AppointmentsStack,
  Profile: ProfileStack
}, {
    tabBarOptions: {
      activeTintColor: '#f63',
      showLabel: false,
      activeBackgroundColor: 'white',
      inactiveBackgroundColor: 'white',
      barStyle: { backgroundColor: '#694fad' },
      style: {
        backgroundColor: 'white',
      }
    },
    initialRouteName: 'HomePage',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'HomePage') {
          return <Image style={{ width: 25, height: 25 }} source={focused ? HomeIcon : HomeIconGrey} />;
        } if (routeName === 'Profile') {
          return <Image style={{ width: 25, height: 25 }} source={focused ? settingsColorIcon : settingsIcon} />;
        }
        if (routeName === 'Appointments') {
          return <Image style={{ width: 25, height: 25 }} source={calendarIcon} />;
        }

        // return <Icon name={iconName} size={25} color={tintColor}/>;
      }
    })
  });

export default createAppContainer(createSwitchNavigator(
  {
    SignUp: AccountStack,
    HomePage: ExplorerStack,
    Appointments: AppointmentsStack,
    Profile: ProfileStack,
    Bottom: BottomStack
  },
  {
    initialRouteName: 'Bottom',
  }
));
