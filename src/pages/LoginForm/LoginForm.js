import React, { Component } from "react";
import "./LoginForm.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import store from "../../reducer/store";
import { getId } from "../../components/action/Actions";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      login: "",
      password: "",
      auth: false,
      text: "",
      officeLogin: [],
    };
  }

  handlerChange = (event) => {
    let name = event.target.name; //получаем название поля
    let value = event.target.value; // получаем значение поля

    this.setState({ [name]: value });
    console.log({ [name]: value });
  };

  handlerSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    axios
      .post(`http://localhost:3010/login/`, {
        login: this.state.login,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response);
        let login = this.state.login;
        let password = this.state.password;
        let inn = response.data[0].inn;
        let passwordEntered = response.data[0].passwordInn;
        if (login === "" && password === "") {
          this.setState({
            auth: false,
            text: "введите данные",
          });
          console.log("введите данные");
          return;
        }
        if (login === inn && password === passwordEntered) {
          this.setState({
            auth: true,
          });
          console.log("правильные данные");
        } else {
          this.setState({
            auth: false,
            text: "некорректные данные",
          });
          console.log("не правильные данные");
        }
        store.dispatch({
          type: getId,
          payload: [...response.data],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { text } = this.state;
    return this.state.auth ? (
      <Redirect to={"/login/" + this.state.login}></Redirect>
    ) : (
      <div>
        <div className="login_page">
          <div className="login_name">Личный кабинет</div>
          <div className="login_text">{text}</div>
          <form className="login_click" onSubmit={this.handlerSubmit}>
            <label>
              <input
                className="login_input"
                name="login"
                type="text"
                onChange={this.handlerChange}
                placeholder="логин"
              />
            </label>
            <label>
              <input
                className="login_input"
                name="password"
                type="text"
                onChange={this.handlerChange}
                placeholder="пароль"
              />
            </label>
            <button type="submit" className="login_submit">
              войти
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
