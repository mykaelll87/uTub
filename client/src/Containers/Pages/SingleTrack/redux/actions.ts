import { ISongInfo } from "../../../../shared/models/ISongInfo";
import * as constants from "../constants";

export type SingleTrackActions = IRequestSingleInfoAction
  | IRecieveSingleInfoAction;

export interface IFetchSingleInfoAction {
  type: constants.FETCH_SINGLE_INFO;
  url: string;
}
export const FetchSingleInfoAction = (url: string): IFetchSingleInfoAction => ({
  type: constants.FETCH_SINGLE_INFO,
  url,
});

export interface IRequestSingleInfoAction {
  type: constants.REQUEST_SINGLE_INFO;
  url: string;
}
export const RequestSingleInfoAction = (url: string): IRequestSingleInfoAction => ({
  type: constants.REQUEST_SINGLE_INFO,
  url
});

export interface IRecieveSingleInfoAction {
  data: ISongInfo;
  type: constants.RECIEVE_SINGLE_INFO;
}
export const RecieveSingleInfoAction = (
  data: ISongInfo,
): IRecieveSingleInfoAction => ({
  data,
  type: constants.RECIEVE_SINGLE_INFO,
});

export interface IFetchSingleInfoFailedAction {
  type: constants.FETCH_SINGLE_INFO_FAILED;
}
export const FetchSingleInfoFailedAction = (): IFetchSingleInfoFailedAction => ({
  type: constants.FETCH_SINGLE_INFO_FAILED,
});

export interface IDownloadSingleAction {
  type: constants.DOWNLOAD_SINGLE;
  id: string;
}
export const DownloadSingleAction = (id: string): IDownloadSingleAction => ({
  type: constants.DOWNLOAD_SINGLE,
  id
})

export interface IDownloadSingleFailedAction {
  type: constants.DOWNLOAD_SINGLE_FAILED;
}
export const DownloadSingleFailedAction = (): IDownloadSingleFailedAction => ({
  type: constants.DOWNLOAD_SINGLE_FAILED
}) 
