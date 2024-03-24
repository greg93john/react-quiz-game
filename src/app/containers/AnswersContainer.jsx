import React, { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AnswerSlide from "./elements/AnswerSlide";
import AnswerButtonsContainer from "./AnswerButtonsContainer";

function AnswersContainer(props) {
    const [currentLeftIndex, setCurrentLeftIndex] = useState(0);
    const [slideValues, setSlideValues] = useState([100, 200, 300]);

    const sliderRef = useRef(null);

    function SubmitAnswer(ans) {
        const leftValue = slideValues[currentLeftIndex];
        const rightValue = slideValues[(currentLeftIndex === slideValues.length - 1) ? 0 : currentLeftIndex + 1];

        if ((ans === "higher" && rightValue >= leftValue) || (ans === "lower" && rightValue <= leftValue)) {
            GoToNextSlide();
            IncrementIndex();
            PrepareFutureSlideValue();
        } else {
            alert("Wrong answer!");
        }
    }

    function IncrementIndex() {
        switch (currentLeftIndex) {
            case 0: {
                setCurrentLeftIndex(1)
                break;
            }
            case 1: {
                setCurrentLeftIndex(2)
                break;
            }
            case 2: {
                setCurrentLeftIndex(0)
                break;
            }
            default: {
                alert("Index is out of scope: " + currentLeftIndex);
                break;
            }
        }
    }

    function PrepareFutureSlideValue() {
        const newValue = Math.round(Math.random() * 300);
        let temp = slideValues;
        temp[currentLeftIndex - 1 < 0 ? slideValues.length - 1 : currentLeftIndex - 1] = newValue;
        setSlideValues(temp);
    }

    function GoToNextSlide() {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
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
                    <AnswerSlide answerValue={slideValues[0]} backgroundColor={"red"} headerText={"Red"} backgroundImageURL={"https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg"} />
                </div>
                <div>
                    <AnswerSlide answerValue={slideValues[1]} backgroundColor={"blue"} headerText={"Blue"} backgroundImageURL={"https://images.pexels.com/photos/1147124/pexels-photo-1147124.jpeg"} />
                </div>
                <div>
                    <AnswerSlide answerValue={slideValues[2]} backgroundColor={"yellow"} headerText={"Yellow"} backgroundImageURL={"https://images.pexels.com/photos/548391/pexels-photo-548391.jpeg"} />
                </div>
            </Slider>
            <AnswerButtonsContainer goToNextSlide={GoToNextSlide} submitAnswer={SubmitAnswer} />
        </div>
    );
}

export default AnswersContainer;