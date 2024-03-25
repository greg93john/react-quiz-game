import React from "react";

function QuestionContainer(props) {
    return (
        <div className="vs-icon-container border border-dark rounded-circle  px-3 py-4">
            <div className="row row-cols-1 gy-2">
                <div className="col">
                    <i id="green-check" className="fa-solid fa-check text-success fs-1" style={{ display: 'none' }}></i>
                </div>
                <div className="col">
                    <p className="fs-5">{props.questionText}</p>
                </div>
            </div>
        </div>
    )
}

export default QuestionContainer;