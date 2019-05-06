import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
import Wines from "./pages/Wines";
import EmployeePage from "./pages/EmployeePage";
import Admin from "./pages/Admin";
// import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home"
// import Nav from "./components/Nav";
// import Question from "./pages/Question";
function App() {
  return (
    <Router>
      
        {/* <Nav /> */}
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/wines" component={Wines} />
        <Route exact path="/employeepage" component={EmployeePage} />
          <Route component={NoMatch} />
        </Switch>
      
    </Router>
  );
}

export default App;
