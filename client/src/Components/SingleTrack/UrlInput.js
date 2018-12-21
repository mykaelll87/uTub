import React, {Component} from 'react'
import {Paper, TextField, Button, withStyles} from '@material-ui/core';

const styles= theme=>({
    urlPaper:{
        marginTop: theme.spacing.unit * 8,
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        width: 'auto',
        marginLeft: theme.spacing.unit *3,
        marginRight: theme.spacing.unit*3,
        [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    form:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:'100%'
    },
})

class UrlInput extends Component{
    constructor(p){
        super(p)
        this.state = {
            url:""
        }
    }
    render(){
        return (
            <Paper className={this.props.classes.urlPaper}>
                <form autoComplete="off" noValidate className={this.props.classes.form}>
                    <TextField
                        label="Url"
                        value={this.state.url}
                        margin="normal"
                        fullWidth
                        onChange={(event)=>{this.setState({url:event.target.value})}}
                    />
                    <Button variant="contained" color="primary">Submit</Button>
                </form>
            </Paper>
        )
    }
}

export default withStyles(styles)(UrlInput)