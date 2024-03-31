import React from "react";

function ScoreBarContainer(props) {
    const transparentStyle = { '--bs-bg-opacity': 0.85 };
    const textStyle = {
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'
    };

    let scoreValueDisplay, highScoreDisplay;

    function ClampDecimals(value, maxDecimals) {
        let stringValue = value.toFixed(maxDecimals);
        let decimalIndex = stringValue.indexOf(".");

        if (decimalIndex !== -1) {
            stringValue = stringValue.replace(/0+$/, "");

            if (stringValue.endsWith(".")) {
                stringValue = stringValue.slice(0, -1);
            }
        }

        return stringValue;
    }

    if (props.score >= 10 ** 6) {
        scoreValueDisplay = ClampDecimals(props.score / 10 ** 6, 4) + 'm';
    } else if (props.score >= 10 ** 3) {
        scoreValueDisplay = ClampDecimals(props.score / 10 ** 3, 4) + 'k';
    } else {
        scoreValueDisplay = props.score;
    }

    if (props.highScore >= 10 ** 6) {
        highScoreDisplay = ClampDecimals(props.highScore / 10 ** 6, 4) + 'm';
    } else if (props.highScore >= 10 ** 3) {
        highScoreDisplay = ClampDecimals(props.highScore / 10 ** 3, 4) + 'k';
    } else {
        highScoreDisplay = props.highScore;
    }

    return (
        <nav className="score-bar navbar bg-dark bg-transparent fixed-top py-4">
            <div className="container-fluid">
                <div style={transparentStyle} className="navbar-text bg-dark bg-gradient rounded text-light fs-3 px-2 ms-4">
                    <p className="m-0" style={textStyle}>Score: <span id="score">{scoreValueDisplay}</span></p>
                </div>

                <div style={transparentStyle} className="navbar-text bg-dark bg-gradient rounded text-light fs-3 px-2 me-4">
                    <p className="m-0" style={textStyle}>High Score: <span id="high-score">{props.highScore}</span></p>
                </div>
            </div>
        </nav>
    )
}

export default ScoreBarContainer;