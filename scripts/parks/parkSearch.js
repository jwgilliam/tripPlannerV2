// import methods from provider 
import { getParks, useStateCodes, getStateCodes } from "./parkProvider.js";



// build wrapper function for search component
const parkSearchComponent = () => {
  //contentTarget and eventHub
  const contentTarget = document.querySelector(".park-search-container")
  const eventHub = document.querySelector(".container")

  //Inside of wrapper function build logic for search button
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "search_button") {
      //console.log("button check")
      getStateCodes()
      let selection = document.querySelector("#state-select").value
      // const message = new CustomEvent("searchButtonClicked", {
      //   detail: {
      //     parkSearch: query
      //   }
      // })

      const message = new CustomEvent("searchButtonClicked")
      eventHub.dispatchEvent(message)
      getParks(selection)
      console.log(selection)
      // eventHub.dispatchEvent(message)
      //console.log(message)
    }
  })

  const optionList = (states) => {
    let stateOptions = ""
    states.map(currentState => {
      stateOptions += `<option value=${currentState.abbreviation}>${currentState.name}</option>`

    })
    //console.log(states)
    return stateOptions
  }


  //build form with input and search button
  const render = () => {
    const states = useStateCodes()
    contentTarget.innerHTML = `
    <div class="search_bar_div">
    <select class="dropdown" id="state-select">
    <option value="0">Please select a state...</option>
    ${optionList((states))}
    </select>
    <button id="search_button">Search</button>
    </div>
    `
  }

  render()
}





//export 
export default parkSearchComponent