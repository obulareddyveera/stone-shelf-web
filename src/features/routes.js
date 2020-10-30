import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import HNav from "./../components/navbars/hNav";
import SideNav from "./../components/navbars/sideNav";
import DashboardFeature from "./dashboard";
import GodownsFeature from "./godowns";

const ContentSpace = styled.div`
  position: relative !important;
  width: 100%;
  margin-top: 2rem !important;
  padding: 2rem;
  @media (max-width: 720px) {
    padding: 0rem;
  }
`;

export default class Routes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HNav {...this.props} />
        <main className="mt-4" style={{ position: "relative" }}>
          <div className="d-flex" style={{ position: "relative" }}>
            <SideNav />
            <ContentSpace>
              <Switch>
                <Route
                  exact
                  path="/features/dashboard/*"
                  component={DashboardFeature}
                />
                <Route
                  exact
                  path="/features/godowns/*"
                  component={GodownsFeature}
                />
              </Switch>
            </ContentSpace>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
