import { Checkbox, GridListTile, GridListTileBar } from "@material-ui/core";
import React from "react";
import { ISongInfo } from "../../shared/models/ISongInfo";

interface ISongGridItemProps {
  onCheck: (song: ISongInfo, checked: boolean) => void;
  song: ISongInfo;
}

export const SongGridItem: React.FC<ISongGridItemProps> = (props) => {
  const { onCheck, song } = props;

  const callback = (event: React.ChangeEvent<HTMLInputElement>) => {
    onCheck(song, event.target.checked);
  };

  return (
    <GridListTile>
      <img src={song.thumbnail} alt={song.title} />
      <GridListTileBar
        title={song.title}
        subtitle={`By: ${song.artist}`}
        actionIcon={<Checkbox color="primary" onChange={callback} />}
      />
    </GridListTile>
  );
};
