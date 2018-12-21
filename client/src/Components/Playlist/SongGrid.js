import React, {Component} from 'react'
import PropType from 'prop-types'
import { GridList, GridListTile, ListSubheader } from '@material-ui/core';
import SongGridItem from './SongGridItem';

class SongGrid extends Component{
    render(){
        return (
            <GridList>
                <GridListTile style={{height:"auto", width:"100%"}}>
                    <ListSubheader component="div">
                        Un titre intéressant
                    </ListSubheader>
                </GridListTile>
                {this.props.songs.map(song=>(
                    <SongGridItem key={song.title} song={song}/>
                ))}
            </GridList>
        )
    }
}

SongGrid.propType = {
    songs: PropType.arrayOf(PropType.shape({
        thumbnail:PropType.string.isRequired,
        title:PropType.string.isRequired, 
        artist:PropType.string.isRequired
    })).isRequired
}

export default SongGrid