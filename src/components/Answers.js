function Answers(props) {
    const insightBox = {
        backgroundColor: "lavender",
        padding: "12px",
        borderRadius: "6px"
    }
    const answers = props.answers;
    return (
        <ul style={insightBox}>
           <h2>you should know</h2> 
            {
                answers.map((answer, index) => <li key={index}><a href="#!">{ answer }</a></li>)
            }
        </ul>
    )
}


export default Answers;