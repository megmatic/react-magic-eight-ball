function MagicEightBall({ answer, isSubmitted }) {
  
  return (
    <div
      key={Math.random()}
      className={isSubmitted ? "container-shake" : "container"}
    >
      <div className="outer-circle">
        <div className="inner-circle">
          {isSubmitted ? (
            <div className="answer">{answer}</div>
          ) : (
            <div className="eight">8</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MagicEightBall