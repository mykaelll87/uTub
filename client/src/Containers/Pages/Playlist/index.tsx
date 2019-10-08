import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Loadable from "../../../Components/Loadable";
import SongGrid from "../../../Components/Playlist/SongGrid";
import UrlInput from "../../../Components/Playlist/UrlInput";
import { IPlaylistFormState } from "../../../shared/models/Forms/IPlaylistFormState";
import { IPlaylistData } from "../../../shared/models/IPlaylistData";
import { IState } from "../../../shared/models/IState";
import { FetchPlaylistInfoAction } from "./redux/actions";

interface IPlaylistPage {
  currentFilters: IPlaylistFormState;
  loading: boolean;
  data: IPlaylistData;
  onSubmit: (data: IPlaylistFormState) => void;
}

const PlaylistPage: React.FC<IPlaylistPage> = (props) => {
  const { data, loading, onSubmit } = props;
  return (
    <main>
      <UrlInput onSubmit={onSubmit} />
      {loading || data.songs.length ? (
        <Loadable loading={loading}>
          <SongGrid {...data} />
        </Loadable>
      ) : null}
    </main>
  );
};

const mapStateToProps = (state: IState) => {
  const segment = state.Playlist;
  return {
    currentFilters: segment.filters,
    data: segment.data,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSubmit: (data: IPlaylistFormState) =>
    dispatch(FetchPlaylistInfoAction(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistPage);
