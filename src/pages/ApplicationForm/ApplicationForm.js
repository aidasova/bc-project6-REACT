import React, { Component } from 'react';
import './ApplicationForm.css';


class ApplicationForm extends Component {

    constructor() {
        super();
        this.state = {
          id: "",
          user: "",
          company: "",
          inn: "",
          choise: "",
          comment: "",
          tel: "",
        };
      }
      handlerChange =(event) => {

      }
    handlerSubmit =(event) => {

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
                        // value={this.state.requiredAmount}
                        onChange={this.handlerChange}
                        placeholder="имя"
                        />
                    </label>
                    <label>
                        <input
                        className="form_input"
                        name="company"
                        type="text"
                        // value={this.state.targetTerm}
                        onChange={this.handlerChange}
                        placeholder="наименование компании"
                        />
                    </label>
                    <label>
                        <input
                        className="form_input"
                        name="inn"
                        type="text"
                        // value={this.state.startingAmount}
                        onChange={this.handlerChange}
                        placeholder="инн"
                        />
                    </label>
                    <label>
                        <input
                        className="form_input"
                        name="choise"
                        type="text"
                        // value={this.state.depositInterest}
                        onChange={this.handlerChange}
                        />
                    </label>
                    <label>
                        <input
                        className="form_input"
                        name="comment"
                        type="text"
                        // value={this.state.taskResult}
                        placeholder="комментарий"
                        />
                    </label>
                    <label>
                        <input
                        className="form_input"
                        name="tel"
                        type="text"
                        // value={this.state.nameTarget}
                        onChange={this.handlerChange}
                        placeholder="номер телефона"
                        />
                    </label>
                    {this.state.savePurpose
                    ?  <button type="submit" className="form_submit_save"></button>
                    :
                     <button type="submit" className="form_submit">отправить заявку</button>}
                </form>
            </div>
        );
    }
}
 
export default ApplicationForm;