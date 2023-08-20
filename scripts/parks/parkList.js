// import methods from provider 
import { getParks, savePark, useParks } from "./parkProvider.js"
import parkComponent from "./park.js"

// wrapper function for list component
const parkListComponent = () => {

  // contentTarget and eventHub
  const contentTarget = document.querySelector(".park-list-container")
  const eventHub = document.querySelector(".container")



  //build button logic to add parks to database 
  // eventHub.addEventListener("searchButtonClicked", (event) => {
  //   //console.log("button check 1")
  //   getParks(event.detail.parkSearch)

  // })

  eventHub.addEventListener("searchButtonClicked", (event) => {
    console.log("event listened")
    const render = (parks) => {
      contentTarget.innerHTML = parks.map((park) => {
        return parkComponent(park)
      }).join("")
    }
    let parks = useParks()
    render(parks)
    console.log(parks)
  })


  // if (clickEvent.target.id.startsWith("add-park--")) {
  //   const [prefix, id] = clickEvent.target.id.split("--");
  //   const newPark = {
  //     id: id
  //   }
  //   savePark(newPark);
  // }

  // build render function for displaying park data 


}

//export
export default parkListComponent