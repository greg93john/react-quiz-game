import React from "react";

function AnswerSlide(props) {
    const _answer = props.answer;

    const textStyle = {
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'
    };

    return (
        <div
            className="container d-flex justify-content-center align-items-center"
            style={
                {
                    backgroundColor: _answer.backgroundColor,
                    backgroundImage: `url(${_answer.backgroundImageURL ? _answer.backgroundImageURL : ''})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "100vh"
                }
            }
        >
            <div className="row row-cols-1 gy-1 bg-dark bg-gradient rounded text-light" style={{ '--bs-bg-opacity': 0.8 }}>
                <div className="col">
                    <h2 style={textStyle}>{_answer.answerTerm}</h2>
                </div>
                <div className="col">
                    <p className="my-1" style={textStyle}>has</p>
                </div>
                <div className="col">
                    <h1 style={textStyle}>{_answer.answerValue}</h1>
                </div>
            </div>
        </div>
    )
}

export default AnswerSlide