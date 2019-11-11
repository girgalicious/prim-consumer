import React,{Component} from 'react';
import { StyleSheet,Text,View,TextInput,Picker, Dimensions } from 'react-native';


const input = (props) => { 
    let template = null;

    switch(props.type){
        case "textinput":
            template = 
            <TextInput
                {...props}
                style={[styles.input,props.overrideStyle]}
            />
        break;
        default:
            return template
    }
    return template;
}

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
      }
})

export default input;