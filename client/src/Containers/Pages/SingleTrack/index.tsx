import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import TrackCard from "../../../Components/SingleTrack/TrackCard";
import UrlInput from "../../../Components/SingleTrack/UrlInput";
import { ISongInfo } from "../../../shared/models/ISongInfo";
import { IState } from "../../../shared/models/IState";
import { FetchSingleInfoAction, DownloadSingleAction } from "./redux/actions";

type SingleTrackPageProps = ISingleTrackPageProps & IDispatchProps;

interface ISingleTrackPageProps {
  currentUrl: string;
  info?: ISongInfo;
  loading: boolean;

}

interface IDispatchProps {
  download: (id: string) => void;
  submitUrl: (val: string) => void;
}

const SingleTrackPage: React.FC<SingleTrackPageProps> = (props) => {
  const {currentUrl, download, info, loading, submitUrl} = props;
  return (
    <main>
      <UrlInput onSubmit={submitUrl} />
      { currentUrl !== "" ? <TrackCard info={info} loading={loading} onDownload={download} /> : null}
    </main>
  );
};

const mapStateToProps = (state: IState): ISingleTrackPageProps => ({
  currentUrl: state.SingleTrack.currentUrl,
  info: state.SingleTrack.songInfo,
  loading: state.SingleTrack.loading,
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  download: id=>dispatch(DownloadSingleAction(id)),
  submitUrl: (url) => {dispatch(FetchSingleInfoAction(url)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleTrackPage);
