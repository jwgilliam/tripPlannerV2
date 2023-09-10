// import methods from provider 
import { getPlaces, useParks, usePlaces, useParkCodes, savePark } from "./parkProvider.js"
import parkComponent from "./park.js"
import placeComponent from "../../places/place.js"


// wrapper function for list component
const parkListComponent = () => {

  let places = []

  // contentTarget and eventHub
  const contentTarget = document.querySelector(".park-list-container")
  const eventHub = document.querySelector(".container")

  //build button logic to add parks to database 

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("add-park--")) {
      console.log("clicky")
      const [prefix, id] = clickEvent.target.id.split("--");
      const checkboxes = document.querySelectorAll(".checkbox")
      let selectedPlaces = []
      //console.log(checkboxes.length)
      for (const place of places) {
        for (const checkbox of checkboxes) {
          if (checkbox.id === place.id && checkbox.checked === true) {
            selectedPlaces.push(checkbox.id)
          }
        }
      }
      console.log(selectedPlaces)

      const newPark = {
        parkId: id,
        placeIds: selectedPlaces

      }
      savePark(newPark);
    }
  })



  eventHub.addEventListener("searchButtonClicked", (event) => {
    // console.log("event listened")

    let parks = useParks()
    // console.log(parks)
    let parkCodes = useParkCodes()
    // console.log(parkCodes)


    async function asyncFunction2() {
      await getPlaces(parkCodes)
      places = usePlaces()
      //console.log(places)
      render(parks, places)
    }

    asyncFunction2()




  })



  // build render function for displaying park data 
  const render = (parks, places) => {
    // console.log(places)
    // places.map((place) => {
    //   console.log("checking", place.relatedParks[0].parkCode)
    // })
    contentTarget.innerHTML = parks.map((park) => {
      //console.log(typeof (park.parkCode))

      let placeArray = places.filter((place) =>
        park.parkCode === place.relatedParks[0].parkCode
      )

      //console.log(placeArray)
      return parkComponent(park, placeArray)
      // park.places.map((place) => {
      //   return placeComponent(place)
      // })
    }).join("")
  }
}

//export
export default parkListComponent