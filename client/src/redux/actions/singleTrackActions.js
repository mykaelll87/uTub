import { CLEAR_SINGLE_INFO, REQUEST_SINGLE_INFO, RECIEVE_SINGLE_INFO } from "../actionTypes";
import { apiUrl } from "../../consts";

export function clearInfo(){
    return {
        type:CLEAR_SINGLE_INFO
    }
}

function requestInfo(){
    return {
        type: REQUEST_SINGLE_INFO
    }
}
function recieveInfo(json){
    return {
        type: RECIEVE_SINGLE_INFO,
        info: json
    }
}

export function fetchInfo(url){
    return (dispatch)=>{
        dispatch(requestInfo)
        //TODO Simplifier l'url
        fetch(`${apiUrl}/single/info/${url}`)
            .then(res=>res.json())
            .then(json=>dispatch(recieveInfo(json)))
    }
}
