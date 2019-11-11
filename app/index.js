import React from 'react';
import { StyleSheet, View } from 'react-native';
import RootNavigator from './routes';

const App = () => (
  <View style={styles.container}>
    <RootNavigator />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});


export default App;
