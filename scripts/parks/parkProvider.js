//import api key from settings
import settings from "../../.settings.js";

let parks = []
let stateCodes = []
let places = []
let parkCodes = []
let key = settings.key

export const useStateCodes = () => {
  return stateCodes
}

export const useParks = () => {
  return parks
}

export const usePlaces = () => {
  // console.log(places)
  return places

}

export const setParkCodes = () => {
  let tempArray = []
  parks.map((park) => {
    tempArray.push(park.parkCode)
  })
  parkCodes = tempArray
}

export const useParkCodes = () => {
  return parkCodes
}

// build methods to access data from the api, add data to the database, pull data from the api matching ids from our database? 
export const getStateCodes = () => {
  return fetch(`http://localhost:8088/states`)
    .then((response) => response.json())
    .then((response) => {
      stateCodes = response.slice()
      //console.log(stateCodes)
    })
}

export const getParks = (state) => {

  return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=${key}`)
    .then((response) => response.json())
    .then((response) => {
      parks = response.data
      // console.log(parks)
    })
    .then(setParkCodes)
  // .then(console.log(parkCodes))


}

export const getPlaces = (parkCode) => {
  return fetch(`https://developer.nps.gov/api/v1/places?parkCode=${parkCode}&api_key=${key}`)
    .then((response) => response.json())
    .then((response) => {
      places = response.data
      // console.log(places)
    })
}

export const savePark = (park) => {
  return fetch("http://localhost:8088/parks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(park)
  })
}