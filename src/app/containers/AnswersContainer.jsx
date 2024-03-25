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
                    <AnswerSlide answerValue={props.slideValues[0]} backgroundColor={"red"} headerText={"Red"} backgroundImageURL={"https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg"} />
                </div>
                <div>
                    <AnswerSlide answerValue={props.slideValues[1]} backgroundColor={"blue"} headerText={"Blue"} backgroundImageURL={"https://images.pexels.com/photos/1147124/pexels-photo-1147124.jpeg"} />
                </div>
                <div>
                    <AnswerSlide answerValue={props.slideValues[2]} backgroundColor={"yellow"} headerText={"Yellow"} backgroundImageURL={"https://images.pexels.com/photos/548391/pexels-photo-548391.jpeg"} />
                </div>
            </Slider>
            <AnswerButtonsContainer goToNextSlide={props.goToNextSlide} submitAnswer={props.submitAnswer} />
        </div>
    );
}

export default AnswersContainer;