import React, { Component } from "react";
import "./PersonalPage.css";
import store from "../../reducer/store";
import { Link } from "react-router-dom";

class PersonalPage extends Component {
  state = {
    items: "",
  };

  componentDidMount() {
    store.subscribe(() => {
      let globalState = store.getState();
      console.log(globalState.officeLogin);
      console.log(this.props.match.params.id);
      // из globalState объект с данными по отображаемому id
      let personalItem = globalState.officeLogin.find((item) => {
        return item.inn === this.props.match.params.id;
      });
      console.log(personalItem);
      //  в this.state.items
      this.setState({
        items: personalItem,
      });
    });
  }
  onClickLink = () => {};
  render() {
    return (
      <div className="personale_page">
        <div className="personal_hello">Добро пожаловать в личный кабинет</div>
        <div className="enter_out">
          <div className="personal_name">{this.state.items.inn}</div>
          <Link to={"/"} onClick={() => this.onClickLink()} className="output">
            выйти
          </Link>
        </div>
        <div className="personal_info">
          <div className="personal-item">данные договора:</div>

          <div className="document">
            <div className="personal_item"> этаж:</div>
            <div className="param">{this.state.items.floor}</div>
          </div>

          <div className="document">
            <div className="personal_item"> арендуемая площадь:</div>
            <div className="param">{this.state.items.square}</div>
          </div>

          <div className="document">
            <div className="personal_item"> оплата в месяц:</div>
            <div className="param">{this.state.items.cost}</div>
          </div>
        </div>
        <div className="personale_contact">
          <div className="personal-item">контакты: </div>

          <div className="document">
            <div className="personal_item"> управляющая компания:</div>
            <div className="param"> +7888888</div>
          </div>
          <div className="document">
            <div className="personal_item"> техническая служба:</div>
            <div className="param"> +7888888</div>
          </div>
          <div className="document">
            <div className="personal_item"> операторы связи:</div>
            <div className="param"> +7888888</div>
          </div>
        </div>
      </div>
    );
  }
}
export default PersonalPage;
