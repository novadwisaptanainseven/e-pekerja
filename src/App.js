import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./scss/style.scss";
// import TheLayoutAdmin from "./containers/TheLayoutAdmin";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
// const TheLayout = React.lazy(() => import("./containers/TheLayout"));
const TheLayoutAdmin = React.lazy(() => import("./containers/TheLayoutAdmin"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

class App extends Component {
  render() {
    return (
      <Router>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/epekerja/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/epekerja/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/epekerja/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/epekerja/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <Route
              path="/epekerja/admin"
              name="Home"
              render={(props) => <TheLayoutAdmin {...props} />}
            />
            <Redirect from="/" to="/epekerja/admin/dashboard" />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
