import React, {useState} from 'react'


function Character(props){ // ❗ Add the props
const {homeWorld, name} = props

const [showHomeWorld, setShowHomeWorld] = useState(false);

function handleClick(){
  setShowHomeWorld(
    !showHomeWorld
  )
}

  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    
    <div className = "character-card" onClick={handleClick}>
      <h3 className = "character-name">{name}</h3>
      {showHomeWorld && <HomeWorld homeWorldName={homeWorld}/>}
    
    </div>
  )
}

function HomeWorld(props){
 
  return (
    <p>Planet: 
    <span className = "character-planet">{props.homeWorldName}</span>
    </p>
  )
}

export default Character
