import React from "react";

function AnswerSlide(props) {

    const textStyle = {
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'
    };

    return (
        <div
            className="container d-flex justify-content-center align-items-center"
            style={
                {
                    backgroundColor: props.backgroundColor,
                    backgroundImage: `url(${props.backgroundImageURL ? props.backgroundImageURL : ''})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "100vh"
                }
            }
        >
            <div className="row row-cols-1 gy-1 bg-dark bg-gradient rounded text-light" style={{'--bs-bg-opacity': 0.8}}>
                <div className="col">
                    <h2 style={textStyle}>{props.headerText}</h2>
                </div>
                <div className="col">
                    <p style={textStyle}>has</p>
                </div>
                <div className="col">
                    <h1 style={textStyle}>{props.answerValue}</h1>
                </div>
            </div>
        </div>
    )
}

export default AnswerSlide