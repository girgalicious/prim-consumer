import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, FlatList } from 'react-native';
import { Avatar, ListItem} from 'react-native-elements';
import { connect } from 'react-redux';
import trainer from '../../assets/images/trainer.png';

const list = [
  {name: 'Notifications', route: 'Notifications'},
  {name: 'Payment Methods', route: 'PaymentMethods'},
  {name: 'My Favorites', route: 'Favorites'},
  {name: 'Privacy Policy', route: 'PrivacyPolicy'},
  {name: 'Help', route: 'Help'}
]

class Settings extends Component {
  state = {
    link: 'https://images.squarespace-cdn.com/content/v1/549dd0cee4b029881efa814b/1562686588211-RH0JPKMCYEIFAEE0E91J/ke17ZwdGBToddI8pDm48kFQQgP34qnCpeHaeAOzTt7pZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PICHnXC1b9smDvYLPdL-DS7U1pkhCtl83kemXd5r3C5ngKMshLAGzx4R3EDFOm1kBS/professional+headshot+photographer+dc+moshe+zusman+headshotdc+1.JPG'
  }
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  navigate = (route) => {
    this.props.navigation.navigate(route);
  }

  render() {
    const {link} = this.state;
    return (
      <View>
        <View style={{alignItems: "center", marginTop: 20}}>
                    <Avatar
                    size='xlarge'
                    rounded
            source={{
              uri:
                link,
            }}
            showEditButton
            editButton={{ name: "ios-camera", type: "ionicon"}}
            />
        </View>
        <View>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 15, marginTop: 20}}>Tetiana Semenchuk</Text>
          <Text style={{textAlign: 'center', fontSize: 12, marginTop: 10}} onPress={() => this.navigate('EditProfile')}>Edit Profile</Text>
        </View>
        <View style={{marginTop: 15}}>
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                title={l.name}
                chevron={true}
                onPress={() => this.navigate(l.route)}
                bottomDivider={i - 1 != list.length}
              />
            ))
          }
        </View>

      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps, { })(Settings);
