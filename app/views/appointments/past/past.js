import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import haircut from '../../../assets/images/haircut.png';
import coloring from '../../../assets/images/coloring.png';

class Appointments extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  navigateToAppointment = () => {
      this.props.navigation.navigate('AppointmentDetail', {
                            appointment: {}
                          });
  }

  render() {
    return (
      <View>
        <View style={{ marginLeft: 20, marginTop: 20, marginRight: 20}}>
              <ImageBackground source={haircut} style={{ height: 150, width: 330}} imageStyle={{ borderRadius: 5 }}>
                <Text style={{fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 5}} >Tuesday, Dec 14</Text>
                <Text style={{fontWeight: 'bold', color: 'white', position: 'absolute', bottom: 10, left: 5}} >Mens haircut +</Text>
                <Text style={{fontWeight: 'bold', color: 'white', position: 'absolute', bottom: 10, right: 5}} >$70</Text>
              </ImageBackground>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps, { })(Appointments);
