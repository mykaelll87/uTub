import { GridList, GridListTile, ListSubheader } from '@material-ui/core';
import React from 'react';
import { ISongInfo } from '../../shared/models/ISongInfo';
import { SongGridItem } from './SongGridItem';

interface ISongGridProps {
  songs: ISongInfo[]
}

const SongGrid: React.FC<ISongGridProps> = props => {
  return (
    <GridList>
      <GridListTile style={{ height: "auto", width: "100%" }}>
        <ListSubheader component="div">
          Un titre intéressant
                  </ListSubheader>
      </GridListTile>
      {props.songs.map(song => (
        <SongGridItem key={song.title} song={song} />
      ))}
    </GridList>
  )
}

export default SongGrid