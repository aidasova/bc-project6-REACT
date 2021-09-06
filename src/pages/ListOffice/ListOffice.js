import React, { Component } from 'react';
import './ListOffice.css';


class ListOffice extends Component {
    render() { 
        
        return (
            <div className="office_page">
                
                
                <div className="office_text">список помещений</div>

                <div className="office_part">
                  <div className="office_item">1 этаж </div>
                  <div className="office_item">100кв.м.</div>
                  <div className="office_item">800р/кв.м.</div>
                  <button className="office_item">заявка</button>
                </div>

                <div className="office_part">
                  <div className="office_item">2 этаж </div>
                  <div className="office_item">40кв.м.</div>
                  <div className="office_item">800р/кв.м.</div>
                  <button className="office_item">заявка</button>
                </div>

                <div className="office_part">
                  <div className="office_item">3 этаж </div>
                  <div className="office_item">40кв.м.</div>
                  <div className="office_item">800р/кв.м.</div>
                  <button className="office_item">заявка</button>
                </div>

                <div className="office_part">
                  <div className="office_item">1 этаж </div>
                  <div className="office_item">40кв.м.</div>
                  <div className="office_item">800р/кв.м.</div>
                  <button className="office_item">заявка</button>
                </div>

                <div className="office_part">
                  <div className="office_item">1 этаж </div>
                  <div className="office_item">40кв.м.</div>
                  <div className="office_item">800р/кв.м.</div>
                  <button className="office_item">заявка</button>
                </div>

                <div className="office_part">
                  <div className="office_item">12 этаж </div>
                  <div className="office_item">40кв.м.</div>
                  <div className="office_item">800р/кв.м.</div>
                  <button className="office_item">заявка</button>
                </div>

              
            </div>
        );
    }
}
 
export default ListOffice;