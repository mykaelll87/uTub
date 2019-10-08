import { all } from "redux-saga/effects";
import { RegisterSingleTrackSagas } from "../Containers/Pages/SingleTrack/redux/sagas";

export function* RootSaga(){
  yield all([
    RegisterSingleTrackSagas()
  ])
}