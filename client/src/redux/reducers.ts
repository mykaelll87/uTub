import { combineReducers } from "redux";
import Playlist from "../Containers/Pages/Playlist/redux/reducer";
import SingleTrack from "../Containers/Pages/SingleTrack/redux/reducer";
import { IState } from "../shared/models/IState";

export default combineReducers<IState>({
  SingleTrack,
  Playlist,
});
