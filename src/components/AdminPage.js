import React from "react";
import { Link } from "react-router-dom";
import "../styles/tabStyles.css";
import "../styles/buttonStyles.css";
import "../styles/formStyles.css";

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <h3 className="main-base-title">
          Добро пожаловать в панель администратора!
        </h3>
        <body class="main-elements">
          <div class="container">
            <div class="box">
              <div class="content">
                <h2 className="main_h2">#1</h2>

                <h3>Добавить банк</h3>
                <p className="main-p">
                  Добавить информацию о новом банке в систему
                </p>
                <Link className="link-main" to="/new-bank">
                  Перейти
                </Link>
              </div>
            </div>
            <div class="box">
              <div class="content">
                <h2 className="main_h2">#2</h2>
                <h3>Изменить информацию</h3>
                <p className="main-p">
                  Изменить информацию существующего в системе банка
                </p>
                <Link className="link-main" to="./edit-bank">
                  Начать тестирование
                </Link>
              </div>
            </div>
            <div class="box">
              <div class="content">
                <h2 className="main_h2">#3</h2>
                <h3>Удалить банк</h3>
                <p className="main-p">Удалить существующий банк из системы</p>
                <Link className="link-main" to="/delete-bank">
                  Перейти
                </Link>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

/* <div class="module darken"> */

/* <div class="text"> Center</div> */

/* </div> */

/* <img src={Main2} className="Main2-svg" alt="Main 2" /> */

/* <h1>Put your "Hello" info here</h1> */

/* <Link to="/test">Перейти к тесту</Link> */
