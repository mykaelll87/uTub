import { CircularProgress, Paper, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import SongGrid from './SongGrid';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 4,
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
})

class PlayListResult extends Component {
  constructor(p) {
    super(p);
    this.state = {
      loading: false,
      songs: [
        {
          thumbnail: "https://i.ytimg.com/vi/AkX-MunOPdE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIxCGAFwAQ==&rs=AOn4CLAEOrIQtt-YitTUbs4dLsKTjLtIhg",
          title: "Allo",
          artist: "Salut"
        }, {
          thumbnail: "https://i.ytimg.com/vi/AkX-MunOPdE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIxCGAFwAQ==&rs=AOn4CLAEOrIQtt-YitTUbs4dLsKTjLtIhg",
          title: "Bonjour",
          artist: "Salut"
        }
      ]
    }
  }

  render() {
    if (!this.state.loading && this.state.songs.length === 0) return null
    return (
      <Paper className={this.props.classes.paper}>
        {this.state.loading ?
          <div style={{ width: '100%', textAlign: 'center' }}><CircularProgress /></div>
          : <SongGrid songs={this.state.songs} />}
      </Paper>
    )
  }
}

export default withStyles(styles)(PlayListResult)