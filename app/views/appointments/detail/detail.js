import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, ImageBackground, Image, FlatList, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Button, Avatar, Icon, withTheme, Divider } from 'react-native-elements';
import haircut from '../../../assets/images/haircut.png';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    button: {
      width: DEVICE_WIDTH - 80,
      padding: 10,
      margin: 20
    }
})

class AppointmentDetail extends Component {

  state = {
    link: 'https://images.squarespace-cdn.com/content/v1/549dd0cee4b029881efa814b/1562686588211-RH0JPKMCYEIFAEE0E91J/ke17ZwdGBToddI8pDm48kFQQgP34qnCpeHaeAOzTt7pZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PICHnXC1b9smDvYLPdL-DS7U1pkhCtl83kemXd5r3C5ngKMshLAGzx4R3EDFOm1kBS/professional+headshot+photographer+dc+moshe+zusman+headshotdc+1.JPG'
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.props.navigation.setParams({
      leftPage: 'Appointments',
      rightPage: 'AppointmentFeedback',
      isShownLeftOption: true,
      isShownRightOption: false,
      isRightOptionAsForm: false,
    });
  }

  componentWillReceiveProps() {
  }

  complete = () => {
    this.props.navigation.navigate('AppointmentFeedback');
  }

  render() {
    const { theme, updateTheme, replaceTheme } = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1.5}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: '15%', height: 75, alignItems: "center", justifyContent: 'center'}}>
              <Avatar rounded source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              }} size={'medium'} containerStyle={{marginLeft: 25}}/>
            </View>
            <View style={{width: '45%', height: 75, alignItems: "center", justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold'}}>Bessie Cooper</Text>
              <Text style={{}}>Hair Dresser</Text>
            </View>
            <View style={{width: '20%', height: 75, alignItems: "center", justifyContent: 'center'}}>
              <Avatar
                rounded
                icon={{name: 'phone', type: 'font-awesome', color: theme.colors.secondary}}
                overlayContainerStyle={{backgroundColor: theme.colors.primary}}
                size={'small'}
                onPress={() => console.log("Works!")}
                />
          </View>
          <View style={{width: '20%', height: 75, alignItems: "center", justifyContent: 'center'}}>
            <Avatar
            rounded
            icon={{name: 'comments', type: 'font-awesome', color: theme.colors.secondary}}
overlayContainerStyle={{backgroundColor: theme.colors.primary}}
            size={'small'}
            onPress={() => console.log("Works!")}
            />
          </View>
          </View>
        </View>
        <View style={{flex: 1.5}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: '15%', height: 75, alignItems: "center", justifyContent: 'center'}}>
                      <Icon
            iconStyle={{marginLeft: 25}}
            name='calendar'
            type='font-awesome' />
          </View>
          <View style={{width: '45%', height: 75, alignItems: "center", justifyContent: 'center'}}>
            <Text style={{}}>Aug 14, 1:30 PM</Text>
          </View>
          </View>
        </View>
        <View style={{flex: 3, flexDirection: 'row'}}>
          <Image source={haircut} style={{height: "100%", width: "100%"}}>
          </Image>
        </View>
        <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#F7F7F7'}}>
          <Text style={{fontWeight: 'bold', fontSize: 15, padding: 20}}>Mens haircut</Text>
          <Text style={{position: 'absolute', right: 15, padding: 20}}>$20</Text>
        </View>
        <View>
          <Divider style={{ backgroundColor: 'black', width: '90%', left: "5%" }} />
        </View>
        <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#F7F7F7'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, padding: 20}}>TOTAL:</Text>
          <Text style={{position: 'absolute', right: 15, padding: 20}}>$20</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold', fontSize: 15, padding: 20}}>Location</Text>
        </View>
        <View style={{flex: 1}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: '15%', height: 75, alignItems: "center", justifyContent: 'center'}}>
                        <Icon
              iconStyle={{marginLeft: 25}}
              name='map-marker'
              type='font-awesome' />
            </View>
            <View style={{width: '65%', height: 75, alignItems: "center", justifyContent: 'center'}}>
              <Text style={{}}>8710 5th Ave W, Everett, WA</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold', fontSize: 15, padding: 20}}>Payment Method</Text>
        </View>
        <View style={{flex: 1}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: '15%', height: 75, alignItems: "center", justifyContent: 'center'}}>
                        <Icon
              iconStyle={{marginLeft: 25}}
              name='cc-mastercard'
              type='font-awesome' />
            </View>
            <View style={{width: '65%', height: 75, alignItems: "center", justifyContent: 'center'}}>
              <Text style={{}}>****1234</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 3, flexDirection: 'row', alignItems: "center", justifyContent: 'center'}}>
          <Button title="COMPLETE APPOINTMENT" style={styles.button} onPress={() => this.complete()}/>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps, { })(withTheme(AppointmentDetail));
