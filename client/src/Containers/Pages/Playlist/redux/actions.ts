import * as constants from '../constants';
import { IPlaylistFormState } from '../../../../shared/models/Forms/IPlaylistFormState';

export type PlaylistPageActions = IFetchPlaylistInfoAction
  |IFetchPlaylistInfoSuccessAction

export interface IFetchPlaylistInfoAction {
  type: constants.FETCH_PLAYLIST_INFO;
  filters: IPlaylistFormState;
}
export const FetchPlaylistInfoAction = (data: IPlaylistFormState): IFetchPlaylistInfoAction => ({
  type: constants.FETCH_PLAYLIST_INFO,
  filters: data
});

export interface IFetchPlaylistInfoSuccessAction {
  type: constants.FETCH_PLAYLIST_INFO_SUCCESS;
  data: unknown //TODO;
}
export const FetchPlaylistInfoSuccessAction = (data: unknown): IFetchPlaylistInfoSuccessAction =>({
  type: constants.FETCH_PLAYLIST_INFO_SUCCESS,
  data
});