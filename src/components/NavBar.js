import React from "react";
import ReactLogo from "../logo.svg";

import { Link } from "react-router-dom";
import "../styles/tabStyles.css";
import "../styles/buttonStyles.css";
import "../styles/formStyles.css";

export default class NavigationBar extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <Link to={process.env.PUBLIC_URL + "/"}>
          <img src={ReactLogo} className="App-logo" alt="React Logo" />
        </Link>
        <ul className="nav-links">
          <li className="nav-elements">
            <Link className="text-links" to={process.env.PUBLIC_URL + "/"}>
              Главная
            </Link>
          </li>
          <li className="nav-elements">
            <Link className="text-links" to="/about">
              Основная информация
            </Link>
          </li>
          <li className="nav-elements">
            <Link className="text-links" to="/calculator">
              Кредитный калькулятор
            </Link>
          </li>
          <li className="nav-elements">
            <Link className="text-links" to="/test">
              Скоринговый тест
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
