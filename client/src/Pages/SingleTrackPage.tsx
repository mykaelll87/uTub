import React from 'react';
import UrlInput from '../Components/SingleTrack/UrlInput';
import TrackCard from '../Components/SingleTrack/TrackCard';

const SingleTrackPage: React.FC = props => {
  return (
    <main>
      <UrlInput />
      <TrackCard />
    </main>
  )
}

export default SingleTrackPage