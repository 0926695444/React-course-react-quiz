function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const precentage = (points / 280) * 100;

  let emojy;
  if (precentage === 100) emojy = "🥇";
  if (precentage >= 80 && precentage < 100) emojy = "🤓";
  if (precentage >= 50 && precentage < 80) emojy = "👍";
  if (precentage < 50) emojy = "🤔";
  if (precentage === 0) emojy = "😞";
  return (
    <>
      <p className="result">
        <span>{emojy}</span> You scored <strong>{points}</strong> out of 280
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
