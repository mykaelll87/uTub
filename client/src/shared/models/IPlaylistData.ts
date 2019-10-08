import { ISongInfo } from "./ISongInfo";

export interface IPlaylistData{
  nextPageId?: string;
  prevPageId?: string;
  songs: ISongInfo[];
}