import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import trainer from '../../assets/images/trainer.png';

class Settings extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  render() {
    return (
      <View>
        <View style={{alignItems: "center", marginTop: 20}}>
          <Image
              style={{width: 75, height: 75, borderRadius: 60/ 2}}
              source={{uri:'https://images.squarespace-cdn.com/content/v1/549dd0cee4b029881efa814b/1562686588211-RH0JPKMCYEIFAEE0E91J/ke17ZwdGBToddI8pDm48kFQQgP34qnCpeHaeAOzTt7pZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PICHnXC1b9smDvYLPdL-DS7U1pkhCtl83kemXd5r3C5ngKMshLAGzx4R3EDFOm1kBS/professional+headshot+photographer+dc+moshe+zusman+headshotdc+1.JPG'}}
          />
        </View>
        <View>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 15, marginTop: 20}}>Tetiana Semenchuk</Text>
          <Text style={{textAlign: 'center', fontSize: 12, marginTop: 10}}>Edit Profile</Text>
        </View>

        <View style={{marginLeft: 20, marginTop: 20}}>
          <FlatList
            data={[
              {key: 'Notifications'},
              {key: 'Payment Methods'},
              {key: 'My Favorites'},
              {key: 'Privacy Policy'},
              {key: 'Help'}
            ]}
            renderItem={({item}) =>
              <View style={{width: '90%', borderBottomColor: '#EEEEEE', borderBottomWidth: 1}}>
                <Text style={{padding: 20}}>{item.key}</Text>
              </View>
            }
            />
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
