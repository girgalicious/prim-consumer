import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';

class Profile extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.props.navigation.setParams({
      leftPage: 'Profile',
      rightPage: '',
      isShownLeftOption: true,
      isShownRightOption: false,
      isRightOptionAsForm: false,
    });
  }

  componentWillReceiveProps() {
  }

  render() {
    return (
      <View>
          <Text style={{textAlign: 'center', fontSize: 12, marginTop: 10}}>Payment Methods</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps, { })(Profile);
