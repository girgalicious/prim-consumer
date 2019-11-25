import React from 'react';
import { StyleSheet, View } from 'react-native';
import RootNavigator from './routes';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from './reducers/global';

const store = createStore(globalReducer);

const theme = {
  colors: {
    primary: '#959754',
    secondary: '#E5E5E5'
  }
};

const App = () => (
  <View style={styles.container}>
    <Provider store={ store }>
      <ThemeProvider theme={theme}>
        <RootNavigator/>
      </ThemeProvider>
    </Provider>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default App;
