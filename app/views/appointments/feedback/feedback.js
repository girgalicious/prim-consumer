import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Avatar, Icon, withTheme, Divider } from 'react-native-elements';
import StarRating from 'react-native-star-rating';
import { connect } from 'react-redux';

const styles = (theme) => StyleSheet.create({
button: {
  backgroundColor: 'white',
  borderColor: theme.colors.primary,
  borderWidth: 1
},
buttonPress: {
    borderColor: "#000066",
    backgroundColor: "#000066",
    borderWidth: 1,
    borderRadius: 10
}
});

class Feedback extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      buttons: [
        {pressed: false},
        {pressed: false},
        {pressed: false},
        {pressed: false}
      ]
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.props.navigation.setParams({
      leftPage: 'AppointmentDetail',
      rightPage: '',
      isShownLeftOption: true,
      isShownRightOption: false,
      isRightOptionAsForm: false,
    });
  }

  componentWillReceiveProps() {
  }

  setRating = (rating) => {
    this.setState(previousState => (
  { rating: rating }
))
  }

  setButtons = (index) => {
    this.setState(previousState => {
      buttons = previousState.buttons;
      buttons[index].pressed = !buttons[index].pressed;
      return {
        ...previousState,
        buttons
      }
    })
  }

  render() {
    const {theme, state} = this.props;
    return (
      <View>
        <View style={{marginTop: 150, width: '100%', height: 100, alignItems: "center", justifyContent: 'center'}}>
          <Avatar rounded source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          }} size={'medium'} containerStyle={{marginLeft: 25}}/>
          <Text style={{}}>Bessie Cooper</Text>
        </View>
        <View style={{width: '100%', height: 50, alignItems: "center", justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>How was your experience?</Text>
        </View>
        <View style={{marginLeft: '25%', width: '50%', justifyContent: 'center'}}>
          <StarRating
            disabled={false}
            maxStars={5}
            emptyStarColor={theme.colors.primary}
            rating={this.state.rating}
            selectedStar={(rating) => this.setRating(rating)}
            starSize={30}
            fullStarColor={theme.colors.primary}
            />
        </View>
        <View style={{height: 100}}>
          <View style={{flex:1, flexDirection: 'row', alignItems: "center"}}>
            <View style={{flex:1, flexDirection: 'column'}}>
                        <Button
              title="Good job"
              titleStyle={{color: this.state.buttons[0].pressed ? 'white': theme.colors.primary}}
              buttonStyle={this.state.buttons[0].pressed ? styles(theme).buttonPressed : styles(theme).button}
              containerStyle={{marginLeft: '12.5%', width: '75%'}}
              onPress={() => this.setButtons(0)}
              />
            </View>
            <View style={{flex:1, flexDirection: 'column'}}>
              <Button
                title="Amazing!"
                titleStyle={{color: this.state.buttons[1].pressed ? 'white': theme.colors.primary}}
                buttonStyle={this.state.buttons[1].pressed ? styles(theme).buttonPressed : styles(theme).button}
                containerStyle={{marginLeft: '12.5%', width: '75%'}}
                onPress={() => this.setButtons(1)}
              />
            </View>
          </View>
        </View>
        <View style={{height: 100}}>
          <View style={{flex:1, flexDirection: 'row', alignItems: "center"}}>
            <View style={{flex:1, flexDirection: 'column'}}>
                        <Button
              title="Not Good"
              titleStyle={{color: this.state.buttons[2].pressed ? 'white': theme.colors.primary}}
              buttonStyle={this.state.buttons[2].pressed ? styles(theme).buttonPressed : styles(theme).button}
              containerStyle={{marginLeft: '12.5%', width: '75%'}}
              onPress={() => this.setButtons(2)}
              />
            </View>
            <View style={{flex:1, flexDirection: 'column'}}>
              <Button
                title="Didn’t like it"
                titleStyle={{color: this.state.buttons[3].pressed ? 'white': theme.colors.primary}}
                buttonStyle={this.state.buttons[3].pressed ? styles(theme).buttonPressed : styles(theme).button}
                containerStyle={{marginLeft: '12.5%', width: '75%'}}
                onPress={() => this.setButtons(3)}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps, { })(withTheme(Feedback));
