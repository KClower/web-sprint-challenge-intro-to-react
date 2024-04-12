import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'
  

 // this is all JS  

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API using useState.
  const [data, setData] = useState([]);

  

    // ❗ Create effects to fetch the data and put it in state

    // useEffect is how we fetch data from somewhere else outside the application.
    // axios.get will hold the box(es) of data until it is unpacked.
    // give the box(es) of data a new variable(s) to pass.
  useEffect(() => {
    const people = axios.get('http://localhost:9009/api/people');
    const planets = axios.get('http://localhost:9009/api/planets');

    // the .then function is how we unpack the box, using a response and a callback.
    // use the new variable(s)
    // if more than one axios call use Promise.all()
    // if only one axios call just use newVariableName.then 
    Promise.all([people, planets]).then((response) => {
      // the response is how we search through the data to locate the specific data we require, in the console.
      // use dot notation to reach the next level of data if needed.
      // console.log the response to achive this.
     console.log("these are the people", response)
     console.log("these are the planets", response)
      // give the response(s) a new variable(s) to pass.
     const [peopleResponse, planetResponse] = response;
   
      // map thru the new people array.
      // provide the new array a name.
     const characters = peopleResponse.data.map((person) => {
      // inside the map use .find to search thru the new planets array to match the homeworld and planet. 
     const planet = planetResponse.data.find(planet => person.homeworld === planet.id)
      // create a new object containing data that we need from person object and planet object,
     return{
      id: person.id,
      name: person.name,
      homeworld: {
        id: planet.id,
        name: planet.name,      
      }
    }
    })
     // take result of map and assign to state.
     setData(characters)
    })
  }, []);

         //     NOW IS TIME TO BUILD THE CHARACTER !!!

      // after the return we are in REACT.
 
      return (
       <div>
        <h2>Star Wars Characters</h2>
        <p>See the README of the project for instructions on completing this challenge</p>
        {data.map((character) => {
          return (
            <Character
            name = {character.name}
            homeWorld = {character.homeworld.name}
            />
          )
        })}
        
       </div>
      )
}


export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
