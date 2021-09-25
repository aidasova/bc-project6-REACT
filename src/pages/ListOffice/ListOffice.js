import React, { Component } from "react";
import store from "../../reducer/store";
// import { Redirect } from 'react-router-dom';
import axios from "axios";
import { refresh } from "../../components/action/Actions";
import "./ListOffice.css";
import OfficeItem from "../../components/OfficeItem/OfficeItem";
import { Link } from "react-router-dom";

class ListOffice extends Component {
  _isMounted = false;
  constructor() {
    super();
  }
  state = {
    officeitems: [],
  };
  baseSubscribe = () => {
    const globalState = store.getState(); //получить данные из глобального состояния
    this.setState({
      //обновить локальное состояние
      officeitems: globalState.officeitems,
    });
  };
  componentDidMount() {
    this._isMounted = true;
    store.subscribe(this.baseSubscribe);
    axios
      .get(`http://localhost:3010/office/all`)
      .then((res) => {
        store.dispatch({
          type: refresh,
          payload: [...res.data],
        });
        console.log(res);

        let globalState = store.getState();
        if (this._isMounted) {
          this.setState({
            officeitems: [...globalState.officeitems],
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentWillUnmount() {
    // let unSubcribe = store.subscribe(this.baseSubscribe);
    // unSubcribe();
    this._isMounted = false;
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
