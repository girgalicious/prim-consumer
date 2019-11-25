import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import {
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator,
} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon, withTheme} from 'react-native-elements';

import Settings from './views/settings/Settings';
import EditProfile from './views/settings/profile/profile';
import Help from './views/settings/help/help';
import PaymentMethods from './views/settings/payments/payments';
import PrivacyPolicy from './views/settings/privacy/privacy';
import Favorites from './views/settings/favorites/favorites';
import Notifications from './views/settings/notifications/notifications';

import Appointments from './views/appointments/Appointments';
import AppointmentDetail from './views/appointments/detail/detail';
import AppointmentFeedback from './views/appointments/feedback/feedback';

import ExplorerHome from './views/explorer/Home';
import ExplorerDetail from './views/explorer/detail/detail';
import Card from './components/provider/card';
import ProviderDetail from './views/explorer/providers/detail/detail';
import ServiceDetail from './views/explorer/services/detail/detail';
import Cart from './views/explorer/cart/cart';

import Login from './views/account/login/login';
import ResetPassword from './views/account/reset/reset';
import SignUp from './views/account/signup/signup';

import logo from './assets/images/logo.png';
import HomeIcon from './assets/images/search.png';
import HomeIconGrey from './assets/images/search.png';
import settingsIcon from './assets/images/user.png';
import settingsColorIcon from './assets/images/user.png';
import calendarIcon from './assets/images/calendar.png';

import NotifService from './utils/notifications/notifications';

class PrimRouter extends Component {
    constructor(props) {
        super(props);
        this.notif = new NotifService(this.onRegister.bind(this), this.onNotif.bind(this));
        this.notif.configure(this.onRegister.bind(this), this.onNotif.bind(this), '')
    }

    onRegister(token) {
      console.log("REGISTERING");
      console.log(token);
        //this.setState({ registerToken: token.token, gcmRegistered: true });
    }

    onNotif(notif) {
        console.log(notif);
        Alert.alert(notif.title, notif.message);
    }

    handlePerm(perms) {
        Alert.alert('Permissions', JSON.stringify(perms));
    }

    render() {
        const {theme} = this.props;

        const headerConf = {
            headerLayoutPreset: 'center',
            defaultNavigationOptions: ({navigation}) => ({
                headerStyle: {
                    backgroundColor: 'white',
                    borderBottomWidth: 0,
                },
                headerTintColor: 'black',
                headerTitle: 'Prim',
                headerLeft: (
                    <TouchableOpacity
                        onPress={() => {
                            const param = navigation.getParam('param');
                            const isParam = navigation.getParam('isParamShown');
                            isParam === false
                                ? navigation.navigate(
                                      navigation.getParam('leftPage'),
                                  )
                                : navigation.navigate(
                                      navigation.getParam('leftPage'),
                                      {
                                          id: param,
                                      },
                                  );
                        }}>
                        <View
                            style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                borderBottomWidth: 0,
                            }}>
                            {navigation.getParam('isShownLeftOption') ===
                            true ? (
                                <Icon
                                    name="arrow-left"
                                    type="font-awesome"
                                    iconStyle={{marginLeft: 25}}
                                />
                            ) : null}
                        </View>
                    </TouchableOpacity>
                ),
                headerRight: null,
                gesturesEnabled: false,
                animationEnabled: false,
            }),
        };

        const LoginStack = createStackNavigator(
            {
                Login: Login,
            },
            {headerMode: 'none'},
        );

        const SignUpStack = createStackNavigator(
            {
                SignUp: SignUp,
            },
            {headerMode: 'none'},
        );

        const ResetPasswordStack = createStackNavigator(
            {
                ResetPassword: ResetPassword,
            },
            {headerMode: 'none'},
        );

        const ExplorerStack = createStackNavigator(
            {
                HomePage: ExplorerHome,
                ExplorerDetail,
                Card,
                Cart,
                ProviderDetail: {
                    screen: ProviderDetail,
                    navigationOptions: ({navigation}) => ({
                        headerTransparent: true,
                        headerStyle: {
                            color: 'white',
                            backgroundColor: 'transparent',
                            borderBottomWidth: 0,
                        },
                        headerTitle: '',
                        headerLeft: (
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate(
                                        navigation.getParam('leftPage'),
                                    );
                                }}>
                                <Icon
                                    name="arrow-left"
                                    color="white"
                                    type="font-awesome"
                                    iconStyle={{marginLeft: 25}}
                                />
                            </TouchableOpacity>
                        ),
                    }),
                },
                ServiceDetail: {
                    screen: ServiceDetail,
                    navigationOptions: ({navigation}) => ({
                        headerTransparent: true,
                        headerStyle: {
                            color: 'white',
                            backgroundColor: 'transparent',
                            borderBottomWidth: 0,
                        },
                        headerTitle: '',
                        headerLeft: (
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate(
                                        navigation.getParam('leftPage'),
                                    );
                                }}>
                                <Icon
                                    name="arrow-left"
                                    color="white"
                                    type="font-awesome"
                                    iconStyle={{marginLeft: 25}}
                                />
                            </TouchableOpacity>
                        ),
                    }),
                },
            },
            headerConf,
        );

        const AppointmentsStack = createStackNavigator(
            {
                Appointments: Appointments,
                AppointmentDetail,
                AppointmentFeedback,
            },
            headerConf,
        );

        const ProfileStack = createStackNavigator(
            {
                Profile: Settings,
                EditProfile,
                Help,
                PrivacyPolicy,
                Favorites,
                PaymentMethods,
                Notifications,
            },
            headerConf,
        );

        const BottomStack = createBottomTabNavigator(
            {
                HomePage: ExplorerStack,
                Appointments: AppointmentsStack,
                Profile: ProfileStack,
            },
            {
                tabBarOptions: {
                    activeTintColor: '#f63',
                    showLabel: false,
                    activeBackgroundColor: 'white',
                    inactiveBackgroundColor: 'white',
                    barStyle: {backgroundColor: '#694fad'},
                    style: {
                        backgroundColor: 'white',
                    },
                },
                initialRouteName: 'HomePage',
                defaultNavigationOptions: ({navigation}) => ({
                    tabBarIcon: ({focused, horizontal, tintColor}) => {
                        const {routeName} = navigation.state;
                        let iconName;
                        if (routeName === 'HomePage') {
                            return (
                                <Icon
                                    iconStyle={{}}
                                    color={
                                        focused
                                            ? theme.colors.primary
                                            : theme.colors.secondary
                                    }
                                    name="search"
                                    type="font-awesome"
                                />
                            );
                        }
                        if (routeName === 'Profile') {
                            return (
                                <Icon
                                    iconStyle={{}}
                                    color={
                                        focused
                                            ? theme.colors.primary
                                            : theme.colors.secondary
                                    }
                                    name="user"
                                    type="font-awesome"
                                />
                            );
                        }
                        if (routeName === 'Appointments') {
                            return (
                                <Icon
                                    color={
                                        focused
                                            ? theme.colors.primary
                                            : theme.colors.secondary
                                    }
                                    iconStyle={{}}
                                    name="calendar"
                                    type="font-awesome"
                                />
                            );
                        }

                        // return <Icon name={iconName} size={25} color={tintColor}/>;
                    },
                }),
            },
        );

        const AppContainer = createAppContainer(
            createSwitchNavigator(
                {
                    Login: LoginStack,
                    SignUp: SignUpStack,
                    ResetPassword: ResetPasswordStack,
                    HomePage: ExplorerStack,
                    Appointments: AppointmentsStack,
                    Profile: ProfileStack,
                    Bottom: BottomStack,
                },
                {
                    initialRouteName: 'Login',
                },
            ),
        );

        return <AppContainer />;
    }
}

export default withTheme(PrimRouter);
