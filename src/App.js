import React, { useState } from "react";
import About from "./components/pages/About";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Portfolio from "./components/pages/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="sd-photo"></div>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/">
          <Redirect to="/about" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
