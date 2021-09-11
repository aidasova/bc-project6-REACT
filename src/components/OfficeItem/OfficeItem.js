import React, { Component } from 'react';
import store from '../../reducer/store';
import './OfficeItem.css';
import { addFreeOfficeToForm } from '../../components/action/Actions';


class OfficeItem extends Component {

    buttonClick = (ID) => {
         console.log(ID)
         store.dispatch({
             type: addFreeOfficeToForm,
             payload:  ID,
         })
         }

    render() {
        const { Floor, Square, Cost, ID } = this.props;
        return (
            <div>
                <div className="office_part">
                    <div className="office_item">{Floor}</div>
                    <div className="office_item">{Square}</div>
                    <div className="office_item">{Cost}</div>
                    <label>
                        <input 
                            name="office"
                            type="checkbox" 
                            onClick={()=>this.buttonClick(ID)} 
                            className="office_item">
                        </input>
                        <div className="checkbox"></div>
                    </label>
                </div>
            </div>
        );
    }
}

export default OfficeItem;

