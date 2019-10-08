import { Button, Paper, StyleRulesCallback, TextField, withStyles, FormControl, FormHelperText } from "@material-ui/core";
import React, { Component, FormEvent } from "react";
import { extractIdFromUrl } from "../../utils/YoutubeIds";

const styles: StyleRulesCallback<"urlPaper"|"form"> = (theme) => ({
  form: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  urlPaper: {
    alignItems: "center",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    width: "auto",
    [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
      marginLeft: "auto",
      marginRight: "auto",
      width: 800,
    },
  },
});

interface IUrlInputProps {
  classes: Record<"urlPaper"|"form", string>;
  onSubmit: (url: string) => void;
}
interface IUrlInputState{
  error?: string;
  url:string
}

class UrlInput extends Component<IUrlInputProps, IUrlInputState> {
  constructor(p: IUrlInputProps) {
    super(p);
    this.state = {
      url: "",
    };
  }

  public handleSubmit = (e: FormEvent) => {
    try{
      const id = extractIdFromUrl(this.state.url);
      this.props.onSubmit(id)
    } catch(_e){
      this.setState({error: "Invalid url"})
    }
  }

  public render() {
    return (
      <Paper className={this.props.classes.urlPaper}>
        <form autoComplete="off" className={this.props.classes.form} onSubmit={this.handleSubmit}>
          <TextField
            label="Url"
            value={this.state.url}
            margin="normal"
            fullWidth
            required
            error={!!this.state.error}
            FormHelperTextProps={{children: this.state.error}}
            onChange={(event) => { this.setState({ url: event.target.value, error: undefined }); }}
          />
          <Button onClick={this.handleSubmit} variant="contained" color="primary">Submit</Button>
        </form>
      </Paper>
    );
  }
}

export default withStyles(styles)(UrlInput);
