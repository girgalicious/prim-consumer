import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ExplorerHome from './views/explorer/Home'
import Settings from './views/settings/Settings'
import Appointments from './views/appointments/Appointments'
import ExplorerDetail from './views/explorer/detail/detail'


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
          <Image
            source={navigation.getParam('isShownLeftOption') === true ? require('../app/assets/images/arrowBack.png') : ''}
                // source={require('../../assets/images/arrowBack.png')}
            style={{ width: 25, height: 25, marginLeft: 25, }}
          />
        </View>
      </TouchableOpacity>
    ),
    headerRight: null,
    gesturesEnabled: false,
    animationEnabled: false,
  }),
};

const ExplorerStack = createStackNavigator({
  HomePage: ExplorerHome,
  ExplorerDetail
}, headerConf);

const AppointmentsStack = createStackNavigator({
  Appointments: Appointments
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

    HomePage: ExplorerStack,
    Appointments: AppointmentsStack,
    Profile: ProfileStack,
    Bottom: BottomStack
  },
  {
    initialRouteName: 'Bottom',
  }
));
