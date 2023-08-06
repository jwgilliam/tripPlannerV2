//import api key from settings
import settings from "../../.settings.js";

let parks = []
let stateCodes = []

export const useStateCodes = () => {
  return stateCodes
}

export const useParks = () => {
  return parks
}




// build methods to access data from the api, add data to the database, pull data from the api matching ids from our database? 


export const getStateCodes = () => {
  return fetch(`http://localhost:8088/states`)
    .then((response) => response.json())
    .then((response) => {
      stateCodes = response.slice()
    })
}


export const getParks = (state) => {
  let key = settings.key

  return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${state.abbreviation}&api_key=${key}`)
    .then((response) => response.json())
    .then((response) => {
      parks = response.data
    })

}