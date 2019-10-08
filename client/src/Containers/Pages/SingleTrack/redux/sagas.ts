import { call, put, takeLatest } from "redux-saga/effects";
import { apiUrl } from "../../../../consts";
import { ISongInfo } from "../../../../shared/models/ISongInfo";
import { FETCH_SINGLE_INFO, DOWNLOAD_SINGLE } from "../constants";
import {
  FetchSingleInfoFailedAction,
  IFetchSingleInfoAction,
  RecieveSingleInfoAction,
  RequestSingleInfoAction,
  IDownloadSingleAction,
  DownloadSingleFailedAction,
} from "./actions";

export function* RegisterSingleTrackSagas() {
  yield takeLatest(FETCH_SINGLE_INFO, fetchSingleInfoSaga);
  yield takeLatest(DOWNLOAD_SINGLE, downloadSingleSaga);
}

function* fetchSingleInfoSaga({ url }: IFetchSingleInfoAction) {
  try {
    yield put(RequestSingleInfoAction(url));
    const data: ISongInfo = yield call(fetchInfo, url);
    yield put(RecieveSingleInfoAction(data));
  } catch {
    yield put(FetchSingleInfoFailedAction());
  }
}

const fetchInfo = async (url: string): Promise<ISongInfo> => {
  return fetch(`${apiUrl}/single/info/${encodeURIComponent(url)}`).then((res) =>
    res.json(),
  );
};

function* downloadSingleSaga({id}: IDownloadSingleAction){
  try{
    console.log(id);
    const a = document.createElement('a');
    a.href = `${apiUrl}/single/download/${encodeURIComponent(id)}`
    a.click()
  } catch {
    yield put(DownloadSingleFailedAction())
  }
}