import React, { useRef, useState } from "react";

import AnswersContainer from "./containers/AnswersContainer";
import QuestionContainer from "./containers/QuestionContainer";
import ScoreBarContainer from "./containers/ScoreBarContainer";

function Game() {
    const [currentLeftIndex, setCurrentLeftIndex] = useState(0);
    const [slideValues, setSlideValues] = useState([100, 200, 300]);

    const sliderRef = useRef(null);
    const sliderSettings = {
        adaptiveHeight: true,
        afterChange: ToggleDisplayCheckBox,
        beforeChange: ToggleDisplayCheckBox,
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

    function ToggleDisplayCheckBox(index) {
        var greenCheckElement = document.getElementById('green-check');
        if (greenCheckElement) {
            if (greenCheckElement.style.visibility !== 'hidden') {
                greenCheckElement.style.visibility = 'hidden';
            } else {
                greenCheckElement.style.visibility = 'visible';
            }
        }
    }

    function GoToNextSlide() {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
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


    return (
        <div className="game row h-100 m-0">
            <div className="col p-0 h-100 m-0">
                <ScoreBarContainer />
                <AnswersContainer sliderSettings={sliderSettings} goToNextSlide={GoToNextSlide} sliderRef={sliderRef} slideValues={slideValues} submitAnswer={SubmitAnswer} />
                <QuestionContainer questionText={"The value on the right is:"} />
            </div>
        </div>
    )
}

export default Game;