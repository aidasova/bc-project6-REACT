import React, { Component } from "react";
import "./PersonalPage.css";
import store from "../../reducer/store";
import { Link } from "react-router-dom";

class PersonalPage extends Component {
  state = {
    items: {
      inn: "",
      passwordInn: "",
      floor: "",
      square: "",
      cost: "",
    },
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
      this.setState({
        items: personalItem,
      });
    });
  }
  onClickLink = () => {};
  render() {
    return (
      <div className="personale_page">
        <div className="header-block">
          <div className="personal_hello">личный кабинет</div>
          <div className="personal_name">ООО Тест</div>
          <div className="personal_name">инн: {this.state.items.inn}</div>
        </div>

        <div className="block-big">
          <div className="block-info">
            <div className="personal-item_name">данные договора:</div>

            <div className="personal-info">
              <div className="param">
                <div>расположение:</div>
                <div>{this.state.items.floor}</div>
              </div>

              <div className="param">
                <div>площадь:</div>
                <div>{this.state.items.square}</div>
              </div>

              <div className="param">
                <div>площадь:</div>
                <div>{this.state.items.cost}</div>
              </div>
            </div>

            <div className="block-info-contact">
              <div className="personal-name-two">контакты: </div>

              <div className="personal-info">
                <div className="params">
                  <div>упр.компания:</div>
                  <div>+78888880000</div>
                </div>

                <div className="params">
                  <div>тех. служба:</div>
                  <div>+78888880000</div>
                </div>

                <div className="params">
                  <div>операторы связи:</div>
                  <div>+78888880000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <Link to={"/"} onClick={() => this.onClickLink()} className="output">
            <div className="block-personal"></div>
            <div className="block-personal"></div>
          </Link>
        </footer>
      </div>
    );
  }
}
export default PersonalPage;
