import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AnswerSlide from "./elements/AnswerSlide";
import AnswerButtonsContainer from "./AnswerButtonsContainer";

function AnswersContainer(props) {

    const sliderRef = useRef(null);
    function GoToNextSlide() {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    }

    function SubmitAnswer(ans) {
        GoToNextSlide();
    }

    const settings = {
        adaptiveHeight: true,
        arrows: false,
        dots: false,
        draggable: false,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 2,
        speed: 500,
        swipe: false,
        touchMove: false,
    };

    return (
        <div className="h-100 m-0" style={{ overflow: 'hidden' }}>
            <Slider {...settings} ref={sliderRef} className="w-100 h-100">
                <div>
                    <AnswerSlide answerValue={100} backgroundColor={"red"} headerText={"Red"} backgroundImageURL={"https://rjmeats.com/wp-content/uploads/2023/03/cropped-RJs_Meats_Sausage_Icon_BoneCircle_Cropped_RGB.png"} />
                </div>
                <div>
                    <AnswerSlide answerValue={200} backgroundColor={"blue"} headerText={"Blue"} />
                </div>
                <div>
                    <AnswerSlide answerValue={300} backgroundColor={"yellow"} headerText={"Yellow"} />
                </div>
            </Slider>
            <AnswerButtonsContainer goToNextSlide={GoToNextSlide} submitAnswer={SubmitAnswer} />
        </div>
    );
}

export default AnswersContainer;