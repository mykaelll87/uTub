import {
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  StyleRulesCallback,
  Typography,
  withStyles,
} from "@material-ui/core";
import { CloudDownload } from "@material-ui/icons";
import React from "react";
import { ISongInfo } from "../../../shared/models/ISongInfo";

const styles: StyleRulesCallback<"cardMedia"> = (theme) => ({
  cardMedia: {
    height: 0,
    paddingTop: "56.25%",
  },
});

interface ITrackInfoProps {
  info: ISongInfo;
  classes: Record<"cardMedia", string>;
  onClick: (id: string)=>void;
}

const TrackInfo: React.FC<ITrackInfoProps> = (props) => {
  const { classes, info, onClick } = props;

  return (
    <>
      <CardMedia
        className={classes.cardMedia}
        image={info.thumbnail}
        title="Thumbnail"
      />
      <CardContent>
        <Typography gutterBottom component="h2" variant="h5">
          {info.title}
        </Typography>
        <Typography component="p">{info.artist}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={()=>onClick(info.id)}>
          <CloudDownload />
        </IconButton>
      </CardActions>
    </>
  );
};

export default withStyles(styles)(TrackInfo);
