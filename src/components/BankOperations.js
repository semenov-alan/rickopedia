import React from "react";
import {
  AgePage,
  ChildrenPage,
  MarriedPage,
  EducationPage,
  WorkTimePage,
  WorkEqualsEducationPage,
  SponsorsPage,
  IncomePage,
  BankDetailsPage,
} from "./AdminFormPages.js";
import "./App.css";
import ResponseShow from "./ResponseShow.js";

export default class BankOperations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bank_name: "",
      mininal_score: "",
      interest_rate: "",
      loan_sum: "",
      loan_duration: "",
      age: [],
      children: [],
      education: [],
      income: [],
      married: [],
      sponsors: [],
      work_duration: [],
      work_equals_education: [],
      response: [],
      page: 1,
    };
    this.AgeHandler = this.AgeHandler.bind(this);
    this.ChildrenHandler = this.ChildrenHandler.bind(this);
    this.MarriedHandler = this.MarriedHandler.bind(this);
    this.EducationHandler = this.EducationHandler.bind(this);
    this.WorkTimeHandler = this.WorkTimeHandler.bind(this);
    this.WorkEqualsEducationHandler = this.WorkEqualsEducationHandler.bind(
      this
    );
    this.SponsorsHandler = this.SponsorsHandler.bind(this);
    this.IncomeHandler = this.IncomeHandler.bind(this);
    this.SendRequest = this.SendRequest.bind(this);
    this.BackToTest = this.BackToTest.bind(this);
    this.NextPage = this.NextPage.bind(this);
    this.PreviousPage = this.PreviousPage.bind(this);
    this.MakeRequests = this.MakeRequests.bind(this);
    this.BankNameHandler = this.BankNameHandler.bind(this);
    this.MinimalScoreHandler = this.MinimalScoreHandler.bind(this);
    this.InterestRateHandler = this.InterestRateHandler.bind(this);
    this.LoanSumHandler = this.LoanSumHandler.bind(this);
    this.LoanDurationHandler = this.LoanDurationHandler.bind(this);
  }

  AgeHandler(e) {
    let ages = this.state.age;
    let index;
    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      ages.push(Number(e.target.value));
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = ages.indexOf(Number(e.target.value));
      ages.splice(index, 1);
    }
    this.setState({
      age: ages,
    });
  }

  ChildrenHandler(e) {
    let children = this.state.children;
    let index;
    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      children.push(Number(e.target.value));
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = children.indexOf(Number(e.target.value));
      children.splice(index, 1);
    }
    this.setState({
      children: children,
    });
  }

  MarriedHandler(e) {
    let married = this.state.married;
    let index;
    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      married.push(Number(e.target.value));
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = married.indexOf(Number(e.target.value));
      married.splice(index, 1);
    }
    this.setState({
      married: married,
    });
  }

  EducationHandler(e) {
    let education = this.state.education;
    let index;
    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      education.push(Number(e.target.value));
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = education.indexOf(Number(e.target.value));
      education.splice(index, 1);
    }
    this.setState({
      education: education,
    });
  }

  WorkTimeHandler(e) {
    let work_duration = this.state.work_duration;
    let index;
    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      work_duration.push(Number(e.target.value));
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = work_duration.indexOf(Number(e.target.value));
      work_duration.splice(index, 1);
    }
    this.setState({
      work_duration: work_duration,
    });
  }

  WorkEqualsEducationHandler(e) {
    let work_equals_education = this.state.work_equals_education;
    let index;
    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      work_equals_education.push(Number(e.target.value));
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = work_equals_education.indexOf(Number(e.target.value));
      work_equals_education.splice(index, 1);
    }
    this.setState({
      work_equals_education: work_equals_education,
    });
  }

  SponsorsHandler(e) {
    let sponsors = this.state.sponsors;
    let index;
    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      sponsors.push(Number(e.target.value));
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = sponsors.indexOf(Number(e.target.value));
      sponsors.splice(index, 1);
    }
    this.setState({
      sponsors: sponsors,
    });
  }

  IncomeHandler(e) {
    let income = this.state.income;
    let index;
    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      income.push(Number(e.target.value));
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = income.indexOf(Number(e.target.value));
      income.splice(index, 1);
    }
    this.setState({
      income: income,
    });
  }

  BankNameHandler(e) {
    this.setState({
      bank_name: e.target.value,
    });
  }

  MinimalScoreHandler(e) {
    this.setState({
      mininal_score: e.target.value,
    });
  }

  InterestRateHandler(e) {
    this.setState({
      interest_rate: e.target.value,
    });
  }

  LoanSumHandler(e) {
    this.setState({
      loan_sum: e.target.value,
    });
  }

  LoanDurationHandler(e) {
    this.setState({
      loan_duration: e.target.value,
    });
  }

  NextPage() {
    this.setState({
      page: this.state.page + 1,
    });
  }

  PreviousPage() {
    this.setState({
      page: this.state.page - 1,
    });
  }

  BackToTest() {
    this.setState({
      age: "",
      children: "",
      education: "",
      income: "",
      married: "",
      sponsors: "",
      work_duration: "",
      work_equals_education: "",
      score: "",
      response: "",
    });
  }

  SendRequest() {
    let xhr = new XMLHttpRequest();
    let url = "";
    window.location.pathname == "/new-bank"
      ? (url = "https://twa-banking.herokuapp.com/create_bank")
      : (url = "https://twa-banking.herokuapp.com/update_bank");
    let body = {
      bank_name: this.state.bank_name,
      minimum_score: Number(this.state.mininal_score),
      interest_rate: JSON.parse(this.state.interest_rate),
      loan_duration: JSON.parse(this.state.loan_duration),
      loan_sum: JSON.parse(this.state.loan_sum),
      test_answers: {
        age: this.state.age,
        education: this.state.education,
        married: this.state.married,
        income: this.state.income,
        work_duration: this.state.work_duration,
        work_equals_education: this.state.work_equals_education,
        children: this.state.children,
        sponsors: this.state.sponsors,
      },
    };
    xhr.addEventListener("load", () => {
      this.setState({
        response: xhr.responseText,
        page: this.state.page + 1,
      });
    });
    xhr.open("POST", url);
    xhr.send(JSON.stringify(body));
  }

  UpdateBank() {
    let xhr = new XMLHttpRequest();
    let body = {
      bank_name: this.state.bank_name,
      minimum_score: Number(this.state.mininal_score),
      interest_rate: JSON.parse(this.state.interest_rate),
      loan_duration: JSON.parse(this.state.loan_duration),
      loan_sum: JSON.parse(this.state.loan_sum),
      test_answers: {
        age: this.state.age,
        education: this.state.education,
        married: this.state.married,
        income: this.state.income,
        work_duration: this.state.work_duration,
        work_equals_education: this.state.work_equals_education,
        children: this.state.children,
        sponsors: this.state.sponsors,
      },
    };
    xhr.addEventListener("load", () => {
      this.setState({
        score: xhr.responseText,
      });
    });
    xhr.open("POST", "https://twa-banking.herokuapp.com/credit_score");
    xhr.send(JSON.stringify(body));
  }

  MakeRequests() {
    this.getScore();
    this.getBanksApproval();
  }

  render() {
    return (
      <>
        <h3>
          {this.state.bank_name}, {this.state.mininal_score},
          {this.state.interest_rate}, {this.state.loan_duration},
          {this.state.loan_sum}, [{this.state.age.toString()}], [
          {this.state.children.toString()}], [{this.state.education.toString()}
          ], [{this.state.income.toString()}], [{this.state.married.toString()}
          ], [{this.state.sponsors.toString()}], [
          {this.state.work_duration.toString()}], [
          {this.state.work_equals_education.toString()}]
        </h3>
        {(() => {
          switch (this.state.page) {
            case 1:
              return (
                <BankDetailsPage
                  name_handler={this.BankNameHandler}
                  score_handler={this.MinimalScoreHandler}
                  rate_handler={this.InterestRateHandler}
                  sum_handler={this.LoanSumHandler}
                  duration_handler={this.LoanDurationHandler}
                  nextPage={this.NextPage}
                />
              );
            case 2:
              return (
                <AgePage
                  handler={this.AgeHandler}
                  nextPage={this.NextPage}
                  previousPage={this.PreviousPage}
                />
              );
            case 3:
              return (
                <ChildrenPage
                  handler={this.ChildrenHandler}
                  nextPage={this.NextPage}
                  previousPage={this.PreviousPage}
                />
              );
            case 4:
              return (
                <EducationPage
                  handler={this.EducationHandler}
                  nextPage={this.NextPage}
                  previousPage={this.PreviousPage}
                />
              );
            case 5:
              return (
                <IncomePage
                  handler={this.IncomeHandler}
                  nextPage={this.NextPage}
                  previousPage={this.PreviousPage}
                />
              );
            case 6:
              return (
                <MarriedPage
                  handler={this.MarriedHandler}
                  nextPage={this.NextPage}
                  previousPage={this.PreviousPage}
                />
              );
            case 7:
              return (
                <SponsorsPage
                  handler={this.SponsorsHandler}
                  nextPage={this.NextPage}
                  previousPage={this.PreviousPage}
                />
              );
            case 8:
              return (
                <WorkTimePage
                  handler={this.WorkTimeHandler}
                  nextPage={this.NextPage}
                  previousPage={this.PreviousPage}
                />
              );
            case 9:
              return (
                <WorkEqualsEducationPage
                  handler={this.WorkEqualsEducationHandler}
                  nextPage={this.SendRequest}
                  previousPage={this.PreviousPage}
                />
              );
            case 10:
              return <ResponseShow response={this.state.response} />;
            default:
              return <div>Вы не должны были сюда попасть</div>;
          }
        })()}
      </>
    );
  }
}
