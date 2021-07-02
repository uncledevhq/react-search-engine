import React from 'react';



class ReturnedResult extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return(
            <li>
                <h1><a href={this.props.result.link}>{this.props.result.title}</a></h1>
                <p>
                    {
                        this.props.result.description
                    }
                </p>
                <pre>{this.props.result.link}</pre>

                
            </li>
        )
    }
}


export default ReturnedResult;