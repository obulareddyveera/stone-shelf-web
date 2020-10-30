import React from "react";
import { Switch, Route } from "react-router-dom";

import HomeService from "./_home";

export default class Routes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            exact
            path="/features/dashboard/home"
            component={HomeService}
          />
        </Switch>
      </React.Fragment>
    );
  }
}
