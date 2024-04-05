import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API

  const [data, setData] = useState([]);
  

  // ❗ Create effects to fetch the data and put it in state

  useEffect(() => {
   
    const people = axios.get('http://localhost:9009/api/people');
    const planets =  axios.get('http://localhost:9009/api/planets');

    Promise.all([people, planets]).then((response) => {
      const [peopleResponse, planetsResponse] = response;
      
      // map thru the people array, 
      // inside the map use .find to search thru the planets array,
      // create a new object containing data from person object and planet object,
      // take result of map and assign to state.

     const charaters = peopleResponse.data.map((person) => {
      const planet = planetsResponse.data.find(planet => person.homeworld === planet.id) 
      return {
        id: person.id,
        name: person.name,
        homeworld: {
          id: planet.id,
          name: planet.name,
        }
      }
     })
     setData(charaters)
    })
  }, []);

 if(data.lenght === 0){
  return <div>Loading..</div>
 }


  return (
    
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {data.map((charater) => {
        return (
          <Character
          name = {charater.name}
          homeWorld = {charater.homeworld.name}
          />
        );
       })}
    </div>
  
   
  )
}


export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
