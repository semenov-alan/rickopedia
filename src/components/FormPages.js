import React from "react";
import "./App.css";
import "../styles/tabStyles.css";
import "../styles/buttonStyles.css";
import "../styles/formStyles.css";
class AgePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false, };
        this.SetValidationTrue = this.SetValidationTrue.bind(this);
    }

    SetValidationTrue() {
        this.setState({ valid: true });
    }

    render() {
        return(<> <div className="container-1" onChange={this.props.handler} onClick={this.SetValidationTrue}> <h4 className="page-h4-test">Возраст</h4> <ul><li> <input type="radio" name="age" value="1" /> От 18 до 21 </li> <li> <input type="radio" name="age" value="2" /> От 22 до 27 </li> <li> <input type="radio" name="age" value="3" /> От 28 до 34 </li> <li> <input type="radio" name="age" value="4" /> От 35 до 45 </li> <li> <input type="radio" name="age" value="5" /> От 46 до 60 </li> <li> <input type="radio" name="age" value="6" /> более 60 лет </li> </ul> {this.state.valid ?(<button className="btn-next" onClick={this.props.nextPage}>Далее</button>) :(<div></div>)}</div> {" "} </>);
    }
}

class ChildrenPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false, };
        this.SetValidationTrue = this.SetValidationTrue.bind(this);
    }

    SetValidationTrue() {
        this.setState({ valid: true });
    }

    render() {
        return(<> <div className="container-1" onChange={this.props.handler} onClick={this.SetValidationTrue}> <h4 className="page-h4-test">Количество детей</h4> <ul><li> <input type="radio" name="children" value="1" />0 </li> <li> <input type="radio" name="children" value="2" />1 </li> <li> <input type="radio" name="children" value="3" />2 </li> <li> <input type="radio" name="children" value="4" />3 + </li> </ul><button className="btn-previous" onClick={this.props.previousPage}>Назад</button> {this.state.valid ?(<button className="btn-next" onClick={this.props.nextPage}>Далее</button>) :(<div></div>)}</div> {" "} </>);
    }
}

class MarriedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false, };
        this.SetValidationTrue = this.SetValidationTrue.bind(this);
    }

    SetValidationTrue() {
        this.setState({ valid: true });
    }

    render() {
        return(<> <div className="container-1" onChange={this.props.handler} onClick={this.SetValidationTrue}> <h4 className="page-h4-test">Семейное положение</h4> <ul><li> <input type="radio" name="married" value="1" /> Состою в браке </li> <li> <input type="radio" name="married" value="2" /> Не состою в браке </li> </ul><button className="btn-previous" onClick={this.props.previousPage}>Назад</button> {this.state.valid ?(<button className="btn-next" onClick={this.props.nextPage}>Далее</button>) :(<div></div>)}</div> {" "} </>);
    }
}

class EducationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false, };
        this.SetValidationTrue = this.SetValidationTrue.bind(this);
    }

    SetValidationTrue() {
        this.setState({ valid: true });
    }

    render() {
        return(<> <div className="container-1" onChange={this.props.handler} onClick={this.SetValidationTrue}> <h4 className="page-h4-test">Образование</h4> <ul><li> <input type="radio" name="education" value="1" /> Отсутствует </li> <li> <input type="radio" name="education" value="2" /> Среднее общее </li> <li> <input type="radio" name="education" value="3" /> Среднее специальное </li> <li> <input type="radio" name="education" value="4" /> Высшее </li> </ul><button className="btn-previous" onClick={this.props.previousPage}>Назад</button> {this.state.valid ?(<button className="btn-next" onClick={this.props.nextPage}>Далее</button>) :(<div></div>)}</div> {" "} </>);
    }
}

class WorkTimePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false, };
        this.SetValidationTrue = this.SetValidationTrue.bind(this);
    }

    SetValidationTrue() {
        this.setState({ valid: true });
    }

    render() {
        return(<> <div className="container-1" onChange={this.props.handler} onClick={this.SetValidationTrue}> <h4 className="page-h4-test">Стаж работы на текущей должности</h4> <ul><li> <input type="radio" name="work_time" value="1" /> Менее 6 месяцев </li> <li> <input type="radio" name="work_time" value="2" /> от 6 месяцев до 1.5 лет </li> <li> <input type="radio" name="work_time" value="3" /> от 1.5 до 3 лет </li> <li> <input type="radio" name="work_time" value="4" /> более 3 лет </li> </ul><button className="btn-previous" onClick={this.props.previousPage}>Назад</button> {this.state.valid ?(<button className="btn-next" onClick={this.props.nextPage}>Далее</button>) :(<div></div>)}</div> {" "} </>);
    }
}

class WorkEqualsEducationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false, };
        this.SetValidationTrue = this.SetValidationTrue.bind(this);
    }

    SetValidationTrue() {
        this.setState({ valid: true });
    }

    render() {
        return(<> <div className="container-1" onChange={this.props.handler} onClick={this.SetValidationTrue}> <h4 className="page-h4-test">Вы работаете по профессии?</h4> <ul><li> <input type="radio" name="work_equals_education" value="1" /> Да </li> <li> <input type="radio" name="work_equals_education" value="2" /> Нет </li> </ul><button className="btn-previous" onClick={this.props.previousPage}>Назад</button> {this.state.valid ?(<button className="btn-next" onClick={this.props.nextPage}>Отправить</button>) :(<div></div>)}</div> {" "} </>);
    }
}

class SponsorsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false, };
        this.SetValidationTrue = this.SetValidationTrue.bind(this);
    }

    SetValidationTrue() {
        this.setState({ valid: true });
    }

    render() {
        return(<> <div className="container-1" onChange={this.props.handler} onClick={this.SetValidationTrue}> <h4 className="page-h4-test">У вас есть поручители?</h4> <ul><li> <input type="radio" name="sponsors" value="1" /> Да </li> <li> <input type="radio" name="sponsors" value="2" /> Нет </li> </ul><button className="btn-previous" onClick={this.props.previousPage}>Назад</button> {this.state.valid ?(<button className="btn-next" onClick={this.props.nextPage}>Далее</button>) :(<div></div>)}</div> {" "} </>);
    }
}

class IncomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false, };
        this.SetValidationTrue = this.SetValidationTrue.bind(this);
    }

    SetValidationTrue() {
        this.setState({ valid: true });
    }

    render() {
        return(<> <div className="container-1" onChange={this.props.handler} onClick={this.SetValidationTrue}> <h4 className="page-h4-test">Какой у вас доход?</h4> <ul><li> <input type="radio" name="income" value="1" /> До 20 т.р. </li> <li> <input type="radio" name="income" value="2" /> 20 - 30 т.р. </li> <li> <input type="radio" name="income" value="3" /> 30 - 50 т.р </li> <li> <input type="radio" name="income" value="4" /> 50 - 100 т.р. </li> <li> <input type="radio" name="income" value="5" /> от 100 т.р. </li> </ul><button className="btn-previous" onClick={this.props.previousPage}>Назад</button> {this.state.valid ?(<button className="btn-next" onClick={this.props.nextPage}>Далее</button>) :(<div></div>)}</div> {" "} </>);
    }
}

export {
    AgePage, ChildrenPage, MarriedPage, EducationPage, WorkTimePage, WorkEqualsEducationPage, SponsorsPage, IncomePage, };
