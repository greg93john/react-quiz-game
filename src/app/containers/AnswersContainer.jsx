import React, { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AnswerSlide from "./elements/AnswerSlide";
import AnswerButtonsContainer from "./AnswerButtonsContainer";

function AnswersContainer(props) {


    return (
        <div className="h-100 m-0" style={{ overflow: 'hidden' }}>
            <Slider {...props.sliderSettings} ref={props.sliderRef} className="w-100 h-100">
                <div>
                    <AnswerSlide answer={props.answerValues[0]} answerID={0} />
                </div>
                <div>
                    <AnswerSlide answer={props.answerValues[1]} answerID={1} />
                </div>
                <div>
                    <AnswerSlide answer={props.answerValues[2]} answerID={2} />
                </div>
            </Slider>
            <AnswerButtonsContainer submitAnswer={props.submitAnswer} />
        </div>
    );
}

export default AnswersContainer;