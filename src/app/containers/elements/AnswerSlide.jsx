import React from "react";

function AnswerSlide(props) {
    const _answer = props.answer;

    return (
        <div
            className="container d-flex justify-content-center align-items-center"
            style={
                {
                    backgroundColor: _answer.backgroundColor ? _answer.backgroundColor : "grey",
                    backgroundImage: `url(${_answer.backgroundImageURL ? _answer.backgroundImageURL : ''})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "100vh"
                }
            }
        >
            <div className="row row-cols-1 gy-1 rounded text-light" style={{ '--bs-bg-opacity': 0.8}}>
                <div className="col">
                    <h2 className="text-outline" >{_answer.answerTerm}</h2>
                </div>
                <div className="col">
                    <p className="my-1 text-outline" >has</p>
                </div>
                <div className="col">
                    <h1 className={`answer-value-${props.answerID} text-outline`} >{_answer.answerValue}</h1>
                </div>
            </div>
        </div>
    )
}

export default AnswerSlide