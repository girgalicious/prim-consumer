import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, FlatList } from 'react-native';
import { Avatar, ListItem} from 'react-native-elements';
import { connect } from 'react-redux';

const list = [
  {name: 'Notifications', route: 'Notifications'},
  {name: 'Payment Methods', route: 'PaymentMethods'},
  {name: 'My Favorites', route: 'Favorites'},
  {name: 'Privacy Policy', route: 'PrivacyPolicy'},
  {name: 'Help', route: 'Help'}
]

class Messages extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  navigate = () => {
    this.props.navigation.navigate("MessageDetails");
  }

  render() {
    return (
      <View>
        <View style={{marginTop: 15}}>
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                title={l.name}
                chevron={true}
                onPress={() => this.navigate()}
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
export default connect(mapStateToProps, { })(Messages);
