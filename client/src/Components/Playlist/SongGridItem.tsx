import { Checkbox, GridListTile, GridListTileBar } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ISongInfo } from '../../shared/models/ISongInfo';

interface ISongGridItemProps {
  song: ISongInfo;
}

export const SongGridItem: React.FC<ISongGridItemProps> = props => {
  let { song } = props

  return (
    <GridListTile>
      <img src={song.thumbnail} alt={song.title} />
      <GridListTileBar
        title={song.title}
        subtitle={`By: ${song.artist}`}
        actionIcon={<Checkbox color="primary" />}
      />
    </GridListTile>
  )
}