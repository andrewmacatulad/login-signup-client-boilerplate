import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./component/HomePage";
import Header from "./app/layout/Header";
import Footer from "./app/layout/Footer";
import SignIn from "./signin/SignInPage";
import TestModalPage from "./component/TestModalPage";
import PrivateRoute from "./component/common/PrivateRoute";

import { getUser } from "./signin/signInAction";

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={HomePage} />
        <Switch>
          <PrivateRoute path="/signin" component={SignIn} />
          {/* <PrivateRoute path="/signin">
            <SignIn />
          </PrivateRoute> */}
          <Route path="/test" component={TestModalPage} />
        </Switch>
        {/* <PrivateRoute path="/dashboard" component={TestModalPage} /> */}
        <Footer />
      </div>
    );
  }
}

export default connect(
  null,
  { getUser }
)(App);
// export default App;
