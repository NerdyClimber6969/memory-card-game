import { useState, useRef } from 'react';
import usePokemon from './usePokemon.jsx';
import ScoreBoard from './component/ScoreBoard.jsx';
import Card from './component/Card.jsx';
import './App.css'

function App() {
  const { cards, setCards, loading } = usePokemon();
  const [scoreBoard, setScoreBoard] = useState({ current: 0 , best: 0 });
  const [gameover, setGameover] = useState(false);
  const cardsRef = useRef([]);
  console.log(cardsRef.current)

  if (loading) return <p> Loading ... </p>;

  const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 

  function handleCardClicked(cardName) {
    if (cardsRef.current.find((card) => card === cardName)) {  
      setScoreBoard({
        best: scoreBoard.current > scoreBoard.best ? scoreBoard.current : scoreBoard.best, 
        current: 0
      });
      cardsRef.current = [];
    } else {
      cardsRef.current.push(cardName);
      setScoreBoard({...scoreBoard, current: scoreBoard.current + 1})
      setCards(shuffle(cards));
    }
  };

  return (
    <div className='app'>
      <div className='headerBar'>
        <h1>Pokemon Memory Card Game</h1>
        <ScoreBoard 
          currentScore={scoreBoard.current}
          bestScore={scoreBoard.best}
        />
      </div>

      <div className='cardContainer'>
        {
          cards.map((card) => (
            <Card
              img={card.imgUrl} 
              cardName={card.name}
              key={card.name}
              onClick={() => handleCardClicked(card.name)}
            />
          ))
        }
      </div>
    </div>
  )
};

export default App
