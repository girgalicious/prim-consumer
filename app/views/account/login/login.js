import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, ImageBackground, Image, FlatList, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
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

class Login extends Component {

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

  explore = () => {
    this.props.navigation.navigate('Bottom');
  }

  logIn = () => {
    this.props.navigation.navigate('Bottom');
  }

  signUp = () => {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <View>
        <ImageBackground source={login} style={{height: "100%", width: "100%"}}>
          <View style={{ justifyContent: "center", alignItems: "center", height: '50%' }}>
            <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold'}}>PRIM</Text>
          </View>
          <View style={{height: '50%', alignItems: "center", justifyContent: 'center'}}>
            <View style={{position: 'relative', bottom: 0}}>
              <TextInput
                placeholder="Email / Phone Number"
                placeholderTextColor="#cecece"
                type='textinput'
                value={this.email}
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={(value) => console.log(value)}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#cecece"
                type='textinput'
                value={this.password}
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={(value) => console.log(value)}
              />
              <Button title="LOG IN" style={styles.button} onPress={() => this.logIn()}/>
              <Text style={{color: 'white', textAlign: 'center', padding: 10}} onPress={() => this.signUp()}>Don’t have an account? Sign Up</Text>
              <Text style={{color: 'white', textAlign: 'center', padding: 10}} onPress={() => this.explore()}>Continue as a guest</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps, { })(Login);
