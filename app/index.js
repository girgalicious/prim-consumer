import React from 'react';
import { StyleSheet, View } from 'react-native';
import RootNavigator from './routes';
import { ThemeProvider } from 'react-native-elements';

const theme = {
  colors: {
    primary: '#959754',
    secondary: '#E5E5E5'
  }
};

const App = () => (
  <View style={styles.container}>
    <ThemeProvider theme={theme}>
      <RootNavigator />
    </ThemeProvider>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});


export default App;
