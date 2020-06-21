import React from "react";

import "../styles/tabStyles.css";
import "../styles/buttonStyles.css";
import "../styles/formStyles.css";
export default class CreditCalculator extends React.Component {
  render() {
    return (
      <form>
        <h4 class="calculator-title">Кредитный калькулятор</h4>

        <button className="btn">Рассчитать кредит</button>
      </form>
    );
  }
}
