import React from "react";

export default class DeleteBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bank_name: "",
      response: "",
      request_sent: false,
    };

    this.changeBankName = this.changeBankName.bind(this);
    this.SendRequest = this.SendRequest.bind(this);
  }

  SendRequest() {
    let xhr = new XMLHttpRequest();
    let url = "https://twa-banking.herokuapp.com/delete_bank";
    let body = this.state.bank_name;
    xhr.addEventListener("load", () => {
      this.setState({
        response: xhr.responseText,
        request_sent: true,
      });
    });
    xhr.open("POST", url);
    xhr.send(JSON.stringify(body));
  }

  changeBankName(e) {
    this.setState({
      bank_name: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <label>
          Введите название удаляемого банка
          <input onChange={this.changeBankName} name="bank_name" />
        </label>
        <button onClick={this.SendRequest}>Удалить банк из базы данных</button>
        {this.state.request_sent ? (
          JSON.parse(this.state.response) ? (
            <h3>Банк успешно удален</h3>
          ) : (
            <h3>Банк не найден в базе данных</h3>
          )
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
