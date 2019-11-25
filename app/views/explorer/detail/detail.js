import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Services from '../services/services';
import Providers from '../providers/providers';
import { withTheme } from 'react-native-elements';

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

class ExplorerDetail extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.props.navigation.setParams({
      leftPage: 'HomePage',
      rightPage: '',
      isShownLeftOption: true,
      isShownRightOption: false,
      isRightOptionAsForm: false,
    });
  }

  componentWillReceiveProps() {
  }

  state = {
  index: 0,
  routes: [
    { key: 'first', title: 'Services' },
    { key: 'second', title: 'Providers' },
  ],
};

render(){
const { navigation, theme } = this.props;
const service = navigation.getParam('service');
  return (
    <TabView
      navigationState={this.state}
      renderScene={SceneMap({
        first: Services,
        second: Providers,
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
export default connect(mapStateToProps, { })(withTheme(ExplorerDetail));
