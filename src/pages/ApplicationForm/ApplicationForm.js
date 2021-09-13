import React, { Component } from "react";
import axios from "axios";
import store from "../../reducer/store";
import "./ApplicationForm.css";
import { Link } from "react-router-dom";
import { addFreeOffice } from "../../components/action/Actions";

class ApplicationForm extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      userName: "",
      company: "",
      inn: "",
      choise: "",
      userComment: "",
      tel: "",
      showModal: false,
      classColor: "form_page",
      modalText: ""
    };
  }
  componentDidMount() {
    // store.subscribe(() => {
    //     const globalState = store.getState(); //получить данные из глобального состояния
    //     this.setState({   //обновить локальное состояние
    //         officeitemsNew: globalState.officeitemsNew
    //     })
    // })
    const globalState = store.getState();
    const officePart = globalState.officeitemsNew.filter((item) => {
      return item;
    });
    console.log(officePart);
    let choiseID = officePart.map((item) => item.ID);
    console.log(choiseID);

    let choiseSum = officePart.reduce(
      (a, b) => a + (b.Floor + " " + b.Square + ", "),
      0
    );
    console.log(choiseSum);
    this.setState({
      id: choiseID,
      choise: choiseSum,
    });
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
      .post(`http://localhost:3010/office/add`, {
        userName: this.state.userName,
        company: this.state.company,
        inn: this.state.inn,
        choise: this.state.choise,
        userComment: this.state.userComment,
        tel: this.state.tel,
      })
      .then((response) => {
        console.log(response);
        // store.dispatch({
        //   type: addFreeOffice,
        //   payload: [...response.data],
        // });
        this.setState({
          showModal: true,
          modalText: "все пошло так"
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          showModal: true,
          modalText: "что-то пошло не так"
        });
      });
  };

  render() {
    return (
      <div>
        <div className={"modal " + (this.state.showModal ? "" : "hidden")}>
          <div className="show_modal ">
            <Link to="/" className="close_modal">
              X
            </Link>
            <div className="text_modal">
              <div>заявка отправлена</div>
              <div>вам перезвонят</div>
            </div>
          </div>
        </div>
        <div className="form_page">
          <div className="form_name">Форма заявки</div>
          <form className="form" onSubmit={this.handlerSubmit}>
            <label>
              <input
                className="form_input"
                name="userName"
                type="text"
                onChange={this.handlerChange}
                placeholder="имя"
              />
            </label>
            <label>
              <input
                className="form_input"
                name="company"
                type="text"
                onChange={this.handlerChange}
                placeholder="наименование компании"
              />
            </label>
            <label>
              <input
                className="form_input"
                name="inn"
                type="text"
                onChange={this.handlerChange}
                placeholder="инн"
              />
            </label>
            <label>
              <input
                className="form_input"
                name="choise"
                type="text"
                value={this.state.choise}
                onChange={this.handlerChange}
              />
            </label>
            <label>
              <input
                className="form_input"
                name="userComment"
                type="text"
                onChange={this.handlerChange}
                placeholder="комментарий"
              />
            </label>
            <label>
              <input
                className="form_input"
                name="tel"
                type="text"
                onChange={this.handlerChange}
                placeholder="номер телефона"
              />
            </label>
            <button type="submit" className="form_submit">
              отправить заявку
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default ApplicationForm;
