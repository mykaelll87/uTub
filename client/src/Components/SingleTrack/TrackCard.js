import React, {Component} from 'react'
import {Card, CardContent, CardActions, CardMedia,CircularProgress ,withStyles, Typography, IconButton } from '@material-ui/core';
import {CloudDownload} from '@material-ui/icons'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {download} from '../../utils/singleDownload'
const styles = theme =>({
    card:{
        marginTop: theme.spacing.unit * 4,
        width: 'auto',
        marginLeft: theme.spacing.unit *3,
        marginRight: theme.spacing.unit*3,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        marginBottom:theme.spacing.unit *2
    },
    cardMedia:{
        height: 0,
        paddingTop: '56.25%'
    },
    circularProgress:{
        textAlign:'center'
    }
});

class TrackCard extends Component{
    constructor(p){
        super(p)
        this.state = {title: p.title}
    }
    downloadSong= async ()=>{
        console.log('bon matin')
        let blobUrl = await download(this.props.info.id)
        let a = document.createElement('a')
        a.download = this.props.info.title
        a.href = await blobUrl
        a.click()
    }

    renderInfo=()=>(
        <React.Fragment>
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
                <IconButton onClick={this.downloadSong}>
                    <CloudDownload/>
                </IconButton>
            </CardActions>
        </React.Fragment>
    )
    render(){
        if (!this.props.loading&&!(this.props.info&&Object.keys(this.props.info).length)) return null
         else return(
            <Card className={this.props.classes.card}>
                {this.props.loading?
                    <div style={{textAlign:"center", width:'100%'}}><CircularProgress/></div>
                    :this.renderInfo()}                    
            </Card>
        )
    }
}

TrackCard.propTypes = {
    loading: PropTypes.bool.isRequired,
    info: PropTypes.shape({
        id:PropTypes.string,
        thumbnail:PropTypes.string,
        title:PropTypes.string,
        artist:PropTypes.string
    })
}

function mapStateToProps(state){
    const {singleTrack} = state
    const {info, loading} = singleTrack||{info:{},loading:false}

    return {info, loading}
}

export default withStyles(styles)(connect(mapStateToProps)(TrackCard))