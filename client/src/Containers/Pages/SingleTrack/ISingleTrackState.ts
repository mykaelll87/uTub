import { ISongInfo } from "../../../shared/models/ISongInfo";

export interface ISingleTrackState {
  currentUrl: string;
  loading: boolean;
  songInfo?: ISongInfo;
}
