import React, { useRef, useState } from "react";

import AnswersContainer from "./containers/AnswersContainer";
import QuestionContainer from "./containers/QuestionContainer";
import ScoreBarContainer from "./containers/ScoreBarContainer";

function Game(props) {
    const [currentLeftIndex, setCurrentLeftIndex] = useState(0);
    const [score, setScore] = useState(0), [highScore, setHighScore] = useState(0);

    const [answerArray, setAnswerArray] = useState(
        [
            {
                answerTerm: "Red",
                backgroundColor: "red",
                backgroundImageURL: "https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg",
                answerValue: 100
            },
            {
                answerTerm: "Blue",
                backgroundColor: "blue",
                backgroundImageURL: "https://images.pexels.com/photos/1147124/pexels-photo-1147124.jpeg",
                answerValue: 200
            },
            {
                answerTerm: "Yellow",
                backgroundColor: "yellow",
                backgroundImageURL: "https://images.pexels.com/photos/548391/pexels-photo-548391.jpeg",
                answerValue: 300
            },
            {
                answerTerm: "Green",
                backgroundColor: "green",
                backgroundImageURL: "https://images.pexels.com/photos/66869/green-leaf-natural-wallpaper-royalty-free-66869.jpeg",
                answerValue: 400
            },
            {
                answerTerm: "Orange",
                backgroundColor: "orange",
                backgroundImageURL: "https://images.pexels.com/photos/268976/pexels-photo-268976.jpeg",
                answerValue: 500
            },
            {
                answerTerm: "Purple",
                backgroundColor: "purple",
                backgroundImageURL: "https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg",
                answerValue: 600
            },
        ]
    );

    function SelectThreeUniqueValues(array) {
        const shuffledArray = ShuffleArray(array);
        return shuffledArray.slice(0, 3);
    } function ShuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const [answerValues, setAnswerValues] = useState(SelectThreeUniqueValues(answerArray));

    function GoToNextSlide(slider) {
        if (slider.current) {
            slider.current.slickNext();
        }
    }

    function HandleCorrectAnswer() {
        setScore(score + 1);
        PrepareFutureAnswerValue();
        IncrementIndex();
        GoToNextSlide(sliderRef);
    }

    function HandleWrongAnswer() {
        if (score > highScore) {
            setHighScore(score);
        }
        alert("Wrong answer!");
        setScore(0);
    }

    function IncrementIndex() {
        setCurrentLeftIndex(currentLeftIndex < 2 ? currentLeftIndex + 1 : 0);
    }

    function PrepareFutureAnswerValue() {
        let _temp = answerValues;

        const excludedValues = [_temp[currentLeftIndex], _temp[currentLeftIndex < _temp.length - 1 ? currentLeftIndex + 1 : 0]];
        const filteredArray = answerArray.filter(value => !excludedValues.includes(value));
        const selectedValue = filteredArray[Math.floor(Math.random() * filteredArray.length)];

        _temp[currentLeftIndex - 1 < 0 ? _temp.length - 1 : currentLeftIndex - 1] = selectedValue

        setAnswerValues(_temp);
    }

    function SubmitAnswer(ans) {
        const leftValue = answerValues[currentLeftIndex].answerValue;
        const rightValue = answerValues[(currentLeftIndex < answerValues.length - 1) ? currentLeftIndex + 1 : 0].answerValue;

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
    function ToggleDisplayCheckBox() {
        var greenCheckElement = document.getElementById('green-check');
        if (greenCheckElement) {
            greenCheckElement.style.visibility = greenCheckElement.style.visibility === 'visible' ? 'hidden' : 'visible';
        }
    }

    return (
        <div className="game row h-100 m-0">
            <div className="col p-0 h-100 m-0">
                <ScoreBarContainer score={score} highScore={highScore} />
                <AnswersContainer answerValues={answerValues} sliderSettings={sliderSettings} sliderRef={sliderRef} submitAnswer={SubmitAnswer} />
                <QuestionContainer questionText={"The value on the right is:"} />
            </div>
        </div>
    )
}

export default Game;