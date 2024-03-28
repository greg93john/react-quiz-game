import React from "react";
import CountUp from "react-countup";

function AnswerSlide(props) {
    const _answer = props.answer;

    const textStyle = {
        textShadow: '1px 1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, -1px -1px 2px #000'
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
            <div className="row row-cols-1 gy-1 rounded bg-dark bg-gradient text-light" style={{ '--bs-bg-opacity': 0.8, minWidth: '40%' }}>
                <div className="col">
                    <h2 style={textStyle}>{_answer.answerTerm}</h2>
                </div>
                <div className="col">
                    <p className="my-1" style={textStyle}>has</p>
                </div>
                <div className="col">
                    <CountUp start={0} end={_answer.answerValue} duration={2} startOnMount={false}>
                        {
                            ({ countUpRef, start }) => (
                                <h1 ref={countUpRef} style={textStyle}></h1>
                            )
                        }
                    </CountUp>
                </div>
            </div>
        </div>
    )
}

export default AnswerSlide