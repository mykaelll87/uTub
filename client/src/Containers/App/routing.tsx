import { Route, Switch } from "react-router";
import PlaylistPage from "../../Pages/PlaylistPage";
import SingleTrackPage from "../SingleTrack/SingleTrackPage";
import { FourOFour } from "../404";

export const Routing: React.FC = props => (
  <Switch>
    <Route path="/url" component={SingleTrackPage} />
    <Route path="/playlist" component={PlaylistPage} />
    <Route path="/" exact />
    <Route component={FourOFour} />
  </Switch>
)