import { CLEAR_SINGLE_INFO, REQUEST_SINGLE_INFO, RECIEVE_SINGLE_INFO } from "./actionTypes";
import { apiUrl } from "../consts";

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
        dispatch(requestInfo())
        fetch(`${apiUrl}/single/info/${encodeURIComponent(url)}`)
            .then(
                res=>res.json(),
                err=>{console.log(err.message); return{}})
            .then(json=>dispatch(recieveInfo(json)))
    }
}
