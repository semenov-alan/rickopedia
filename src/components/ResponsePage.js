import React, { Component } from "react";

export default class ResponseShow extends Component {
  render() {
    let values = Object.values(JSON.parse(this.props.response));
    return (
      <div>
        <h3>
          Ваш кредитный рейтинг: {JSON.parse(this.props.score)}
          из 205
        </h3>
        <div>
          {" "}
          {values.map((bank) => (
            <table>
              <tr>
                <th>Название банка: {bank.bank_name}</th>
              </tr>
              <tr>Ставка: {bank.interest_rate}%</tr>
              <tr>
                <li>
                  Срок кредитования: {bank.loan_duration}
                  г.
                </li>
              </tr>
              <tr>
                <li>Макимальная сумма кредита: {bank.loan_sum} </li>
              </tr>
            </table>
          ))}{" "}
        </div>
      </div>
    );
  }
}
