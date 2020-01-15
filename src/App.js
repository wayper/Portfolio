import React, {Component, Fragment} from 'react';
import './App.css';

import Navbar from './containers/navbar/navbar';
import ExchangeRatesApi from './containers/main/exchangeRatesAPI';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      language: 'EN',
    };
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <p>
          <button class="btn btn-outline-secondary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Used technologies:
          </button>
        </p>
        <div class="collapse" id="collapseExample">
          <ul className="list-group list-group-horizontal-xl">
            <li className="list-group-item list-group-item-info">React JS</li>
            <li className="list-group-item list-group-item-info">Bootstrap</li>
            <li className="list-group-item list-group-item-info">FireBase</li>
          </ul>
        </div>
        <h1 className="text-center text-dark shadow-lg p-3 mb-5 bg-white rounded">API Exchange Rates</h1>


        <ExchangeRatesApi />
      </Fragment>
    );
  }
}

export default App;
