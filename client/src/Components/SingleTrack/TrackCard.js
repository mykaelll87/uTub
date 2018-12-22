import React, {Component} from 'react'
import {Card, CardContent, CardActions, CardMedia,CircularProgress ,withStyles, Typography, IconButton } from '@material-ui/core';
import {CloudDownload} from '@material-ui/icons'
import PropTypes from 'prop-types'
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
    renderInfo=()=>(
        <React.Fragment>
            <CardMedia 
                className={this.props.classes.cardMedia}
                image={this.props.info.thumbnail}
                title="thumbnail"
            />
            <CardContent>
                <Typography gutterBottom component='h2' variant='h5'>{this.props.info.titre}</Typography>
                <Typography component='p'>{this.props.info.artist}</Typography>
            </CardContent>
            <CardActions>
                <IconButton><CloudDownload/></IconButton>
            </CardActions>
        </React.Fragment>
    )
    render(){
        return(
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
        thumbnail:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        artist:PropTypes.string.isRequired
    }).isRequired
}

export default withStyles(styles)(TrackCard)