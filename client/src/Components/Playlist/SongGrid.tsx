import { GridList, GridListTile, ListSubheader, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { IPlaylistData } from "../../shared/models/IPlaylistData";
import { ISongInfo } from "../../shared/models/ISongInfo";
import { SongGridItem } from "./SongGridItem";

export const SongGrid: React.FC<IPlaylistData> = (props: IPlaylistData) => {
  const [selected, setSelected] = useState<ISongInfo[]>([]);

  const onCheck = (song: ISongInfo) => {
    setSelected([...selected, song]);
  };

  return (
    <div>
      <Typography variant="h3"></Typography>
      <Typography variant="h4">{selected.length} chansons sélectionnées</Typography>
      <GridList>
        {props.songs.map((song: ISongInfo) => (
          <SongGridItem key={song.title} song={song} onCheck={onCheck} />
        ))}
      </GridList>
    </div>
  );
};

export default SongGrid;
