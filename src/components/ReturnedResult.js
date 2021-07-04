import React from 'react';


//componet import
import Answers from './Answers';


class ReturnedResult extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timeOfQuery: ""
        }
    }

    

    render() {
        const ReturnedResultObj = this.props.results;
        const ReturnedAnswers = this.props.answers;
        const typedQuery = this.props.typedQuery;
        return(

            <ul>
                {
                    ReturnedAnswers.length>0 && <Answers answers={ReturnedAnswers} />
                    
                }
                {
                    ReturnedResultObj.length>0 && <pre>Showing results for: <i> <u> "{ typedQuery }"</u><br /> {this.props.totalResults} returned Results</i></pre>
                }
                {
                    ReturnedResultObj.map((result,index) => 
                        <li key={index}>
                            <h1><a href={result.link}>{result.title}</a></h1>
                            <p>{result.description}</p>
                            <pre>{result.link}</pre>
                        </li>
                    )
                }
            </ul>
            // <li>
            //     <h1><a href={this.props.result.link}>{this.props.result.title}</a></h1>
            //     <p>
            //     {/* {
            //   searchResultsObj.map((item,index) => <ReturnedResult key={index} result={item} />)
            // }  */}
            //         {
            //             this.props.result.description
            //         }
            //     </p>
            //     <pre>{this.props.result.link}</pre>

                
            // </li>
        )
    }
}

export default ReturnedResult;