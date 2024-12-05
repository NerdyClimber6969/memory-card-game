function ScoreBoard({currentScore, bestScore}) {
    return (
        <div className="scoreBoard">
            <div className="currentScore">Current score: {currentScore}</div>
            <div className="bestScore">Best score: {bestScore}</div>
        </div>
    );
};

export default ScoreBoard;