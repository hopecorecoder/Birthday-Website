import React from "react";
import Confetti from "/src/comp/Confetti.jsx";

export default function QuizPage({ HasWon, setHasWon }) {

  const [allOptions, setAllOptions] = React.useState([]);
  const [showRetry, setShowRetry] = React.useState(false);
  const [showHelp, setShowHelp] = React.useState(false);
  const [showE, setShowE] = React.useState(false);
  const [ selectOpt , setSelectOpt ] = React.useState(true)

  function handleSubmit(event) {
    event.preventDefault();
    const button = event.nativeEvent.submitter;
    const response = button.value;
    const buttons = document.querySelectorAll(".option-cont button");
    setAllOptions(prev => [...prev, response]);
    button.className += " wrongOption";
    buttons.forEach(but => but.disabled = true )
    setShowRetry(true);
    setSelectOpt(false)
    // Fire confetti if E is clicked
    if (response === "E") {
      button.className = "correct-option option";
      setHasWon(true)
    }
  }

  function handleRetry() {
    const buttons = document.querySelectorAll(".option-cont button");
    buttons.forEach(but => but.disabled = false )
    for (const button of buttons) {
      button.className = "option";
  
    }
    setSelectOpt(true)
    setShowRetry(false);

    if (!showHelp) {
      const req = ["A", "B", "C", "D"];
      if (req.every(opt => allOptions.includes(opt))) {
        setShowHelp(true);
      }
    }
  }

  function handleHelp() {
    if (!showE) {
      const req = ["A", "B", "C", "D"];
      if (req.every(opt => allOptions.includes(opt))) {
        setShowE(true);
        setShowHelp(prev => !prev);
      }
    }
  }

  return (
    <section>
      <p>
        <span className="mainSpan">
          Think you know her? Answer this
        </span>
        <span className="questionSpan">
          What does she love most about you?
        </span>
      </p>
      <form className="option-cont" onSubmit={selectOpt ? handleSubmit : function(event){event.preventDefault()}}>
        <button type="submit" className="option" value="A">
          A. eyes
        </button>
        <button type="submit" className="option" value="B">
          B. smile
        </button>
        <button type="submit" className="option" value="C">
          C. nose
        </button>
        <button type="submit" className="option" value="D">
          D. laugh
        </button>
        <button
          type="submit"
          className="option"
          value="E"
          style={{
            transition: "opacity 0.4s ease",
            opacity: showE ? "1" : "0",
            fontFamily: "Dancing Script"
          }}
        >
          E. EVERYYYTHHINGGGG
        </button>
      </form>

      <button
        onClick={handleRetry}
        style={{
          transition: "opacity 0.4s ease",
          opacity: showRetry && !showE ? "1" : "0",
        }}
        className="reset-btn"
      >
        Retry
      </button>

      <button
        onClick={handleHelp}
        style={{
          transition: "opacity 0.4s ease",
          opacity: showHelp && !showE ? "1" : "0",
        }}
        className="reset-btn hint-btn"
      >
        Want a Hint
      </button>

      {HasWon && <Confetti /> }

    </section>
  );
}
