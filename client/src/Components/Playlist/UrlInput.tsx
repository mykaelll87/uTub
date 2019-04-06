import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Theme, withStyles } from '@material-ui/core';
import React, { Component } from 'react';

const styles = (theme: Theme) => ({
  urlPaper: {
    marginTop: theme.spacing.unit * 8,
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
  form: {
    display: 'flex',
    flexFlow: 'row noWrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  fieldDiv: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'baseline'
  },
  nbSelect: {
    minWidth: '20%',
    marginLeft: 10
  }
})

interface UrlInputState {
  url: string;
  itemCount: string;
}

class UrlInput extends Component<any, UrlInputState>{
  constructor(p:any) {
    super(p)
    this.state = {
      url: "",
      itemCount: ""
    }
  }
  render() {
    return (
      <Paper className={this.props.classes.urlPaper}>
        <form autoComplete="off" noValidate className={this.props.classes.form}>
          <div className={this.props.classes.fieldDiv}>
            <TextField
              label="Url"
              value={this.state.url}
              margin="normal"
              fullWidth
              onChange={(event) => { this.setState({ url: event.target.value }) }}
            />
            <FormControl className={this.props.classes.nbSelect}>
              <InputLabel>Item count</InputLabel>
              <Select value={this.state.itemCount}
                onChange={(e) => this.setState({ itemCount: e.target.value })}
              >
                <MenuItem>5</MenuItem>
                <MenuItem>10</MenuItem>
                <MenuItem>15</MenuItem>
                <MenuItem>25</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button variant="contained" color="primary">Submit</Button>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(UrlInput)