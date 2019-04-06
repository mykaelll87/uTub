import React from 'react';
import UrlInput from '../Components/SingleTrack/UrlInput';
import TrackCard from '../Components/SingleTrack/TrackCard';

function SingleTrackPage(props){
    return(
        <main>
            <UrlInput/>
            <TrackCard/>         
        </main>
    )
}

export default SingleTrackPage