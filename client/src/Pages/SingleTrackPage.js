import React, {Component} from 'react'
import UrlInput from '../Components/SingleTrack/UrlInput';
import TrackCard from '../Components/SingleTrack/TrackCard';

class SingleTrackPage extends Component{
    constructor(p){
        super(p)
        this.state = {
            loading:false,
        }
    }
    render(){
        return(
            <main>
                <UrlInput/>
                <TrackCard/>
            </main>
        )
    }
}

export default SingleTrackPage