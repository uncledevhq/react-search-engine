import React from "react";
import "./App.scss";

import ReturnedResult from "./ReturnedResult";
import axios from "axios";
// import { demand } from 'yargs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      returnedResult: "",
      returnedSearch: [],
      returnedAnswers: [],
      loading: false,
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearchInput(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    console.log("submitting form now");

    const options = {
      method: "GET",
      url:
        "https://google-search3.p.rapidapi.com/api/v1/search/q=" +
        this.state.searchTerm +
        "a&num=100",
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_GOOGLE_API_KEY,
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        this.setState({
          loading: false,
          returnedSearch: response.data.results,
          returnedAnswers: response.data.answers,
          returnedResult: response.data.total,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render() {
    const searchResultsObj = this.state.returnedSearch;
    // console.log(typeof searchResults);
    return (
      <div className="app">
        <form onSubmit={this.handleSearch}>
          <input
            value={this.state.searchTerm}
            onChange={this.handleSearchInput}
            type="search"
            name="search"
            placeholder="Search  the web with Ease"
          />
          <button>Search</button>
        </form>

        <section>
          {this.state.loading && (
            <p>searching for {this.state.searchTerm}...</p>
          )}

          {this.state.loading ? (
            ""
          ) : (
            <ReturnedResult
              totalResults={this.state.returnedResult}
              answers={this.state.returnedAnswers}
              typedQuery={this.state.searchTerm}
              results={searchResultsObj}
            />
          )}
        </section>
      </div>
    );
  }
}

export default App;
