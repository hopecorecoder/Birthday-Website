
import { useNavigate } from "react-router-dom";
import bouquetImg from "/src/assets/bouqeut.png"
import photoboothImg from "/src/assets/photobooth.png"
import puzzleImg from "/src/assets/puzzle.png"
export default function GiftPage() {
    const nav = useNavigate()
    return(
       <article className="gift-page">
            <p>These are for you!</p>
            <div className="gift-container">
                <div className="card" onClick={() => nav("/gifts/Puzzle")}>
                    <img src={puzzleImg} className="puzzleImg" alt="gift image" />
                </div>
                <div className="card photobooth-card" onClick={() => nav("/gifts/PhotoBooth")}>
                    <img src={photoboothImg} alt="gift image" />
                </div>
                <div className="card" onClick={() => nav("/gifts/Bouquet")}>
                    <img src={bouquetImg} alt="gift image" />
                </div>
            </div>
        </article>
    )
}