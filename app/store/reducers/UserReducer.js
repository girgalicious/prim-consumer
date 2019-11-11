import {
    SIGN_UP,
    SIGN_IN,
    AUTO_SIGN_IN,
    FORGOT_PASSWORD
} from '../Types';


export default function(state={},action){
    
    switch(action.type){
        case SIGN_IN:
            return {
                ...state,
                auth:{
                    token:action.payload.token || false,
                }
            }
        case SIGN_UP:
            return {
                ...state,
                auth:{
                    token:action.payload.token || false,
                    status: action.payload || false
                }
            }
        case FORGOT_PASSWORD:
            return {
                ...state,
                auth:{
                    status: action.payload.status || false
                }
            }
       
        // case AUTO_SIGN_IN:
        //     return {
        //         ...state,
        //         auth:{
        //             uid:action.payload.user_id || false,
        //             token:action.payload.id_token || false,
        //             refToken: action.payload.refresh_token || false,
        //         }
        //     }
        default:
            return state
    }
}