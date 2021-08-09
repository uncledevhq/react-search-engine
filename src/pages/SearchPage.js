import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../App.scss";

import LoadingState from "../components/LoadingState";
import SearchBarTop from "../components/SearchBarTop";

function Search() {
  let {term} = useParams();

  const [returnedSearch, setReturnedSearch] = useState([]);
  const [returnedAnswers, setReturnedAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();
  useEffect(() => {
    const options = {
      method: "GET",
      url:
        "https://google-search3.p.rapidapi.com/api/v1/search/q=" +
        term +
        "a&num=100",
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_GOOGLE_API_KEY,
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
      },
    };
    if(term) {
      axios
      .request(options)
      .then((response) => {
        setReturnedSearch(response.data.results);
        setReturnedAnswers(response.data.answers);
        setIsLoading(false);
        console.log(term)
      })
      .catch(function (error) {
        console.error(error);
      });
    }else {
      setTimeout(() => history.push(`/?search=${encodeURI(term)}`));

    }
  }, [term]);

  return (
    <section>

      <SearchBarTop term={term} />
    <div className="ika-center">
      <ul>
        {isLoading && <LoadingState />}
        {returnedSearch.map((result, index) => (
            <li className="ka-box-one-search" key={index}>
              <h3><a href={result.link}>{result.title}</a></h3>
              <pre>{result.link}</pre>
              <p>{result.description}</p>
              <div>
                {result.additional_links.map((link,index) => (
                  <a href={link.href}>{link.text} | </a>
                ))}
              </div>
            </li>
          ))}
      </ul>
    </div>
    </section>
  );
}

export default Search;
