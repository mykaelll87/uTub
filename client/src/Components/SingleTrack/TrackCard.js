import React, {Component} from 'react'
import {Card, CardContent, CardActions, CardMedia,CircularProgress ,withStyles, Typography, IconButton } from '@material-ui/core';
import {FontDownload, CloudDownload} from '@material-ui/icons'
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
    constructor(p){
        super(p)
        this.state={
            loading:false,
            info:{
                thumbnail:"https://i.ytimg.com/vi/_uigJsr9sFA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIxCGAFwAQ==&rs=AOn4CLBkBXJe7ng11HB_VHkKwCd3KifLqg",
                titre:"Allo",
                artist:"Moé"
            }
        }
    }

    renderInfo=()=>(
        <React.Fragment>
            <CardMedia 
                className={this.props.classes.cardMedia}
                image={this.state.info.thumbnail}
                title="thumbnail"
            />
            <CardContent>
                <Typography gutterBottom component='h2' variant='h5'>{this.state.info.titre}</Typography>
                <Typography component='p'>{this.state.info.artist}</Typography>
            </CardContent>
            <CardActions>
                <IconButton><CloudDownload/></IconButton>
            </CardActions>
        </React.Fragment>
    )
    render(){
        return(
        <Card className={this.props.classes.card}>
            {this.state.loading?
                <div style={{textAlign:"center", width:'100%'}}><CircularProgress/></div>
                :this.renderInfo()}                    
        </Card>
        )
    }
}

export default withStyles(styles)(TrackCard)