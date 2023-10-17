import { useEffect, useState } from 'react'
import './App.css'
import Player from './components/Player/Player';
import Header from './components/Header/Header';

function App() {
  const [players, setPlayers] = useState([]);
  const plrArr = [...players];
  let plrs = [];
  for (let i = 0; i < plrArr.length - 5; i++) {
    plrs[i] = plrArr[i];
  }

  useEffect(() => {
    fetch("data.json")
    .then(res => res.json())
    .then(data => setPlayers(data))
  }, [])

  return (
    <div className="app">
      <Header />
      <div className='cards-container'>
      
      {
        plrs.map(player => <Player key={player.id} player={player} />)
      }
    </div>
    </div>
  )
}

export default App
