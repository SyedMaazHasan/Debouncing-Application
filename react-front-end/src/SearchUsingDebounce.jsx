import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import _ from "lodash";
import axios from "axios";

class SearchUsingDebounce extends Component {
  state = {
    input: [
      { body: "The Shawshank Redemption", year: 1994 },
      { body: "The Godfather", year: 1972 },
    ],
  };

  handlleDebounce = _.debounce(async (userEnteredValue) => {
    console.log("under debounce=", userEnteredValue);
    const result = await axios.post("http://localhost:4000/comments", {
      input: userEnteredValue,
    });
    console.log(result.data);

    //if user erse the search bar
    if (userEnteredValue.length === 0) {
      this.setState({ input: [{}] });
    } else {
      this.setState({ input: result.data });
    }
  }, 1000);

  handleChange = (e) => {
    e.persist();
    console.log("event under handlechnge=", e.currentTarget.value);
    const userEnteredValue = e.currentTarget.value;
    this.handlleDebounce(userEnteredValue);
  };

  render() {
    return (
      <div>
        <h1> NOTICE THE API CALLS WHEN YOU SEARCH SOMETHING</h1>
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={this.handleChange}
        ></input>
        {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button> */}
        <ul>
          {this.state.input.map((m) => (
            <li>{m.body}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default SearchUsingDebounce;
