import './Player.css'
import PlayerDetails from "../PlayerDetail/PlayerDetails"

export default function Player(player) {
  const {id, name, position, isActive, picture, age} = player.player;
  
  const handleViewDetailsBtn = id => {
     console.log(id, player.player);
  };
  
  return (
    <div className='player-card'>
      <h5 className='player-name'>Name: {name}</h5>
      <img className='player-img' src={picture} alt="Player Image" />
      <p>Age: <strong>{age}</strong></p>
      <p>Position: <strong>{position}</strong></p>
      <p>Is Active: <strong>{isActive ? "YES" : "NO"}</strong></p>
      <button onClick={() => <PlayerDetails key={id} playerDetails={player.player} handleViewDetailsBtn={handleViewDetailsBtn(id)} />} id="view-player-details-btn">View Details</button>
    </div>
  )
}
