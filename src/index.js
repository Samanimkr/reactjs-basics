import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import {Header} from "./components/Header";
import {Home} from "./components/Home";
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={"Sammy"} initialAge={18} />
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
