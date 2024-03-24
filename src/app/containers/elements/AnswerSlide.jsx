import React from "react";

function AnswerSlide(props) {
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
            <div className="row row-cols-1 gy-1">
                <div className="col">
                    <h2>{props.headerText}</h2>
                </div>
                <div className="col">
                    <p>has</p>
                </div>
                <div className="col">
                    <h1>{props.answerValue}</h1>
                </div>
            </div>
        </div>
    )
}

export default AnswerSlide