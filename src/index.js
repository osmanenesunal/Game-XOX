import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
function XOXGameComponent() {
  const [games, setGames] = useState([]);
  const [mark, setMark] = useState("X");
  const [message, setMessage] = useState("");
  const [isGameFinish, setIsGameFinish] = useState(false);
  const [gameMove , setGameMove] = useState([])


  useEffect(() => {
    newGame();
  }, []);

  const newGame = () => {
    setGames(["", "", "", "", "", "", "", "", ""]);
    setIsGameFinish(false);
    setMark("X");
    setMessage("Hamle Sırası : " + mark);
    setGameMove([])
  };

  const markGame = (index) => {
    if (!isGameFinish) {
      const newGames = [...games];
      newGames[index] = mark;
      setGames(newGames);

      setGameMove((val)=>[...val , newGames])
      console.log(gameMove)

      let e = isMoveFinish(newGames);
      if (e) {
        setMessage("Oyun Berabere");
        setIsGameFinish(true);
        return;
      }

      let r = isGameOver(newGames);
      if (r) {
        setMessage("Oyunu " + mark + " Kazandı");
        setIsGameFinish(true);
        return;
      }

      mark == "X" ? setMark("O") : setMark("X");
      setMessage("Hamle Sırası : " + (mark == "X" ? "O" : "X"));
    }
  };

  const isGameOver = (newGames) => {
    if (
      newGames[0] != "" &&
      newGames[0] === newGames[1] &&
      newGames[1] === newGames[2]
    ) {
      return true;
    }
    if (
      newGames[3] != "" &&
      newGames[3] === newGames[4] &&
      newGames[4] === newGames[5]
    ) {
      return true;
    }
    if (
      newGames[6] != "" &&
      newGames[6] === newGames[7] &&
      newGames[7] === newGames[8]
    ) {
      return true;
    }

    if (
      newGames[0] != "" &&
      newGames[0] === newGames[4] &&
      newGames[4] === newGames[8]
    ) {
      return true;
    }


    if (
      newGames[2] != "" &&
      newGames[2] === newGames[4] &&
      newGames[4] === newGames[6]
    ) {
      return true;
    }
    return false;
  };

  function isMoveFinish(newGames) {
    for (let index = 0; index < newGames.length; index++) {
      const element = newGames[index];
      if (element === "") {
        return false;
      }
    }
    return true;
  }

  const setThatGameMove=(game) =>{
    setGames(game)
  }
  return (
    <>
      <div className="container text-center">
        <h1>X0X Oyunu</h1>
        <h2 className="alert alert-warning"> {message}</h2>
      </div>
      <button onClick={newGame} className="btn btn-outline-primary w-100">
        Yeni Oyun{" "}
      </button>
      <div className="row mt-2">
        {games.map((game, index) => (
          <div
            key={index}
            className="col-md-4 box"
            onClick={() => markGame(index)}
          >
            {game}
          </div>
        ))}
        <hr/>
        {gameMove.map((game , index) => (
          <button onClick={()=> setThatGameMove(game)} className="btn btn-primary mt-2 mx-2" key={index}> {index +1  }.Hamle </button>
        ))}
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<XOXGameComponent></XOXGameComponent>);

reportWebVitals();
