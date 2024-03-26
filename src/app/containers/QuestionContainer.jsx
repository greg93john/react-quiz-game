import React from "react";

function QuestionContainer(props) {
    return (
        <div className="vs-icon-container border border-dark rounded px-3 py-4">
            <div className="row row-cols-1 gy-2">
                <div className="col">
                    <i id="green-check" className="fa-solid fa-check text-success fs-1" style={{ visibility: 'hidden' }}></i>
                </div>
                <div className="col">
                    <p className="fw-bold fs-5">{props.questionText}</p>
                </div>
            </div>
        </div>
    )
}

export default QuestionContainer;