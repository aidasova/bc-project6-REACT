import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

class MainPage extends Component {
  render() {
    return (
      <div className="main_page">
        <div className="main_contact">
          <div>адрес: Ибрагимова</div>
          <div>тел: +788888888</div>
        </div>
        <img src="/лого.svg" alt="logo" className="logo" />
        <div className="name_name"> бизнес центр</div>
        <Link to="/offices" className="btn_add">
          свободные помещения
        </Link>
        <Link to="/form" className="btn_add">
          заявка на помещение
        </Link>
        <Link to="/login" className="btn_add">
          личный кабинет
        </Link>
      </div>
    );
  }
}

export default MainPage;
