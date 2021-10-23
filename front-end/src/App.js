import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const VendorLayout = React.lazy(() => import("./vendor/VendorContainers/VendorLayout"));
const AdminLayout = React.lazy(() => import("./admin/adminContainers/AdminLayout"));
// Pages
const Home = React.lazy(() => import("./views/pages/home/Home"));
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/"
              name="Home Page"
              render={(props) => <Home {...props} />}
            />
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <Route
              exact
              path="/admindashboard"
              name="AdminDashboard"
              render={(props) => <AdminLayout {...props} />}
            />
            <Route
              path="/dashboard"
              name="VendorDashboard"
              render={(props) => <VendorLayout {...props} />}
            />
             
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
