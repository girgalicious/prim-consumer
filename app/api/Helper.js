import {
    AsyncStorage
} from 'react-native';


export const APIURL = `https://test.homebinder.com/api/v1/`;
export const APIKEY = `b3e6f2e29d67494882a48cc1f26579fa`;

export const getTokens = (cb) => {

    AsyncStorage.multiGet([
        '@HB_Token',
    ]).then( value => {
        
        cb(value);
    });

}

export const setTokens = (values,cb) => {

    AsyncStorage.multiSet([
        ['@HB_Token',values.token],
    ]).then( response => {
        cb();
    });
}

export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@HB-Key', value)
  } catch (e) {
    // saving error
  }
}

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@HB-Key')
    if(value !== null) {
      console.log("local value", value);
     return value;
    }
  } catch(e) {
    // error reading value
  }

}
