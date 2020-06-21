import React from "react";

class AgePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
    };
    this.SetValidationTrue = this.SetValidationTrue.bind(this);
  }

  SetValidationTrue() {
    this.setState({
      valid: true,
    });
  }

  render() {
    return (
      <>
        <h4>Возраст</h4>
        <form onChange={this.props.handler} onClick={this.SetValidationTrue}>
          <label>
            <input type="checkbox" name="age" value="1" />
            От 18 до 21
          </label>
          <label>
            <input type="checkbox" name="age" value="2" />
            От 22 до 27
          </label>
          <label>
            <input type="checkbox" name="age" value="3" />
            От 28 до 34
          </label>
          <label>
            <input type="checkbox" name="age" value="4" />
            От 35 до 45
          </label>
          <label>
            <input type="checkbox" name="age" value="5" />
            От 46 до 60
          </label>
          <label>
            <input type="checkbox" name="age" value="6" />
            более 60 лет
          </label>
        </form>
        <button onClick={this.props.previousPage}>Назад</button>
        {this.state.valid ? (
          <button onClick={this.props.nextPage}>Далее</button>
        ) : (
          <div></div>
        )}
      </>
    );
  }
}

class ChildrenPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
    };
    this.SetValidationTrue = this.SetValidationTrue.bind(this);
  }

  SetValidationTrue() {
    this.setState({
      valid: true,
    });
  }

  render() {
    return (
      <>
        <form onChange={this.props.handler} onClick={this.SetValidationTrue}>
          <h4>Количество детей</h4>
          <label>
            <input type="checkbox" name="children" value="1" />0
          </label>
          <label>
            <input type="checkbox" name="children" value="2" />1
          </label>
          <label>
            <input type="checkbox" name="children" value="3" />2
          </label>
          <label>
            <input type="checkbox" name="children" value="4" />3 +
          </label>
        </form>
        <button onClick={this.props.previousPage}>Назад</button>
        {this.state.valid ? (
          <button onClick={this.props.nextPage}>Далее</button>
        ) : (
          <div></div>
        )}
      </>
    );
  }
}

class MarriedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
    };
    this.SetValidationTrue = this.SetValidationTrue.bind(this);
  }

  SetValidationTrue() {
    this.setState({
      valid: true,
    });
  }

  render() {
    return (
      <>
        <form onChange={this.props.handler} onClick={this.SetValidationTrue}>
          <h4>Семейное положение</h4>
          <label>
            <input type="checkbox" name="married" value="1" />
            Состоит в браке
          </label>
          <label>
            <input type="checkbox" name="married" value="2" />
            Не состоит в браке
          </label>
        </form>
        <button onClick={this.props.previousPage}>Назад</button>
        {this.state.valid ? (
          <button onClick={this.props.nextPage}>Далее</button>
        ) : (
          <div></div>
        )}
      </>
    );
  }
}

class EducationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
    };
    this.SetValidationTrue = this.SetValidationTrue.bind(this);
  }

  SetValidationTrue() {
    this.setState({
      valid: true,
    });
  }

  render() {
    return (
      <>
        <form onChange={this.props.handler} onClick={this.SetValidationTrue}>
          <h4>Образование</h4>
          <label>
            <input type="checkbox" name="education" value="1" />
            Отсутствует
          </label>
          <label>
            <input type="checkbox" name="education" value="2" />
            Среднее общее
          </label>
          <label>
            <input type="checkbox" name="education" value="3" />
            Среднее специальное
          </label>
          <label>
            <input type="checkbox" name="education" value="4" />
            Высшее
          </label>
        </form>
        <button onClick={this.props.previousPage}>Назад</button>
        {this.state.valid ? (
          <button onClick={this.props.nextPage}>Далее</button>
        ) : (
          <div></div>
        )}
      </>
    );
  }
}

class WorkTimePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
    };
    this.SetValidationTrue = this.SetValidationTrue.bind(this);
  }

  SetValidationTrue() {
    this.setState({
      valid: true,
    });
  }

  render() {
    return (
      <>
        <form onChange={this.props.handler} onClick={this.SetValidationTrue}>
          <h4>Стаж работы на текущей должности</h4>
          <label>
            <input type="checkbox" name="work_time" value="1" />
            Менее 6 месяцев
          </label>
          <label>
            <input type="checkbox" name="work_time" value="2" />
            от 6 месяцев до 1.5 лет
          </label>
          <label>
            <input type="checkbox" name="work_time" value="3" />
            от 1.5 до 3 лет
          </label>
          <label>
            <input type="checkbox" name="work_time" value="4" />
            более 3 лет
          </label>
        </form>
        <button onClick={this.props.previousPage}>Назад</button>
        {this.state.valid ? (
          <button onClick={this.props.nextPage}>Далее</button>
        ) : (
          <div></div>
        )}
      </>
    );
  }
}

class WorkEqualsEducationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
    };
    this.SetValidationTrue = this.SetValidationTrue.bind(this);
  }

  SetValidationTrue() {
    this.setState({
      valid: true,
    });
  }

  render() {
    return (
      <>
        <form onChange={this.props.handler} onClick={this.SetValidationTrue}>
          <h4>Работа по профессии</h4>
          <label>
            <input type="checkbox" name="work_equals_education" value="1" />
            Да
          </label>
          <label>
            <input type="checkbox" name="work_equals_education" value="2" />
            Нет
          </label>
        </form>
        <button onClick={this.props.previousPage}>Назад</button>
        {this.state.valid ? (
          <button onClick={this.props.nextPage}>Отправить</button>
        ) : (
          <div></div>
        )}
      </>
    );
  }
}

class SponsorsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
    };
    this.SetValidationTrue = this.SetValidationTrue.bind(this);
  }

  SetValidationTrue() {
    this.setState({
      valid: true,
    });
  }

  render() {
    return (
      <>
        <form onChange={this.props.handler} onClick={this.SetValidationTrue}>
          <h4>Наличие поручителей</h4>
          <label>
            <input type="checkbox" name="sponsors" value="1" />
            Да
          </label>
          <label>
            <input type="checkbox" name="sponsors" value="2" />
            Нет
          </label>
        </form>
        <button onClick={this.props.previousPage}>Назад</button>
        {this.state.valid ? (
          <button onClick={this.props.nextPage}>Далее</button>
        ) : (
          <div></div>
        )}
      </>
    );
  }
}

class IncomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
    };
    this.SetValidationTrue = this.SetValidationTrue.bind(this);
  }

  SetValidationTrue() {
    this.setState({
      valid: true,
    });
  }

  render() {
    return (
      <>
        <form onChange={this.props.handler} onClick={this.SetValidationTrue}>
          <h4>Доход</h4>
          <label>
            <input type="checkbox" name="income" value="1" />
            До 20 т.р.
          </label>
          <label>
            <input type="checkbox" name="income" value="2" />
            20 - 30 т.р.
          </label>
          <label>
            <input type="checkbox" name="income" value="3" />
            30 - 50 т.р
          </label>
          <label>
            <input type="checkbox" name="income" value="4" />
            50 - 100 т.р.
          </label>
          <label>
            <input type="checkbox" name="income" value="5" />
            от 100 т.р.
          </label>
        </form>
        <button onClick={this.props.previousPage}>Назад</button>
        {this.state.valid ? (
          <button onClick={this.props.nextPage}>Далее</button>
        ) : (
          <div></div>
        )}
      </>
    );
  }
}

class BankDetailsPage extends React.Component {
  render() {
    return (
      <>
        <h4>Введите требуемую информацию</h4>
        <div>
          <label>
            Название банка
            <input name="bank_name" onChange={this.props.name_handler} />
          </label>
        </div>
        <div>
          <label>
            Минимальный кредитный рейтинг
            <input name="minimum_score" onChange={this.props.score_handler} />
          </label>
        </div>
        <div>
          <label>
            Процентная ставка
            <input
              name="minimum_score"
              defaultValue='{" ": [ , ]}'
              onChange={this.props.rate_handler}
            />
          </label>
        </div>
        <div>
          <label>
            Сумма кредита
            <input
              name="minimum_score"
              defaultValue='{" ": [ , ]}'
              onChange={this.props.sum_handler}
            />
          </label>
        </div>
        <div>
          <label>
            Срок кредитования
            <input
              name="minimum_score"
              defaultValue='{" ": [ , ]}'
              onChange={this.props.duration_handler}
            />
          </label>
        </div>
        <button onClick={this.props.nextPage}>Далее</button>
      </>
    );
  }
}
class ResponsersShow extends React.Component {
  render() {
    let response = JSON.parse(this.props.response);
    return (
      <>
        {
          (window.location.pathname = "/new_bank" ? (
            response ? (
              <h3>Банк успешно создан</h3>
            ) : (
              <h3>Банк с таким именем уже существует</h3>
            )
          ) : response ? (
            <h3>Банк успешно обновлен</h3>
          ) : (
            <h3>Банк с таким именем не найден</h3>
          ))
        }
      </>
    );
  }
}

export {
  AgePage,
  ChildrenPage,
  MarriedPage,
  EducationPage,
  WorkTimePage,
  WorkEqualsEducationPage,
  SponsorsPage,
  IncomePage,
  BankDetailsPage,
  ResponsersShow,
};
