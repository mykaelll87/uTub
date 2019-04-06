import { Card, CardActions, CardContent, CardMedia, CircularProgress, IconButton, StyleRulesCallback, Typography, withStyles } from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { apiUrl } from '../../consts';
import { ISongInfo } from '../../shared/models/ISongInfo';

const styles: StyleRulesCallback<'card' | 'cardMedia' | 'circularProgress'> = theme => ({
  card: {
    marginTop: theme.spacing.unit * 4,
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    marginBottom: theme.spacing.unit * 2
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%'
  },
  circularProgress: {
    textAlign: 'center'
  }
});

interface ITrackCardProps {
  loading: boolean;
  info: ISongInfo;
  classes?: any;
}

class TrackCard extends Component<ITrackCardProps>{
  constructor(p) {
    super(p)
    this.state = { title: p.info.title }
  }

  downloadSong = async () => {
    // let blobUrl = await download(this.props.info.id)
    let a = document.createElement('form')
    // a.download = this.props.info.title+'.mp3'
    // a.href = await blobUrl
    a.action = `${apiUrl}/single/download/${this.props.info.id}`
    a.target = "open"
    a.method = "POST"
    a.submit()
  }

  renderInfo = () => (
    <>
      <CardMedia
        className={this.props.classes.cardMedia}
        image={this.props.info.thumbnail}
        title="thumbnail"
      />
      <CardContent>
        <Typography gutterBottom component='h2' variant='h5'>{this.props.info.title}</Typography>
        <Typography component='p'>{this.props.info.artist}</Typography>
      </CardContent>
      <CardActions>
        <form target="open" method="post" action={`${apiUrl}/single/download`}>
          <IconButton type="submit" onClick={this.downloadSong}>
            <CloudDownload />
          </IconButton>
          <input type="hidden" name="id" value={this.props.info.id} />
          <input type="hidden" name="title" value={this.props.info.title} />
        </form>
      </CardActions>
    </>
  )
  render() {
    if (!this.props.loading && !(this.props.info && Object.keys(this.props.info).length)) return null
    else return (
      <Card className={this.props.classes.card}>
        {this.props.loading ?
          <div style={{ textAlign: "center", width: '100%' }}><CircularProgress /></div>
          : this.renderInfo()}
      </Card>
    )
  }
}

function mapStateToProps(state) {
  const { singleTrack } = state
  const { info, loading } = singleTrack || { info: {}, loading: false }

  return { info, loading }
}

export default withStyles(styles)(connect(mapStateToProps)(TrackCard))