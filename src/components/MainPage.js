import React from "react";
import { Link } from "react-router-dom";

import "../styles/tabStyles.css";
import "../styles/buttonStyles.css";
import "../styles/formStyles.css";

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <h3 className="main-base-title">Добро пожаловать!</h3>
        <body class="main-elements">
          <div class="container">
            <div class="box">
              <div class="content">
                <h2 className="main_h2">#1</h2>

                <h3>Основная информацияz</h3>
                <p className="main-p">
                  Информация по системе кредитного скоринга
                </p>
                <Link className="link-main" to="/about">
                  Перейти
                </Link>
              </div>
            </div>
            <div class="box">
              <div class="content">
                <h2 className="main_h2">#2</h2>
                <h3>Кредитный скоринг</h3>
                <p className="main-p">
                  Пройти тест и узнать о возможности одобрения кредита
                </p>
                <Link className="link-main" to="/test">
                  Начать тестирование
                </Link>
              </div>
            </div>
            <div class="box">
              <div class="content">
                <h2 className="main_h2">#3</h2>
                <h3>Кредитный калькулятор</h3>
                <p className="main-p">
                  Воспользоваться кредитным калькулятором
                </p>
                <Link className="link-main" to="/calculator">
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
