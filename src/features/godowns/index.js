import React from "react";
import { Switch, Route } from "react-router-dom";

import ListService from "./_list";
import CreateService from "./_create";
import AddRowService from "./_addRow";

export default class Routes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/features/godowns/list" component={ListService} />
          <Route
            exact
            path="/features/godowns/create"
            component={CreateService}
          />
          <Route
            exact
            path="/features/godowns/add/row"
            component={AddRowService}
          />
        </Switch>
      </React.Fragment>
    );
  }
}
