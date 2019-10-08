import { Card, CircularProgress, Theme, withStyles } from "@material-ui/core";
import React from "react";
import { ISongInfo } from "../../../shared/models/ISongInfo";
import TrackInfo from "./TrackInfo";

const styles = (theme: Theme) => ({
  card: {
    marginBottom: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 4,
    width: "auto",
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginLeft: "auto",
      marginRight: "auto",
      width: 600,
    },
  },
  circularProgress: {
    textAlign: "center" as "center",
    width: "100%",
  },
});

interface ITrackCardProps {
  loading: boolean;
  info?: ISongInfo;
  classes: Record<"card" | "circularProgress", string>;
  onDownload: (id: string)=>void;
}

const TrackCard: React.FC<ITrackCardProps> = (props) => {
  const { classes, info, loading, onDownload } = props;
  return (
    <Card className={classes.card}>
      {
        loading ?
          <div className={classes.circularProgress}>
            <CircularProgress />
          </div> :
          info ? <TrackInfo info={info} onClick={onDownload}/> : null
      }
    </Card>
  );
};

export default withStyles(styles)(TrackCard);
