import { IPlaylistState } from "../IPlaylistState";
import { PlaylistPageActions } from "./actions";

const initialState: IPlaylistState = {
  data: {
    songs: [],
  },
  filters: {
    itemCount: "25",
    url: "",
  },
  isLoading: false,
};

export default function(state = initialState, actions: PlaylistPageActions) {
  return state;
}
