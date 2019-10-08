import { ILoadable } from "../../../shared/models/Utils/ILoadable";
import { IPlaylistFormState } from "../../../shared/models/Forms/IPlaylistFormState";
import { IPlaylistData } from "../../../shared/models/IPlaylistData";

export interface IPlaylistState extends ILoadable{
  filters: IPlaylistFormState;
  data: IPlaylistData;
}