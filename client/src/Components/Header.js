import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Hidden, IconButton, Drawer, List,ListItem , ListItemText, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import {Link} from 'react-router-dom'

import '../css/Header.css'

const pages = [
    {path:"/", name:"Home"}, 
    {path:"/url", name: "Single Video"},
    {path:"/playlist", name:"Playlist"}
]

class Header extends Component{
    constructor(p){
        super(p)
        this.state = {
            drawer: false
        }
    }

    toggleDrawer=(newState)=>()=>{
        this.setState({drawer:newState})
    } 

    render(){
        /* todo Inclure le react router */
        /* todo mettre des liens vers les différentes pages */
        
        return(
            <header id="Header">
                <AppBar position="relative">
                    <Toolbar className="toolbar"> 
                        <Hidden mdUp>
                            <IconButton className="menuButton" color="inherit" aria-label="Menu"
                                onClick={this.toggleDrawer(true)}>
                                <MenuIcon/>
                            </IconButton>
                            <Drawer id="Drawer" open={this.state.drawer} onClose={this.toggleDrawer(false)}>
                            <List>
                                {pages.map(item=>(
                                    <ListItem button key={item.path}>
                                        <ListItemText primary={item.name}/>
                                    </ListItem>
                                ))}
                            </List>
                            </Drawer>
                        </Hidden>
                        <Typography variant="h4" color="inherit" noWrap>
                        µtub
                        </Typography>
                        <Hidden smDown>
                        <div className="links">
                            {pages.map(val=><Button key={val.path} component={Link} to={val.path} color="inherit">{val.name}</Button>)}
                        </div>
                        </Hidden>
                    </Toolbar>
                </AppBar>
            </header>
        )
    }
}

export default Header;