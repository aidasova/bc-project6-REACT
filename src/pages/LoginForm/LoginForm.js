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
        if (response.status === 200) {
          this.setState({
            auth: true,
          });
          console.log("правильные данные");
        } else {
          this.setState({
            auth: false,
          });
          console.log("Не правильные данные");
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
    return this.state.auth ? (
      <Redirect to={"/login/" + this.state.login}></Redirect>
    ) : (
      <div>
        <div className="form_page">
          <div className="form_name">Личный кабинет</div>
          <form className="form" onSubmit={this.handlerSubmit}>
            <label>
              <input
                className="form_input"
                name="login"
                type="text"
                onChange={this.handlerChange}
                placeholder="логин"
              />
            </label>
            <label>
              <input
                className="form_input"
                name="password"
                type="text"
                onChange={this.handlerChange}
                placeholder="пароль"
              />
            </label>
            <button type="submit" className="form_submit">
              войти
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
