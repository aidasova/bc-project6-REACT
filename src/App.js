import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListOffice from './pages/ListOffice/ListOffice';
import ApplicationForm from './pages/ApplicationForm/ApplicationForm';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
         <Route path="/" exact component={MainPage} />
         <Route path="/offices" exact component={ListOffice} />
         <Route path="/form" exact component={ApplicationForm} />
      </div>
    );
  }
}

export default App;

