
import { useNavigate } from "react-router-dom";

export default function GiftPage() {
    const nav = useNavigate()
    return(
       <article className="gift-page">
            <p>These are for you!</p>
            <div className="gift-container">
                <div className="card" onClick={() => nav("/gifts/Puzzle")}>
                    <img src="/src/assets/puzzle.png" className="puzzleImg" alt="gift image" />
                </div>
                <div className="card photobooth-card" onClick={() => nav("/gifts/PhotoBooth")}>
                    <img src="/src/assets/photobooth.png" alt="gift image" />
                </div>
                <div className="card" onClick={() => nav("/gifts/Bouquet")}>
                    <img src="/src/assets/bouqeut.png" alt="gift image" />
                </div>
            </div>
        </article>
    )
}