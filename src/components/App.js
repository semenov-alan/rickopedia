import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/tabStyles.css";
import "../styles/buttonStyles.css";
import "../styles/formStyles.css";
import TestPage from "../TestPage";
import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import RateCalculator from "./RateCalculator";
import NavigationBar from "./NavBar";
import AdminPage from "./AdminPage";
import DeleteBank from "./DeleteBank";
import BankOperations from "./BankOperations";
import { Link } from "react-router-dom";
import "../styles/tabStyles.css";
import "../styles/buttonStyles.css";
import "../styles/formStyles.css";
import { Button } from "reactstrap";
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />

          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"}>
              <MainPage />
            </Route>
            <Route path="./test">
              <TestPage />
            </Route>
            <Route path="./about">
              <AboutPage />
            </Route>
            <Route path="./calculator">
              <RateCalculator />
            </Route>
            <Route path="./admin_pass">
              <AdminPage />
            </Route>
            <Route path="./delete-bank">
              <DeleteBank />
            </Route>
            <Route path="./new-bank">
              <BankOperations />
            </Route>
            <Route path="./edit-bank">
              <BankOperations />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
