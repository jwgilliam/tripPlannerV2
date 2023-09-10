// import
import placeComponent from "../../places/place.js"
//build park component wrapper function
const parkComponent = (park, places) => {

  return `
  <div class="park-card">
  <div class="park-name">${park.fullName}</div>
  <image class="park-image" src="${park.images[0].url}" width="500" height="500"> 
  <div class="park-description">${park.description}</div>
  <button id="add-park--${park.id}">Add park to trip</button>
  <details id="place-dropdown">
  <summary> asdf </summary>
  
  
  <div>${places.map((place) => {
    if (places) {
      return placeComponent(place)
    }
  }).join("")
    }

</div>

  
  </details >
  </div >
  `

}
//export

export default parkComponent

// TODO: add back into html
//TODO: Places data: .title and .bodyText
//<image class="park-image" src="${park.images[0].url}" width="500" height="500"> 
