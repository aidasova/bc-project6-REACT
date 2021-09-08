import React, { Component } from 'react';
import store from '../../reducer/store';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { addFreeOfficeToForm, refresh } from '../../components/action/Actions';
import './ListOffice.css';


class ListOffice extends Component {
    constructor() {
        super()
          this.state = {
            officeitems: [],
            id: '',
            choise: ''
        }
      }

      componentDidMount() {
        store.subscribe(() => {
          const globalState = store.getState(); //получить данные из глобального состояния
          this.setState({   //обновить локальное состояние
              officeitems: globalState.officeitems
          })
      })
      axios
        .get(`http://localhost:3010/office/all`)
        .then(res => {

        store.dispatch({
          type: refresh,
          payload: [
            ...res.data
          ]
        })
        console.log(res)
        
        let globalState = store.getState();
        this.setState ({
          officeitems: [
            ...globalState.officeitems
          ]
        
        })
      })
      .catch(err => {
          console.log(err);
      });
    }

    buttonClick = (e) => {
        // e.preventDefault();
         const dataOffice =  this.state
         console.log(dataOffice)
         store.dispatch({
             type: addFreeOfficeToForm,
             payload:  dataOffice,
         })
         }
    render() { 
      return this.state.id
      ? (<Redirect to={"/form/" + this.state.id}></Redirect>)
      : (
            <div className="office_page">
                <div className="office_text">список помещений</div>

                <div className="office_text">
                    {this.state.officeitems.map(item => {
                    return(
                        <div className="office_part" key={item.id}>
                        <div className="office_item">{item.Floor}</div>
                        <div className="office_item">{item.Square}</div>
                        <div className="office_item">{item.Cost}</div>
                        <button onClick={()=>this.buttonClick()} className="office_item">заявка</button>
                    </div>
                    )
                    })}
                </div>

            </div>
        );
    }
}
 
export default ListOffice;