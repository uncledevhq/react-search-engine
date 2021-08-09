import React from "react";

//componet import
import Answers from "../components/Answers";

class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeOfQuery: "",
    };
  }

  render() {
    const ReturnedResultObj = this.props.results;
    const ReturnedAnswers = this.props.answers;
    const typedQuery = this.props.typedQuery;
    return (
      <ul>
        {ReturnedAnswers.length > 0 && <Answers answers={ReturnedAnswers} />}
        {ReturnedResultObj.length > 0 && (
          <pre>
            Showing results for:
            <i>
              <u> "{typedQuery}"</u>
              <br /> {this.props.totalResults} returned Results
            </i>
          </pre>
        )}
        {ReturnedResultObj.map((result, index) => (
          <li key={index}>
            <h1>
              <a href={result.link}>{result.title}</a>
            </h1>
            <p>{result.description}</p>
            <pre>{result.link}</pre>
          </li>
        ))}
      </ul>
    );
  }
}

export default ResultPage;
