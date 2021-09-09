import React, { Component } from 'react';
import axios from 'axios';
import store from '../../reducer/store';
import './ApplicationForm.css';
import { Link } from 'react-router-dom';
import {addFreeOffice, addFreeOfficeToForm} from '../../components/action/Actions';

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
          saveForm: 0,
        };
      }
      componentDidMount() {
        const globalState = store.getState(); 
        const maxId = globalState.officeitems.reduce((max, item) => item.id > max ? item.id : max, 0);
        const officePart = globalState.officeitems.find((item) => {
          if (item.id === maxId) {
            return item;
          }
        });
        console.log(officePart)
        console.log(maxId)
        this.setState({
            id: officePart.id,
            choise: officePart.choise
        })
}
      handlerChange =(event) => {
        let name = event.target.name; //получаем название поля
        let value = event.target.value; // получаем значение поля
  
        this.setState({ [name]: value });
        console.log({ [name]: value });
      }
    handlerSubmit =(event) => {
        event.preventDefault();
        console.log(this.state)
        alert('заявка отправлена')
        this.setState({
            saveForm: true
          })
        // let officeItem = this.state
        // store.dispatch({
        //     type: addFreeOffice,
        //     payload: officeItem//отправили в редьюсер
        // })
        axios
            .post(`http://localhost:3010/office/add`,
            {
                userName: this.state.userName,
                company: this.state.company,
                inn: this.state.inn,
                choise: this.state.choise,
                userComment: this.state.userComment,
                tel: this.state.tel,
            })
            .then(response => {
              store.dispatch({
                type: addFreeOffice,
                payload: [
                  ...response.data
                ]
              })      
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() { 
        
        return (
            <div className="form_page">
                <div className="form_name">Форма заявки</div> 
                <form className="form" onSubmit={this.handlerSubmit}>
                    <label>
                        <input
                        className="form_input"
                        name="user"
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
                        onChange={this.handlerChange}
                        />
                    </label>
                    <label>
                        <input
                        className="form_input"
                        name="comment"
                        type="text"
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
                    {/* <Link to='/' className="form_submit">отправить заявку</Link> */}
                     <button type="submit" className="form_submit">отправить заявку</button>
                </form>
            </div>
        );
    }
}
 
export default ApplicationForm;