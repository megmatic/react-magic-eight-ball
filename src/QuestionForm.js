function QuestionForm({onSubmit}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit()

  };
  return (
    <div>
      <h1>Ask your question to the Magic Eight Ball:</h1>
      <form className="form-control" onSubmit={handleSubmit}>
        <input required type="text" />
        <input type="submit" value="Ask" className="btn"/>
      </form>
    </div>
  );
}

export default QuestionForm;
