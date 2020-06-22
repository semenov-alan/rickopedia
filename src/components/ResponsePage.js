import React, {
    Component
}
from "react";
import "../styles/tabStyles.css";
import "../styles/buttonStyles.css";
import "../styles/formStyles.css";
export default class ResponseShow extends Component {
    render() {
        let values = Object.values(JSON.parse(this.props.response));
        return(<div className="container-1"> <h3> Ваш кредитный рейтинг: {JSON.parse(this.props.score)} из 205 </h3> <div> {" "} {values.map((bank) =>(<div className="container-1"> <ul> <li>{bank.bank_name}</li> <tr>Ставка: {bank.interest_rate}%</tr> <tr> Срок кредитования: {bank.loan_duration} мес. </tr> <tr> <li>Макимальная сумма кредита: </li><li>{bank.loan_sum} </li> </tr> </ul></div>))}{" "} </div> </div>);
    }
}
