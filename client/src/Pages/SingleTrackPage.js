import React from 'react';
import {connect} from 'react-redux';
import UrlInput from '../Components/SingleTrack/UrlInput';
import TrackCard from '../Components/SingleTrack/TrackCard';

function SingleTrackPage(props){
    return(
        <main>
            <UrlInput fetchInfo={props.fetchInfo}/>
            {props.loading||(props.info&&props.info.length)?
                <TrackCard info={props.info} loading={props.loading}/>:null}            
        </main>
    )
}

function mapStateToProps(state){
    const {singleTrack} = state
    const {info, loading} = singleTrack||{info:{},loading:false}

    return {info, loading}
}

export default connect(mapStateToProps)(SingleTrackPage)