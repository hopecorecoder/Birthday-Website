import { useNavigate } from "react-router-dom";
import React from "react";

export default function Puzzle() {
  const navigate = useNavigate();
  const [openLetter, setOpenLetter] = React.useState(false);
  const [showMessage, setShowMessage] = React.useState(false);
  const [animateLetter, setAnimateLetter] = React.useState(false);

  function openEnvolope() {
    setOpenLetter(true);
  }

  function openMessage() {
    setAnimateLetter(true);

    // Show the message after the animation completes (~0.75s total)
    setTimeout(() => {
      setShowMessage(true);
      setAnimateLetter(false); // hide animation div if needed
    }, 750);
  }

  return (
    <article className="puzzle-el">
      <p>A Letter For You </p>
      {!openLetter && (
        <>
          <img
            src="/src/assets/letter-close.png"
            className="close-letter"
            onClick={openEnvolope}
          />
          <img
            src="/src/assets/letter-button.png"
            className="button-letter"
            onClick={openEnvolope}
          />
        </>
      )}
      {openLetter && (
        <img
          src="/src/assets/letter-open.png"
          className="open-letter"
          onClick={openMessage}
        />
      )}
      {animateLetter && <div className="animation-letter"></div>}
      {showMessage && (
        <div className="message">
          <p>
            <span>My Dearest Tahu,</span>
            <span>Happy Birthdayy Babbyy!!! Omgg I your so oldie now bahahhahahaha budha. But you will always be my babyy. I lovee youu soo mucchh and I always want to be there, all your birthdays watching u grow more budha , watching you grow. Im so proud of you in everything you do jaan and I always will be. I love you so much, never ever forget that. I hope you like this gift , there's more to come babyy . I LOVE YOU TO SATURN AND BACK</span> </p>
        </div>
      )}
      <button className="home-btn" onClick={() => navigate("/")}>
        Go Home
      </button>
    </article>
  );
}
