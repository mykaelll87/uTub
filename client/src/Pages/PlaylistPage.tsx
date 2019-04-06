import React from 'react';
import PlayListResult from '../Components/Playlist/PlaylistResult';
import UrlInput from '../Components/Playlist/UrlInput';

export const PlaylistPage: React.FC = props => {
  return (
    <main>
      <UrlInput />
      <PlayListResult />
    </main>
  )
}