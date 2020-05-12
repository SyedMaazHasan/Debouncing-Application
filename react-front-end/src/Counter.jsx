import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./counter.css";
import _ from "lodash";
import SearchUsingDebounce from "./SearchUsingDebounce";
class Counter extends Component {
  state = {
    count: 0,
  };

  increment = _.debounce(() => {
    this.setState({ count: this.state.count + 1 });
  }, 2000);

  decrement = _.debounce(() => {
    this.setState({ count: this.state.count - 1 });
  }, 2000);

  render() {
    return (
      <div>
        <SearchUsingDebounce></SearchUsingDebounce>
        <H1>CLICK ON BELOW COUNTER BUTTON ND NOTICE THE API CALLS</H1>
        <span className="maaz"> {this.state.count}</span>
        <button className="btn btn-success maaz" onClick={this.increment}>
          increment
        </button>
        <button className="btn btn-warning maaz" onClick={this.decrement}>
          decrement
        </button>
      </div>
    );
  }
}
export default Counter;
