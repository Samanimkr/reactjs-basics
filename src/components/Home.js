import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props){
    super();
    this.state = {
      age: props.initialAge,
      status: 0
    }
  }

  onMakeOlder(){
    this.setState({
      age: this.state.age + 3
    });
  }

  render(){
    var props = this.props;
    return (
      <div>
        <p>Hello {props.name}!</p>
        <p>Age: {this.state.age}</p>
        <hr/>
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me Older!</button>
      </div>
    )
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
}
