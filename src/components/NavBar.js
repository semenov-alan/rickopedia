import React from "react";
import ReactLogo from "../logo.svg";

import {
    Link
}
from "react-router-dom";
import "../styles/tabStyles.css";
import "../styles/buttonStyles.css";
import "../styles/formStyles.css";

export default class NavigationBar extends React.Component {
    render() {
        return(<nav className="nav-bar"> <ul className="nav-links"> <li className="nav-elements"> <Link to="/"> <img src={ReactLogo} className="App-logo" alt="React Logo" /> </Link> </li> <li className="nav-elements"> <Link className="text-links" to="/"> Главная </Link> </li> <li className="nav-elements"> <Link className="text-links" to="/about"> Основная информация </Link> </li> <li className="nav-elements"> <Link className="text-links" to="/calculator"> Кредитный калькулятор </Link> </li> <li className="nav-elements"> <Link className="text-links" to="/test"> Скоринговый тест </Link> </li> <li className="nav-elements"> <Link className="text-links" to="/admin_pass"> Панель администратора </Link> </li> </ul> </nav>);
    }
}
