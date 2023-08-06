// import methods from provider 
import { getParks, getStateCodes, useStateCodes } from "./parkProvider.js";



// build wrapper function for search component
const parkSearchComponent = () => {
  //contentTarget and eventHub
  const contentTarget = document.querySelector(".park-search-container")
  const eventHub = document.querySelector(".container")

  //Inside of wrapper function build logic for search button
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "search_button") {
      //console.log("button check")
      const query = document.querySelector("#search_input").value
      const message = new CustomEvent("searchButtonClicked", {
        detail: {
          parkSearch: query
        }
      })

      eventHub.dispatchEvent(message)
      //console.log(message)
    }
  })


  //build form with input and search button
  const render = () => {
    contentTarget.innerHTML = `
    <div class="search_bar_div">
    <input type="text" isRequired id="search_input"/>
    <button id="search_button">Search</button>
    </div>
    `
  }

  render()
}





//export 
export default parkSearchComponent