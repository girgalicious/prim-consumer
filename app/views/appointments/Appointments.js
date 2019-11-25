import React, { Component } from 'react';
import { Text, Dimensions, View, ImageBackground, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import haircut from '../../assets/images/haircut.png';
import coloring from '../../assets/images/coloring.png';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Upcoming from './upcoming/upcoming';
import Past from './past/past';
import { withTheme } from 'react-native-elements';

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

  state = {
  index: 0,
  routes: [
    { key: 'first', title: 'Upcoming' },
    { key: 'second', title: 'Past' },
  ],
};

  render() {
    const {theme} = this.props;
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: Upcoming,
          second: Past,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={props =>
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: theme.colors.primary }}
      style={{ backgroundColor: 'white', color: 'black' }}
      activeColor="black"
      inactiveColor="grey"
    />
  }
      />
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps, { })(withTheme(Appointments));
