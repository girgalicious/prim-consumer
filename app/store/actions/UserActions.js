import {
    SIGN_UP,
    SIGN_IN,
    AUTO_SIGN_IN,
    FORGOT_PASSWORD
} from '../Types';

import axios from 'axios';
import { APIURL,APIKEY } from '../../api/Helper';

const headers = {
    'Content-Type': 'application/json',
    'HB-ApiKey': APIKEY,
    "Accept": "application/json"
}


export function signIn(data){
    console.log("APIKey", APIKEY);
    console.log("APIURL", APIURL + "user_tokens");

    const request = axios.post(APIURL+ 'user_tokens',data,{
        headers: headers
        })
        .then(response => {
            console.log("response",response);
            
            return response.data;
        })
        .catch((error) => {
            return false;
        })
    return {
        type:SIGN_IN,
        payload:request
    }
}

export function signUp(data){
    console.log("Signup data",data);
    const request = axios.post(APIURL +'registrations',data,{
        headers: headers
        })
        .then(response => {
            console.log("response",response);
            return response.data;
        })
        .catch((response) => {
            return response.response;
        })
        return {
            type:SIGN_UP,
            payload:request
    }
}
export function forgotPassword(data){
  
    const request = axios.post(APIURL +'users/passwords',data,{
        headers: headers
        })
        .then(response => {
            console.log("response forgot pwd",response);
            return response.data;
        })
        .catch((response) => {
            console.log("forgot exception",response.response);
            return response.response.data.message;
        })
        return {
            type:FORGOT_PASSWORD,
            payload:request
    }
}
export function autoSignIn(data){

}
