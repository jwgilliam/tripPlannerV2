// import methods from provider 
import { getParks } from "./parkProvider.js"
import parkComponent from "./park.js"

// wrapper function for list component
const parkListComponent = () => {

  // contentTarget and eventHub
  const contentTarget = document.querySelector(".park-list-container")
  const eventHub = document.querySelector(".container")


  //build button logic to add parks to database 
  eventHub.addEventListener("searchButtonClicked", (event) => {
    //console.log("button check 1")
    let searchedParks
    getParks(event.detail.parkSearch).then(() => {
      searchedParks = useSearchedCards()
      //console.log(searchedCards)
      render(searchedCards)
    })


  })

  // build render function for displaying park data 
}

//export
export default parkListComponent