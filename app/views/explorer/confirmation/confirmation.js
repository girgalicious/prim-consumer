import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, FlatList } from 'react-native';
import Confetti from 'react-native-confetti';
import {
    Button,
    withTheme,
} from 'react-native-elements';
import { connect } from 'react-redux';

class Confirmation extends Component {

  state = {
    colors: [this.props.theme.colors.primary, this.props.theme.colors.secondary]
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
    if(this._confettiView) {
   this._confettiView.startConfetti();
}
  }

  componentWillReceiveProps() {
  }

  navigateToHome = () => {
    this.props.navigation.navigate('Bottom');
  }

  render() {
    return (
      <View>
          <Confetti ref={(node) => this._confettiView = node} colors={this.state.colors}/>
          <Text style={{textAlign: 'center', fontSize: 12, marginTop: 50}} duration={2000}>Confirmation</Text>
          <View
              style={{
                  alignItems: 'center',
                  justifyContent: 'center',
              }}>
              <Button
                  style={{position: 'absolute', bottom: 0}}
                  title="Continue"
                  onPress={() => this.navigateToHome()}
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
export default connect(mapStateToProps, { })(withTheme(Confirmation));
