import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

import "./App.css";
// import HomePage from "./component/HomePage";
import Header from "./app/layout/Header";
import Footer from "./app/layout/Footer";
// import SignIn from "./signin/SignInPage";
// import TestModalPage from "./component/TestModalPage";
import PrivateRoute from "./component/common/PrivateRoute";

import { getUser } from "./signin/signInAction";
import LoadingComponent from "./app/layout/LoadingComponent";

const AsyncHomePage = Loadable({
  loader: () => import("./component/HomePage"),
  loading: LoadingComponent
});

const AsyncLoginPage = Loadable({
  loader: () => import("./signin/SignInPage"),
  loading: LoadingComponent
});

const AsyncTestPage = Loadable({
  loader: () => import("./component/TestModalPage"),
  loading: LoadingComponent
});

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={AsyncHomePage} />
        <Switch>
          <PrivateRoute path="/signin" component={AsyncLoginPage} />
          {/* <PrivateRoute path="/signin">
            <SignIn />
          </PrivateRoute> */}
          <Route path="/test" component={AsyncTestPage} />
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
