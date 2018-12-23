import { RECIEVE_SINGLE_INFO, REQUEST_SINGLE_INFO } from "../actionTypes";

const initialState = {
    loading:false,
    info:{}
}

export default function(state = initialState, action){
    switch (action.type){
        case REQUEST_SINGLE_INFO:{
            return {
                ...state,
                loading:true
            }
        }
        case RECIEVE_SINGLE_INFO:{
            return {
                ...state,
                loading:false,
                info: action.info
            }
        }
        default:{
            return state
        }
    }
}