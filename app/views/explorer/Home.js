import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import brows from '../../assets/images/brows.png';
import nails from '../../assets/images/nails.png';
import masseuse from '../../assets/images/masseuse.png';
import barber from '../../assets/images/barber.png';
import hair from '../../assets/images/hair.png';
import wax from '../../assets/images/wax.png';
import therapist from '../../assets/images/therapist.png';
import trainer from '../../assets/images/trainer.png';
import makeup from '../../assets/images/makeup.png';
import rectangle from '../../assets/images/rectangle.png';
import styles from '../../styles/category.style';

class ExplorerHome extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  navigateToServices = (service) => {
      this.props.navigation.navigate('ExplorerDetail', {
                            service: service
                          });
  }

  render() {
    return (
<View style={{flex: 1, flexDirection: 'column'}}>
<View style={{height: "20%"}}>
</View>
  <View style={{height: "20%", flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: 'white' }}>
    <View style={{flex: 3, flexDirection: 'column'}}>
      <View style={{flex: 3}}>
            <ImageBackground source={rectangle} style={{height: "100%", width: "100%",
        borderRightWidth: 2,
        borderRightColor: 'white', borderBottomWidth: 2, borderBottomColor: 'white', flex:1,justifyContent: "center",alignItems: "center"}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}} onPress={() => this.navigateToServices('makeup')}>Makeup</Text>
            </ImageBackground>
      </View>
      <View style={{flex: 3}}>
      <ImageBackground source={nails} style={{height: "100%", width: "100%", borderRightWidth: 2,
          borderRightColor: 'white',}}>
      </ImageBackground>
      </View>
    </View>
    <View style={{flex: 3}}>
    <ImageBackground source={masseuse} style={{height: "100%", width: "100%"}}>
    </ImageBackground>
    </View>
  </View>
  <View style={{height: "20%"}}>
  <ImageBackground source={brows} style={{height: "100%", width: "100%", borderBottomWidth: 2, borderBottomColor: 'white'}}>
  </ImageBackground>
  </View>
  <View style={{height: "20%", flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: 'white'}}>
    <View style={{flex: 3}}>
    <ImageBackground source={trainer} style={{height: "100%", width: "100%"}}>
    </ImageBackground>
    </View>
    <View style={{flex: 3, flexDirection: 'column'}}>
      <View style={{flex: 3}}>
      <ImageBackground source={hair} style={{height: "100%", width: "100%", borderLeftWidth: 2,
      borderLeftColor: 'white', borderBottomWidth: 2, borderBottomColor: 'white'}}>
      </ImageBackground>
      </View>
      <View style={{flex: 3}}>
      <ImageBackground source={barber} style={{height: "100%", width: "100%", borderLeftWidth: 2,
      borderLeftColor: 'white'}}>
      </ImageBackground>
      </View>
    </View>
  </View>
  <View style={{height: "20%", flexDirection: 'row'}}>
  <View style={{flex: 3}}>
  <ImageBackground source={therapist} style={{height: "100%", width: "100%"}}>
  </ImageBackground>
  </View>
  <View style={{flex: 3}}>
  <ImageBackground source={wax} style={{height: "100%", width: "100%", borderLeftWidth: 2,
  borderLeftColor: 'white'}}>
  </ImageBackground>
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
export default connect(mapStateToProps, { })(ExplorerHome);
