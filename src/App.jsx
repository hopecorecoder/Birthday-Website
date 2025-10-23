import React, { useEffect } from "react";
import MainPage from "./comp/MainPage";
import GiftPage from "./comp/GiftPage";
import QuizPage from "./comp/QuizPage";
import './assets/app.css';
import { Routes, Route } from "react-router-dom";
import Bouquet from "./comp/gifts/Bouquet";
import PhotoBooth from "./comp/gifts/PhotoBooth";
import Puzzle from "./comp/gifts/Puzzle";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isGiftRoute = location.pathname.startsWith("/gifts/") && location.pathname !== "/gifts";
  const [candle, setCandle] = React.useState(0);
  const [hasWon, setHasWon] = React.useState(false);

  // Scroll to the 3rd option when QuizPage appears
  useEffect(() => {
    if (candle >= 17) {
      const el = document.querySelectorAll(".option")[2];
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [candle]);

  // Scroll to GiftPage element when it appears
  useEffect(() => {
    if (candle >= 17 && hasWon) {
      const el = document.querySelectorAll(".card")[1];
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [candle, hasWon]);

  return (
    <>
     <Routes>
      <Route path="/gifts/Bouquet" element={<Bouquet />} />
      <Route path="/gifts/PhotoBooth" element={<PhotoBooth />} />
      <Route path="/gifts/Puzzle" element={<Puzzle />} />
    </Routes>
     {!isGiftRoute && <MainPage candle={candle} setCandle={setCandle} />}
      {!isGiftRoute && candle >= 17 && <QuizPage hasWon={hasWon} setHasWon={setHasWon} />}
      {!isGiftRoute && candle >= 17 && hasWon && <GiftPage />}
    </>
  );
}

export default App;
