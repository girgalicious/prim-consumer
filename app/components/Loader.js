import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loader = (props)  => {
    return (
      <View style={styles.loader}> 
            <ActivityIndicator size={props.size} color={props.loaderColor}/>
      </View>
    );
};
const styles = StyleSheet.create({
    loader:{

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f63"
       },
    })

export default Loader;