import registerServiceWorker from './registerServiceWorker';
import React from  "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";

class App extends React.Component {
  render() {
    return (
      <Router>
          <Root>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/user/:id" component={User} />
            </Switch>
          </Root>
      </Router>
    )
  }
}

render(<App />, document.getElementById('root'));
registerServiceWorker();
