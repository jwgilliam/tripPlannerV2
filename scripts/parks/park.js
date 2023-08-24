// import

//build park component wrapper function
const parkComponent = (park) => {
  return `
  <div class="park-card">
  <div class="park-name">${park.fullName}</div>
 
  <div class="park-description">${park.description}</div>
  <button class="add-park--${park.id}">Add park to trip</button>
  <details>
  <summary>Data goes under here </summary>
  <div>hereish</div>
  <input type="checkbox" id="place-check" name="places" value="">
  <label for="places-check">data goes here</label>
  </details>
  </div>
  `
}
//export

export default parkComponent

// TODO: add back into html
//TODO: Places data: .title and .bodyText
//<image class="park-image" src="${park.images[0].url}" width="500" height="500"> 
