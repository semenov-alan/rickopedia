import React, { useState } from "react";
import InputRange from "react-input-range";
import "../styles/calc.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
export default class RateCalculator extends React.Component {
  state = {
    amountValue: 5000,
    yearsValue: 1,
  };

  handleAmountChange = (value) => {
    this.setState({ amountValue: value });
  };
  handleYearChange = (value) => {
    this.setState({ yearsValue: value });
  };

  render() {
    let { amountValue, yearsValue } = this.state;

    return (
      <div className="App">
        <h4 className="credit-calc-h4">Необходимая сумма кредита </h4>
        <h2>{amountValue} Р.</h2>
        <RangeSlider
          value={amountValue}
          onChange={(changeEvent) => amountValue(changeEvent.target.value)}
        />
        <h4 className="credit-calc-h4">Срок кредита: {yearsValue} г.</h4>
        <RangeSlider
          step={0.5}
          maxValue={5}
          minValue={1}
          value={yearsValue}
          onChange={this.handleYearChange}
        />
        <Display years={yearsValue} amount={amountValue} />
      </div>
    );
  }
}

class Display extends React.Component {
  state = {
    APR: 0.05,
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.calculateAPR();
    }
  }

  calculateAPR = () => {
    let { amount } = this.props;

    if (1000 < amount && amount < 5000) {
      this.setState({ APR: 0.05 });
    }
    if (5000 < amount && amount < 10000) {
      this.setState({ APR: 0.1 });
    }
    if (10000 < amount && amount < 15000) {
      this.setState({ APR: 0.15 });
    }
    if (15000 < amount && amount < 20000) {
      this.setState({ APR: 0.2 });
    }
  };

  calculateMonthlyRepayment = () => {
    let { amount, years } = this.props;
    let decimalFormat = this.state.APR + 1;
    let totalOwed = decimalFormat * amount;
    let monthlyRepayment = totalOwed / (years * 12);

    return <p>{Math.round(monthlyRepayment)} Р.</p>;
  };

  percentageAPR = () => {
    return <p>{this.state.APR * 100}%</p>;
  };

  render() {
    return (
      <div className="flex">
        <DisplayChild func={this.percentageAPR()} text="Ставка по кредиту" />
        <DisplayChild
          func={this.calculateMonthlyRepayment()}
          text="Ежемесячный платеж"
        />
      </div>
    );
  }
}

const DisplayChild = ({ func, text }) => {
  return (
    <span>
      {func} <small>{text}</small>
    </span>
  );
};
