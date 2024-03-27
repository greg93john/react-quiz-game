import React, { useRef, useState } from "react";

import AnswersContainer from "./containers/AnswersContainer";
import QuestionContainer from "./containers/QuestionContainer";
import ScoreBarContainer from "./containers/ScoreBarContainer";

function Game(props) {

    const [answerObjects, setAnswerObjects] = useState(
        [
            {
                name: "Red",
                backgroundImageLink: "https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg",
                value: Math.round(Math.random() * 300)
            },
            {
                name: "Blue",
                backgroundImageLink: "https://images.pexels.com/photos/1147124/pexels-photo-1147124.jpeg",
                value: Math.round(Math.random() * 300)
            },
            {
                name: "Yellow",
                backgroundImageLink: "https://images.pexels.com/photos/548391/pexels-photo-548391.jpeg",
                value: Math.round(Math.random() * 300)
            },
            {
                name: "Green",
                backgroundImageLink: "https://images.pexels.com/photos/66869/green-leaf-natural-wallpaper-royalty-free-66869.jpeg",
                value: Math.round(Math.random() * 300)
            },
            {
                name: "Orange",
                backgroundImageLink: "https://images.pexels.com/photos/268976/pexels-photo-268976.jpeg",
                value: Math.round(Math.random() * 300)
            },
            {
                name: "Purple",
                backgroundImageLink: "https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg",
                value: Math.round(Math.random() * 300)
            },
        ]
    );

    const selectLeftAnswer = answerObjects[Math.floor(Math.random() * answerObjects.length)];
    const [leftAnswer, setLeftAnswer] = useState(selectLeftAnswer);

    const filteredObjects = answerObjects.filter((value) => ![leftAnswer].includes(value));
    const selectRightAnswer = filteredObjects[Math.floor(Math.random() * answerObjects.length)];
    const [rightAnswer, setRightAnswer] = useState(selectRightAnswer);

    const filteredObjects2 = answerObjects.filter((value) => ![leftAnswer, rightAnswer].includes(value));
    const selectNextAnswer = filteredObjects2[Math.floor(Math.random() * answerObjects.length)];
    const [nextAnswer, setNextAnswer] = useState(selectNextAnswer);

    const [currentLeftIndex, setCurrentLeftIndex] = useState(0);
    const [slideValues, setSlideValues] = useState([Math.round(Math.random() * 300), Math.round(Math.random() * 300), Math.round(Math.random() * 300)]);

    const [score, setScore] = useState(0), [highScore, setHighScore] = useState(0);

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
        setCurrentLeftIndex(currentLeftIndex < 2 ? currentLeftIndex + 1 : 0);
    }

    function IncrementScore() {
        setScore(score + 1);
    }

    function HandleCorrectAnswer() {
        IncrementScore();
        IncrementIndex();
        GoToNextSlide(sliderRef);
        PrepareFutureSlideValue();
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

    return (
        <div className="game row h-100 m-0">
            <div className="col p-0 h-100 m-0">
                <ScoreBarContainer score={score} highScore={highScore} />
                <AnswersContainer leftAnswer={leftAnswer} rightAnswer={rightAnswer} nextAnswer={nextAnswer} sliderSettings={sliderSettings} goToNextSlide={GoToNextSlide} sliderRef={sliderRef} slideValues={slideValues} submitAnswer={SubmitAnswer} />
                <QuestionContainer questionText={"The value on the right is:"} />
            </div>
        </div>
    )
}

export default Game;