import React from "react";

import AnswersContainer from "./containers/AnswersContainer";
import QuestionContainer from "./containers/QuestionContainer";
import ScoreBarContainer from "./containers/ScoreBarContainer";

function Game() {

    
    return (
            <div className="game row h-100 m-0">
                <div className="col p-0 h-100 m-0">
                    <ScoreBarContainer />
                    <AnswersContainer />
                    <QuestionContainer questionText={"The value on the right is:"} />
                </div>
            </div>
    )
}

export default Game;