import React from "react";

function QuestionContainer(props) {
    return(
        <div className="vs-icon-container border border-dark rounded-circle  px-3 py-5">
            <b>{props.questionText}</b>
        </div>
    )
}

export default QuestionContainer;