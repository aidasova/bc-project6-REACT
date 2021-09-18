import React, { Component } from "react";
import store from "../../reducer/store";
// import { Redirect } from 'react-router-dom';
import axios from "axios";
import { refresh } from "../../components/action/Actions";
import "./ListOffice.css";
import OfficeItem from "../../components/OfficeItem/OfficeItem";
import { Link } from "react-router-dom";

class ListOffice extends Component {
  constructor() {
    super();
    this.state = {
      officeitems: [],
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const globalState = store.getState(); //получить данные из глобального состояния
      this.setState({
        //обновить локальное состояние
        officeitems: globalState.officeitems,
      });
    });
    axios
      .get(`http://localhost:3010/office/all`)
      .then((res) => {
        store.dispatch({
          type: refresh,
          payload: [...res.data],
        });
        console.log(res);

        let globalState = store.getState();
        this.setState({
          officeitems: [...globalState.officeitems],
        });
        console.log(this.setState);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="office_page">
        <div className="office_text">список помещений</div>

        <div className="office_text">
          {this.state.officeitems.map((item) => (
            <div className="office_part" key={item.ID}>
              <OfficeItem {...item} />
            </div>
          ))}
        </div>
        <Link to={"/form"} className="form_btn">
          перейти к форме заявки
        </Link>
      </div>
    );
  }
}

export default ListOffice;
