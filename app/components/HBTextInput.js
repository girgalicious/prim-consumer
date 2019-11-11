import React,{Component} from 'react';
import { StyleSheet,Text,View,TextInput,Picker, Dimensions } from 'react-native';


const HBTextInput = (props) => { 
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
   
    input:{
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:'#eaeaea',
        fontSize:16,
        padding:5,
        marginTop:10,
        width: DEVICE_WIDTH - 80,
        height:45
    }
})

export default HBTextInput;