import { Button, Paper, TextField, withStyles, StyleRulesCallback } from '@material-ui/core';
import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import { fetchInfo } from '../../redux/actions';

const styles: StyleRulesCallback<'urlPaper'|'form'> = theme => ({
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
})

interface UrlInputProps{
  dispatch: Dispatch<any>;
  classes: Record<'urlPaper'|'form', string>
}

class UrlInput extends Component<UrlInputProps, {url: string}> {
  constructor(p) {
    super(p)
    this.state = {
      url: ""
    }
  }

  handleSubmit = (e) => {
    this.props.dispatch(fetchInfo(this.state.url))
  }

  render() {
    return (
      <Paper className={this.props.classes.urlPaper}>
        <form autoComplete="off" noValidate className={this.props.classes.form} onSubmit={this.handleSubmit}>
          <TextField
            label="Url"
            value={this.state.url}
            margin="normal"
            fullWidth
            onChange={(event) => { this.setState({ url: event.target.value }) }}
          />
          <Button onClick={this.handleSubmit} variant="contained" color="primary">Submit</Button>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(connect()(UrlInput))