import { RECIEVE_SINGLE_INFO, REQUEST_SINGLE_INFO } from "../constants";
import { ISingleTrackState } from "../ISingleTrackState";
import { SingleTrackActions } from "./actions";

const initialState: ISingleTrackState = {
  currentUrl: "",
  loading: false,
};

export default function(state = initialState, action: SingleTrackActions) {
  switch (action.type) {
    case REQUEST_SINGLE_INFO:
      return {
        ...state,
        loading: true,
        currentUrl: action.url
      };
    case RECIEVE_SINGLE_INFO:
      return {
        ...state,
        songInfo: action.data,
        loading: false,
      };
    default:
      return state;
  }
}
