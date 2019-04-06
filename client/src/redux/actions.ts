import { REQUEST_SINGLE_INFO, RECIEVE_SINGLE_INFO } from "./actionTypes";
import { apiUrl } from "../consts";
import { Dispatch } from "redux";
import { ISongInfo } from "../shared/models/ISongInfo";

function requestInfo() {
  return {
    type: REQUEST_SINGLE_INFO
  }
}
function recieveInfo(json: ISongInfo) {
  return {
    type: RECIEVE_SINGLE_INFO,
    info: json
  }
}

export function fetchInfo(url: string) {
  return (dispatch: Dispatch) => {
    dispatch(requestInfo())
    fetch(`${apiUrl}/single/info/${encodeURIComponent(url)}`)
      .then(
        res => res.json(),
        err => { console.log(err.message); return {} })
      .then(json => dispatch(recieveInfo(json)))
  }
}
