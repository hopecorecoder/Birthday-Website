import { useNavigate } from "react-router-dom";
import React from "react";
import imagePath from "/src/assets/flower.png";

export default function Bouquet() {
  const navigate = useNavigate();
  const count = 10;
  const imgs = Array(count).fill(imagePath);
  const containerRef = React.useRef(null);
  const [note,setNote] = React.useState(
    [
      {cont:"you're sigma boi",
        id:1,
        showNote:false
      },
      {cont:"you're cutuie",
        id:2,
        showNote:false
      },
      {cont:"you're buddha",
        id:3,
        showNote:false
      },
      {cont:"you make me so so happyy",
        id:4,
        showNote:false
      },
      {cont:"you're soooo pretttyyyy",
        id:5,
        showNote:false
      },
      {cont:"i lovee when you fall after seeing pigeons ",
        id:6,
        showNote:false
      },
      {cont:"i wish u could replace bao ",
        id:7,
        showNote:false
      },
      {cont:"I love to see you perform on stage ",
        id:8,
        showNote:false
      },
      {cont:"you're my bestest friendd",
        id:9,
        showNote:false
      },
      {cont:"I love you zyadest",
        id:10,
        showNote:false
      },
  ]
  )

  const [positions, setPositions] = React.useState(
    Array.from({ length: count }, () => ({ x: 0, y: 0 }))
  );
  const [activeIndex, setActiveIndex] = React.useState(null);
  const activeElRef = React.useRef(null);

  // Random placement with 70px no-overlap zone
  // ...existing code...
function toggleShowNote(i){
  setNote(prev =>
    prev.map(item =>
      item.id === i + 1
        ? { ...item, showNote: !item.showNote }   // toggle clicked
        : { ...item, showNote: false }            // close others
    )
  );
}
// ...existing code...
  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const flowerWidth = 90;
    const flowerHeight = 120;
    const safeDistance = 100; // min gap in px in all directions
    const margin = 20;

    const newPositions = [];

    for (let i = 0; i < count; i++) {
      let valid = false;
      let attempt = 0;
      let newPos = { x: 0, y: 0 };

      while (!valid && attempt < 300) {
        const x =
          rect.left +
          margin +
          Math.random() * (rect.width - flowerWidth - margin * 2);
        const y =
          rect.top +
          margin +
          Math.random() * (rect.height - flowerHeight - margin * 2);
        newPos = { x, y };

        // check distance from all previously placed
        const overlapping = newPositions.some(
          p =>
            Math.abs(p.x - x) < safeDistance && Math.abs(p.y - y) < safeDistance
        );

        if (!overlapping) valid = true;
        attempt++;
      }

      newPositions.push(newPos);
    }

    setPositions(newPositions);
  }, [count]);

  // Drag logic
  React.useEffect(() => {
    function handleMove(e) {
      if (activeIndex === null) return;
      const el = activeElRef.current;
      const halfW = el ? el.offsetWidth / 2 : 45;
      const halfH = el ? el.offsetHeight / 2 : 60;

      setPositions(prev =>
        prev.map((p, i) =>
          i === activeIndex
            ? { x: e.clientX - halfW, y: e.clientY - halfH }
            : p
        )
      );
    }

    function handleUp() {
      if (activeIndex !== null) setActiveIndex(null);
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [activeIndex]);

  return (
    <article className="bouquet">
      <button className="home-btn" onClick={() => navigate("/")}>
        Go Home
      </button>

      <div className="img-cont" ref={containerRef}>
        {imgs.map((src, i) => {
          const isActive = i === activeIndex;
          const style = {
            left: `${positions[i].x}px`,
            top: `${positions[i].y}px`,
          };
          return (
            <img
              key={i}
              src={src}
              alt={`flower-${i}`}
              draggable={false}
              className={`flower-img ${isActive ? "dragging" : ""}`}
              style={style}
              ref={isActive ? activeElRef : null}
              onMouseDown={e => {
                e.preventDefault();
                setActiveIndex(i);
              }}
              
              onClick={() => toggleShowNote(i)}
            />
          );
        })}
      </div>
        <div className="note-cont" style={{backgroundImage : `url(/src/assets/ripped-paper.png)`}}>
          {note.map(note => (
            note.showNote? <p style={{ fontFamily : "Castro", fontSize:"48px", marginBottom:"30px" }}>{note.cont}</p> :null
          ))}
        </div>
      <img
        className="bouquet-img"
        src="/src/assets/empty_bouquet.png"
        alt="empty bouquet"
      />
    </article>
  );
}
