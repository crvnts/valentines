import React, { useState } from "react";
import "./App.css";

const phrases = [
  "no",
  "are you sure??",
  "please",
  "pleaseeee?",
  "be fr baby",
  "stop hitting no",
  "reconsider",
  "r u serious",
  "tiny will be mad",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="kittycat"
            src="https://media.tenor.com/DpJdyKQKgYkAAAAi/cat-jump.gif"
          />
          <div className="text">RAAAAAAHHHHHH</div>
        </>
      ) : (
        <>
          <img
            alt="kittycat2"
            src="https://storage.ko-fi.com/cdn/useruploads/post/051b1076-5d8a-44e9-a7b2-ed2bd9b91b4f_popcat_white.gif"
          />
          <div>will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: `${yesButtonSize}px` }}
              onClick={() => setYesPressed(true)}
            >
              YES
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
