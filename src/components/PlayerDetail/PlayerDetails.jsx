import './PlayerDetails.css'

export default function PlayerDetails(playerDetails) {
  console.log(playerDetails);
  const { name, position, isActive, about, address, email, picture, age } = playerDetails;
  return (
    <div className='modal'>
      <div className="modal-content">
        <span className="close">&times;</span>
        <h5 className='player-name'>Name: {name}</h5>
        <img className='player-img' src={picture} alt="Player Image" />
        <p>Age: <strong>{age}</strong></p>
        <p>Position: <strong>{position}</strong></p>
        <p>Is Active: <strong>{isActive ? "YES" : "NO"}</strong></p>
        <p>About: <strong>{about}</strong></p>
        <p>Email: <strong>{email}</strong></p>
        <p>Address: <strong>{address}</strong></p>
      </div>
    </div>
  )
}

