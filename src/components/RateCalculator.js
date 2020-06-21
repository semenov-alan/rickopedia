import React from "react";

export default class RateCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 0,
      sum: 0,
      duration: 0,
      payment: undefined,
    };

    this.handleSumInput = this.handleSumInput.bind(this);
    this.handleDurationInput = this.handleDurationInput.bind(this);
    this.handleRateInput = this.handleRateInput.bind(this);
    this.calculatePayment = this.calculatePayment.bind(this);
  }

  handleRateInput(e) {
    this.setState({
      rate: Number(e.target.value),
    });
  }

  handleSumInput(e) {
    this.setState({
      sum: Number(e.target.value),
    });
  }

  handleDurationInput(e) {
    this.setState({
      duration: Number(e.target.value),
    });
  }

  calculatePayment() {
    let i = this.state.rate / 1200;
    let n = this.state.duration;
    let k = (i * (1 + i) ** n) / ((1 + i) ** n - 1);
    let payment = this.state.sum * k;
    this.setState({
      payment: Math.round(payment),
    });
  }

  render() {
    return (
      <form>
        <input id="sum" />

        <br />
        <input id="range" type="range" />
        <label>
          Ставка по кредиту {this.state.rate}
          <input onChange={this.handleRateInput} />
        </label>
        <label>
          Сумма кредита {this.state.sum}
          <input onChange={this.handleSumInput} />
        </label>
        <label>
          Срок кредитования в месяцах {this.state.duration}
          <input onChange={this.handleDurationInput} />
        </label>
        <div>
          <button onClick={this.calculatePayment}>Рассчитать</button>
          <h3>Ежемесячный платеж составит {this.state.payment} рублей</h3>
        </div>
        <h4 class="calculator-title">Кредитный калькулятор</h4>
        <button className="btn">Рассчитать кредит</button>
      </form>
    );
  }
}
