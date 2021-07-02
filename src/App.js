import React from 'react';


import ReturnedResult from './components/ReturnedResult';
import axios from 'axios';
// import { demand } from 'yargs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "google",
      returnedSearch: [],
      loading: false

    }


    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

 

  // componentDidMount() {

  //   // const searchTerm = this.state.searchTerm;
  //   const options = {
  //     method: 'GET',
  //     url: 'https://google-search3.p.rapidapi.com/api/v1/search/q='+this.state.searchTerm+'a&num=100',
  //     headers: {
  //       'x-rapidapi-key': 'ba4d786292mshc149894312d7ed2p1ca8d3jsna1d970fd15b2',
  //       'x-rapidapi-host': 'google-search3.p.rapidapi.com'
  //     }
  //   };


    
  // }


  handleSearchInput(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({
      loading: true
    })
    console.log("submitting form now");


    const options = {
      method: 'GET',
      url: 'https://google-search3.p.rapidapi.com/api/v1/search/q='+this.state.searchTerm+'a&num=100',
      headers: {
        'x-rapidapi-key': 'ba4d786292mshc149894312d7ed2p1ca8d3jsna1d970fd15b2',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com'
      }
    };
    axios.request(options).then((response) => {
      console.log(response.data);
      this.setState({
        loading: false,
        returnedSearch: response.data.results
      })
    }).catch(function (error) {
      console.error(error);
    });
  }


  

  render() {
    const searchResultsObj = this.state.returnedSearch;
    console.log(typeof searchResults);
    return (
      <div className="app-container">
        <form onSubmit={this.handleSearch}>
          <input value={this.state.searchTerm} onChange={this.handleSearchInput} type="search" name="search" placeholder="Search  the web with Ease" />
          <button>Search</button>
        </form>


        <section>
          {this.state.loading && <p>searching for {this.state.searchTerm}...</p>}
          show results: 
          <pre>
          

            {
              searchResultsObj.map((item,index) => <ReturnedResult key={index} result={item} />)
            }
          
           
          </pre>
        </section>
      </div>
    )
  }
}


export default App;