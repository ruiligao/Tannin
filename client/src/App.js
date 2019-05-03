import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
// import Home from "./pages/Home";
import Wines from "./pages/Wines";
import EmployeePage from "./pages/EmployeePage";
import Admin from "./pages/Admin";
// import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/wines" component={Wines} />
        <Route exact path="/employeepage" component={EmployeePage} />
          {/* <Route exact path="/home" component={Home} /> */}
          {/* <Route exact path="/saved" component={Saved} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
