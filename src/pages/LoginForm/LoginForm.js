import React, { Component } from "react";
import "./LoginForm.css";
import axios from "axios";
import store from "../../reducer/store";
import { Redirect } from "react-router-dom";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      login: "",
      password: "",
      auth: false,
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
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.setState({
            auth: true,
          });
        } else {
          this.setState({
            auth: false,
          });
        }
        // store.dispatch({
        //   type: getId,
        //   payload: [
        //     ...res.data
        //   ]
        // });

        // let globalState = store.getState();
        // this.setState ({
        //   officeitems: [
        //     ...globalState.officeitems
        //   ]
        // })
        // console.log(this.setState)
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
