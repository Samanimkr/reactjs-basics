import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import {Header} from "./components/Header";
import {Home} from "./components/Home";
import './index.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      homeLink: "Home"
    }
  }

  onGreet(){
    alert("Hello!");
  }

  onChangeLinkName(newName){
    this.setState({
      homeLink: newName
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home
              name={"Sammy"}
              initialAge={18}
              greet={this.onGreet}
              changeLink={this.onChangeLinkName.bind(this)}
              initialName={this.state.homeLink}
            />
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
