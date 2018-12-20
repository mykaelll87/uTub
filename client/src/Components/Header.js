import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles'

class Header extends Component{
    render(){
        /* todo Inclure le react router */
        /* todo mettre des liens vers les différentes pages */
        const pages = [{path:"/", name:"Home"}]
        return(
            <AppBar position="static" className={this.props.classes.appBar}>
                <Toolbar>
                    <Typography variant="h4" color="inherit" noWrap>
                    µtub
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles({appBar:{position:'relative'}})(Header)