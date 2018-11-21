import React from "react";
import { Route } from "react-router-dom";
import Nav from "./nav";
import Welcome from "./welcome";
import OurMacarons from "./our-macarons";

export default () => (
  <div className="container">
    <Nav />
    <Route exact path="/" component={Welcome} />
    <Route path="/our-macarons" component={OurMacarons} />
  </div>
);
