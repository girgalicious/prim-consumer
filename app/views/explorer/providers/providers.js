import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class Providers extends Component {

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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Providers</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps, { })(Providers);
