import { IPlaylistState } from "../../Containers/Pages/Playlist/IPlaylistState";
import { ISingleTrackState } from "../../Containers/Pages/SingleTrack/ISingleTrackState";

export interface IState {
  SingleTrack: ISingleTrackState;
  Playlist: IPlaylistState;
}
