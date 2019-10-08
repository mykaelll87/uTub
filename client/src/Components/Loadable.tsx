import { CircularProgress, Paper, Theme, withStyles } from "@material-ui/core";
import React from "react";

const styles = (theme: Theme) => ({
  loading: {
    textAlign: "center" as "center",
    width: "100%",
  },
  paper: {
    alignItems: "center",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 4,
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

interface ILoadableProps {
  children: React.ReactNode;
  classes: Record<"paper" | "loading", string>;
  loading: boolean;
}

const Loadable: React.FC<ILoadableProps> = (p) => {
  return (
    <Paper className={p.classes.paper}>
      {p.loading ? (
        <div className={p.classes.loading}>
          <CircularProgress />
        </div>
      ) : (
        p.children
      )}
    </Paper>
  );
};

export default withStyles(styles)(Loadable);
