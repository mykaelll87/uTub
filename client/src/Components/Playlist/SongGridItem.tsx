import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { GridListTile, GridListTileBar, Checkbox } from '@material-ui/core';

export default class SongGridItem extends Component{
    render(){
        let {song} = this.props

        return (
            <GridListTile>
                <img src={song.thumbnail} alt={song.title}/>
                <GridListTileBar
                    title={song.title}
                    subtitle={`By: ${song.artist}`}
                    actionIcon={<Checkbox color="primary"/>}
                />
            </GridListTile>
        )
    }
}

SongGridItem.propTypes = {
    song: PropTypes.shape({
        thumbnail:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        artist:PropTypes.string.isRequired
    }).isRequired
}