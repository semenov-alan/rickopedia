import React from "react";
import { Link } from "react-router-dom";
import "../styles/tabStyles.css";
import "../styles/buttonStyles.css";
import "../styles/formStyles.css";
import { Button } from "reactstrap";

export default class AboutPage extends React.Component {
  render() {
    return (
      <div className="tabs">
        <h3 className="about-base-title">Основная информация</h3>
        <Tabs>
          <Tab label="Что такое скоринг?">
            <p className="about-text-1-bck">
              Скоринг — это программа оценки потенциального клиента, основанная
              на его анкетных данных. Чаще всего такая оценка заемщика
              используется при выдаче POS-кредитов в магазинах,
              экспресс-кредитовании или в микрофинансовых организациях.
            </p>
            <p className="about-text-2">
              Оценка скорингом исчисляется в баллах. По каждому отдельному
              пункту заемщик получает баллы, которые суммируются и представляют
              собой скоринговый балл. На основании этой оценки банк или МФО
              принимает решение о выдаче или отказе в предоставлении займа.
            </p>
            <p className="about-text-2">
              Чем выше балл на калькуляторе скоринга, тем выше шанс на получение
              одобрения. Чем ниже скоринговый балл, тем меньше шансов получить
              одобрение. Все закономерно.
            </p>
            <div>
              <div className="about-banner-card">
                <ul className="about-banner">
                  <li className="about-text-3-bck">
                    На нашем сайте вы можете пройти тест и узнать свой рейтинг
                    кредитоспособности.
                  </li>
                  <li>
                    <Link to="/test">
                      <Button className="btn-about">Перейти к тесту</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Tab>

          <Tab label="Как работает скоринговый калькулятор?">
            <p className="about-text-1-bck">
              Калькулятор скоринга анализирует ответы потенциального заемщика,
              оценивает их в баллах, суммирует все набранные очки и выдает
              итоговый скоринговый балл. На основании скорингового балла
              потенциального заемщика банк или другой кредитор принимает решение
              о выдаче или отказе в займе.
            </p>
            <p className="about-text-2">
              Пользователю нужно ответить на все вопросы калькулятора скоринга и
              дождаться оценки. На ее основании калькулятор посоветует, куда
              можно обратиться с таким скорингом, где есть шанс на одобрение
              займа.
            </p>
            <div>
              <div className="about-banner-card">
                <ul className="about-banner">
                  <li className="about-text-3-bck">
                    На нашем сайте вы можете пройти тест и узнать свой рейтинг
                    кредитоспособности.
                  </li>
                  <li>
                    <Link to="/test">
                      <Button className="btn-about">Перейти к тесту</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Tab>

          <Tab label="Что влияет на скоринговый балл?">
            <p className="about-text-1-bck">
              На итоговую оценку скоринга может повлиять абсолютно любой фактор,
              который относится к заемщику. Например, это может быть наличие или
              отсутствие детей. При этом сложно сказать, как именно этот фактор
              повлияет на скоринговый балл в каждой отдельной ситуации.
              Например, если потенциальный заемщик в разводе или не имеет мужа,
              но у него есть 2 ребенка, скорее всего, этот фактор снизит
              скоринговый балл. Система может посчитать такого клиента
              недостаточно платежеспособным, ненадежным и т.п.
            </p>
            <p className="about-text-2">
              Если же за займом обращается клиент, у которого есть ребенок и
              супруг(а), то здесь скоринговый балл может увеличиться. В этом
              случае система посчитает клиента благонадежным заемщиком,
              ответственным семьянином и т.п.
            </p>
            <p className="about-text-2">
              Повлиять на скоринг может возраст клиента. Например, очень молодые
              люди до 25 лет или заемщики предпенсионного возраста получат
              сниженный балл по этому пункту, потому что находятся в зоне
              «риска».
            </p>
            <p className="about-text-2">
              Стаж работы на последнем месте и общий трудовой стаж тоже имеют
              значение при подсчете скоринговых очков. Если стаж трудоустройства
              на текущей работе больше 2-х лет, то шансы заемщика на одобрение
              возрастут. Если текущий стаж меньше 6-ти месяцев, то и шансы будут
              меньше. По этому пункту такой клиент наберет минимальное
              количество баллов.
            </p>
            <p className="about-text-2">
              На итоговый балл по скорингу может повлиять образование. От него
              зависит уровень развития, зарплаты и должности потенциального
              заемщика. Например, клиентам с дипломом об окончании 9-ти классов
              присвоят рейтинг ниже, чем заемщику с оконченным высшим
              образованием.
            </p>
            <p className="about-text-2">
              Окончательная оценка скоринга будет складываться на основании
              каждого пункта: образование, семейное положение, занимаемая
              должность, штат работников на предприятии, уровень зарплаты,
              наличие детей, наличие собственного жилья, автомобиля и т.п.
            </p>
            <div>
              <div className="about-banner-card">
                <ul className="about-banner">
                  <li className="about-text-3-bck">
                    На нашем сайте вы можете пройти тест и узнать свой рейтинг
                    кредитоспособности.
                  </li>
                  <li>
                    <Link to="/test">
                      <Button className="btn-about">Перейти к тесту</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Tab>

          <Tab label="Как улучшить скоринговый балл?">
            <p className="about-text-1-bck">
              Улучшить скоринговый балл искусственно не получится, ведь в
              большинстве банков клиента проверяют на предоставленную
              информацию. В итоге кредитор узнает о вранье и откажет в займе.
            </p>
            <p className="about-text-2">
              Сильное влияние на скоринговый балл оказывает кредитная история
              потенциального заемщика. После их погашения в БКИ появятся
              положительные записи на клиента, его скоринговый балл повысится.
            </p>
            <div>
              <div className="about-banner-card">
                <ul className="about-banner">
                  <li className="about-text-3-bck">
                    На нашем сайте вы можете пройти тест и узнать свой рейтинг
                    кредитоспособности.
                  </li>
                  <li>
                    <Link to="/test">
                      <Button className="btn-about">Перейти к тесту</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[0].props.label,
  };
  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  };
  render() {
    let content;
    let buttons = [];
    return (
      <div>
        {" "}
        {React.Children.map(this.props.children, (child) => {
          buttons.push(child.props.label);
          if (child.props.label === this.state.activeTab)
            content = child.props.children;
        })}
        <TabButtons
          activeTab={this.state.activeTab}
          buttons={buttons}
          changeTab={this.changeTab}
        />
        <div className="tab-content">{content}</div>
      </div>
    );
  }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className="tab-buttons">
      {buttons.map((button) => {
        return (
          <button
            className={button === activeTab ? "active" : ""}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
        );
      })}{" "}
    </div>
  );
};

const Tab = (props) => {
  return <React.Fragment> {props.children} </React.Fragment>;
};
