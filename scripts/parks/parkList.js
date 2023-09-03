// import methods from provider 
import { getPlaces, useParks, usePlaces, useParkCodes } from "./parkProvider.js"
import parkComponent from "./park.js"
import placeComponent from "../../places/place.js"


// wrapper function for list component
const parkListComponent = () => {

  // contentTarget and eventHub
  const contentTarget = document.querySelector(".park-list-container")
  const eventHub = document.querySelector(".container")

  //build button logic to add parks to database 

  eventHub.addEventListener("searchButtonClicked", (event) => {
    console.log("event listened")

    let parks = useParks()
    // console.log(parks)
    let parkCodes = useParkCodes()
    // console.log(parkCodes)
    let places = []

    async function asyncFunction2() {
      await getPlaces(parkCodes)
      places = usePlaces()
      // console.log(places)
    }

    asyncFunction2()


    render(parks)

  })

  // if (clickEvent.target.id.startsWith("add-park--")) {
  //   const [prefix, id] = clickEvent.target.id.split("--");
  //   const newPark = {
  //     id: id
  //   }
  //   savePark(newPark);
  // }

  // build render function for displaying park data 
  const render = (parks) => {
    contentTarget.innerHTML = parks.map((park) => {
      return parkComponent(park)
      // park.places.map((place) => {
      //   return placeComponent(place)
      // })
    }).join("")
  }
}

//export
export default parkListComponent