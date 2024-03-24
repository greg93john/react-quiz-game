import React from "react";

import AnswerButtonsContainer from "./containers/AnswerButtonsContainer";
import AnswersContainer from "./containers/AnswersContainer";
import QuestionContainer from "./containers/QuestionContainer";
import ScoreBarContainer from "./containers/ScoreBarContainer";

function Game() {

    
    return (
            <div className="game row h-100 m-0">
                <div className="col p-0 h-100 m-0">
                    <AnswersContainer />
                    <QuestionContainer questionText={"The value on the right is: "} />
                </div>
            </div>
    )
}

export default Game;