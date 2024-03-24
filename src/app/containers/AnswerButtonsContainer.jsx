import React from "react";

function AnswerButtonsContainer(props) {
    return (
        <div className="answer-buttons-container row row-cols-1 gy-2">
            <div className="col">
                <button className="higher-button btn btn-dark w-100" onClick={() => { props.submitAnswer("higher") }}>Higher</button>
            </div>
            <div className="col">
                <button className="lower-button btn btn-dark w-100" onClick={() => { props.submitAnswer("lower") }}>Lower</button>
            </div>
        </div>
    )
}

export default AnswerButtonsContainer;