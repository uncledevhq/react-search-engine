import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../App.scss";
import qlogo from "../qsearchLogo-01.svg";

//custom componrnts
import LoadingState from "../components/LoadingState";
import axios from "axios";

function Home() {
  const date = new Date().getFullYear();
  const [currentYear] = useState(date);
  const [searchFor, setSearchFor] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [searchResults, setSearchResults] = useState([]);

  const history = useHistory();

  const triggerSearch = (e) => {
    e.preventDefault();

    if (searchFor) {
      setIsLoading(true);
      setTimeout(() => history.push(`/search/${encodeURI(searchFor)}`));
    }
  };

  return (
    <form onSubmit={triggerSearch}>
      {isLoading && <LoadingState />}

      <div className="flex-align-center-justify-center-direction-column view-height p-all">
        <img className="foresight-logo m-bottom" alt="Qsearch" src={qlogo} />
        <div className="foresight-search-bar fill-space m-bottom">
          <input
            value={searchFor}
            onChange={(e) => {
              setSearchFor(e.target.value);
            }}
            type="text"
            placeholder="Search the world now..."
          />
          <i className="material-icons">search</i>
        </div>
        <div className="m-bottom">
          <button type="submnit" className="btn primary ">
            Search Q
          </button>
          {/* <button className="btn dark-grey">Browse Zed News</button> */}
        </div>
        <div className="text-center text-grey font-lighter">
          <div>
            <small>
              &copy; Chombazm,
              {currentYear}
            </small>
          </div>
          <div>
            <small>Pet project</small>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Home;
