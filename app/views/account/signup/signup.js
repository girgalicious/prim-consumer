import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, ImageBackground, Image, FlatList, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Button, Input } from 'react-native-elements';
import login from '../../../assets/images/login.png';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        width: DEVICE_WIDTH - 80,
        height: 45,
        marginHorizontal: 20,
        paddingLeft: 15,
        //borderRadius: 20,
        color: 'black',
        marginTop:10,
      },
    button: {
      width: DEVICE_WIDTH - 80,
      padding: 10,
      margin: 20
    }
})

class SignUp extends Component {

  state = {
    email: ''
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

  render() {
    return (
      <View style={{backgroundColor: '#E5E5E5'}}>
        <View style={{ justifyContent: "center", alignItems: "center", height: '50%' }}>
          <Text style={{color: 'black', fontSize: 40, fontWeight: 'bold'}}>Sign Up</Text>
        </View>
        <View style={{height: '50%', alignItems: "center"}}>
          <View>
          <TextInput
            placeholder="Name"
            placeholderTextColor="#5B5B5B"
            type='textinput'
            value={this.name}
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={(value) => console.log(value)}
          />
            <TextInput
              placeholder="Email / Phone Number"
              placeholderTextColor="#5B5B5B"
              type='textinput'
              value={this.email}
              style={styles.input}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={(value) => console.log(value)}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#5B5B5B"
              type='textinput'
              value={this.password}
              style={styles.input}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={(value) => console.log(value)}
            />
            <Button title="SIGN UP" style={styles.button} />
            <Text style={{textAlign: 'center', padding: 10}}>Have an account? Log In</Text>
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
export default connect(mapStateToProps, { })(SignUp);
