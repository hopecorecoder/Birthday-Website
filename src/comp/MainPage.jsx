import imgPath from "/src/assets/candle.png"
import React from "react"
import cakeImg from "/src/assets/Cake-removebg-preview.png"
import arrowImg from "/src/assets/arrow.png"
export default function MainPage(   { candle, setCandle }   ) {
    let [candles, setCandles] = React.useState([])

    function handleCandle(event){

        const rect = event.currentTarget.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        
        
            setCandles((prev) => [
                ...prev,
                    {
                        x : x,
                        y:y,
                        img : imgPath
                    }
                ]
            )        
        setCandle(prev => prev+1)
        console.log(candle)
    }
    function renderCandle(){
        
        
       return candles.map( ( candle, index )  => (
            <img key={index} src={candle.img} style={ {height:"200px", width:"200px", position: "absolute", left: candle.x - 100, top: candle.y - 100 } }/>
       ))
    }
    
    return(
        
        <main>
            <div className="PointerText" >
                <span>
                    <p> Click on the cake. </p>
                    <img src={arrowImg} alt="Pointer png"></img>
                </span>
                <h1>Your Age {candle}</h1>
            </div>
            <div className="ImgHolder" onClick={handleCandle}>
                <img src={cakeImg} alt="cake png"/>
                {renderCandle()}
            </div>
        </main>
    )
}