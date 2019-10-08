import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Theme,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import { IPlaylistFormState } from "../../shared/models/Forms/IPlaylistFormState";

const styles = (theme: Theme) => ({
  fieldDiv: {
    alignItems: "baseline",
    display: "flex",
    flexFlow: "row nowrap",
    width: "100%",
  },
  form: {
    alignItems: "center",
    display: "flex",
    flexFlow: "row noWrap",
    justifyContent: "center",
    width: "100%",
  },
  nbSelect: {
    marginLeft: 10,
    minWidth: "20%",
  },
  urlPaper: {
    alignItems: "center",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
    width: "auto",
    [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
      marginLeft: "auto",
      marginRight: "auto",
      width: 800,
    },
  },
});

interface IUrlInputProps {
  classes: Record< 'fieldDiv' | 'form' | 'nbSelect' | 'urlPaper',string>,
  onSubmit: (data: IPlaylistFormState)=>void
}

class UrlInput extends Component<IUrlInputProps, IPlaylistFormState> {
  constructor(p: IUrlInputProps) {
    super(p);
    this.state = {
      itemCount: "",
      url: "",
    };
  }
  private submitForm = ()=>{
    this.props.onSubmit(this.state)
  } 
  public render() {
    return (
      <Paper className={this.props.classes.urlPaper}>
        <form autoComplete="off" noValidate className={this.props.classes.form}>
          <div className={this.props.classes.fieldDiv}>
            <TextField
              fullWidth
              label="Url"
              margin="normal"
              onChange={(event) => {
                this.setState({ url: event.target.value });
              }}
              value={this.state.url}
            />
            <FormControl className={this.props.classes.nbSelect}>
              <InputLabel>Item count</InputLabel>
              <Select
                value={this.state.itemCount}
                onChange={(e) => this.setState({ itemCount: e.target.value })}
              >
                <MenuItem>5</MenuItem>
                <MenuItem>10</MenuItem>
                <MenuItem>15</MenuItem>
                <MenuItem>25</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button variant="contained" color="primary" onClick={this.submitForm}>
            Submit
          </Button>
        </form>
      </Paper>
    );
  }
}

export default withStyles(styles)(UrlInput);
