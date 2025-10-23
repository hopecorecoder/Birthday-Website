import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import cogPath from "/src/assets/cog.png";
import photoPath from "/src/assets/photo-boothImg.jpg";

export default function PhotoBooth() {
  const navigate = useNavigate();
  const [rotating, setRotating] = useState(false);
  const [printing, setPrinting] = useState(false);

  function handlePrint() {
    setRotating(true);
    setPrinting(true);

    // Stop animation after 5s
   
  }

  return (
    <article className="photobooth">
      <button className="print-btn" onClick={handlePrint}>
        Print
      </button>

      <div className="main-booth">
  <img
    src={cogPath}
    className={`cog-left cog ${rotating ? "rotate" : ""}`}
    alt="left cog"
  />


  <div className="printer"></div> {/* purely visual */}
  <img
    src={photoPath}
    alt="printed photo"
    className={`photo-out ${printing ? "printing" : ""}`}
  />



  <img
    src={cogPath}
    className={`cog-right cog ${rotating ? "rotate" : ""}`}
    alt="right cog"
  />
</div>

      <button className="home-btn" onClick={() => navigate("/")}>
        Go Home
      </button>
    </article>
  );
}
