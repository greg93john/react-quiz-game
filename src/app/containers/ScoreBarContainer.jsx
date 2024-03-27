import React from "react";

function ScoreBarContainer(props) {
    const transparentStyle = {'--bs-bg-opacity': 0.85};
    const textStyle = {
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'
    };

    return (
        <nav className="score-bar navbar bg-dark bg-transparent fixed-top py-4">
            <div className="container-fluid">
                <div style={transparentStyle} className="navbar-text bg-dark bg-gradient rounded text-light fs-3 px-2 ms-4">
                    <p className="m-0" style={textStyle}>Score: <span id="score">{props.score}</span></p>
                </div>

                <div style={transparentStyle} class="navbar-text bg-dark bg-gradient rounded text-light fs-3 px-2 me-4">
                    <p className="m-0" style={textStyle}>High Score: <span id="high-score">{props.highScore}</span></p>
                </div>
            </div>
        </nav>
    )
}

export default ScoreBarContainer;