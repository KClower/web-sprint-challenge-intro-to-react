import React, {useState} from 'react'


function Character(props){ // ❗ Add the props
   // what are the pieces of data we want to be our props?
 const {name, homeWorld} = props

  // ❗ Create a state to hold whether the homeworld is rendering or not
 const [showHomeWorld, setShowHomeWorld] = useState(false)

   // ❗ Create a "toggle" click handler to show or remove the homeworld
 function handleClick() {
  // since the default of state is set false this will make the state true apon click
  setShowHomeWorld(
    !showHomeWorld
  )
 }

 return(
 // this will put the click function into effect when clicked anywhere on the card
 // name will be passed in from the parent 
 // showHomeWorld will appear from state once clicked the function HomeWorld will hold what is being rendered
 <div className="character-card" onClick={handleClick}>
 <h3 className="character-name">{name}</h3>
 {showHomeWorld && <HomeWorld homeWorldName={homeWorld}/>}
 </div>
 )
}

function HomeWorld(props){
  return(
  <p>Planet:
    <span className="character-planet">{props.homeWorldName}</span>
  </p>
  )
 }
  
 



export default Character;
