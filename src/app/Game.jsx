import React, { useRef, useState } from "react";

import AnswersContainer from "./containers/AnswersContainer";
import QuestionContainer from "./containers/QuestionContainer";
import ScoreBarContainer from "./containers/ScoreBarContainer";

function Game(props) {
    const [currentLeftIndex, setCurrentLeftIndex] = useState(0), [score, setScore] = useState(0), [highScore, setHighScore] = useState(0);
    const [slideValues, setSlideValues] = useState([Math.round(Math.random() * 300), Math.round(Math.random() * 300), Math.round(Math.random() * 300)]);

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

    function ToggleDisplayCheckBox() {
        var greenCheckElement = document.getElementById('green-check');
        if (greenCheckElement) {
            greenCheckElement.style.visibility = greenCheckElement.style.visibility === 'visible' ? 'hidden' : 'visible';
        }
    }

    function GoToNextSlide(slider) {
        if (slider.current) {
            slider.current.slickNext();
        }
    }

    function IncrementIndex() {
        setCurrentLeftIndex(currentLeftIndex < slideValues.length - 1 ? currentLeftIndex + 1 : 0);
    }

    function IncrementScore() {
        setScore(score + 1);
    }

    function HandleCorrectAnswer() {
        IncrementScore();
        IncrementIndex();
        PrepareFutureSlideValue();
        GoToNextSlide(sliderRef);
    } function HandleWrongAnswer() {
        if (score > highScore) {
            setHighScore(score);
        }
        alert("Wrong answer!");
        setScore(0);
    }

    function PrepareFutureSlideValue() {
        const newValue = Math.round(Math.random() * 300);
        let temp = slideValues;
        temp[currentLeftIndex - 1 < 0 ? slideValues.length - 1 : currentLeftIndex - 1] = newValue;
        setSlideValues(temp);
    }

    function SubmitAnswer(ans) {
        const leftValue = slideValues[currentLeftIndex];
        const rightValue = slideValues[(currentLeftIndex < slideValues.length - 1) ? currentLeftIndex + 1 : 0];

        if ((ans === "higher" && rightValue >= leftValue) || (ans === "lower" && rightValue <= leftValue)) {
            HandleCorrectAnswer();
        } else {
            HandleWrongAnswer();
        }
    }


    return (
        <div className="game row h-100 m-0">
            <div className="col p-0 h-100 m-0">
                <ScoreBarContainer score={score} highScore={highScore} />
                <AnswersContainer sliderSettings={sliderSettings} goToNextSlide={GoToNextSlide} sliderRef={sliderRef} slideValues={slideValues} submitAnswer={SubmitAnswer} />
                <QuestionContainer questionText={"The value on the right is:"} />
            </div>
        </div>
    )
}

export default Game;