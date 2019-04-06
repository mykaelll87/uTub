import React, {Component} from 'react'
import UrlInput from '../Components/Playlist/UrlInput';
import PlayListResult from '../Components/Playlist/PlaylistResult';

export default class PlaylistPage extends Component{
    render(){
        return (
            <main>
                <UrlInput/>
                <PlayListResult/>
            </main>
        )
    }
}