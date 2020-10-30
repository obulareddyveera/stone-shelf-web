import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import GoogleLogin from "./oauth/googleLogin";
import GatewayService from "./oauth/gateway";
import FeaturesRouter from "./features/routes";

const history = createBrowserHistory();
export default class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/features/*" component={FeaturesRouter} />
          <Route path="/oauth/gateway" component={GatewayService} />
          <Route path="/" component={GoogleLogin} />
        </Switch>
      </BrowserRouter>
    );
  }
}
