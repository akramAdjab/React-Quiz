function Options({ question, dispatch, answer }) {
  const hasAnswered = answer;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            hasAnswered !== null
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
