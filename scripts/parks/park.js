// import

//build park component wrapper function
const parkComponent = (park) => {
  return `
  <div class="park-card">
  <div class="park-name">${park.fullName}</div>
  <image class="park-image" src="${park.images[0].url}" width="500" height="500"> 
  <div class="park-description">${park.description}</div>
  <button class="add-park--${park.id}">Add park to trip</button>
  <details>
  <summary>Data goes under here </summary>
  <div>hereish</div>
  <input type="checkbox" id="place-check" name="places" value="">
  <label for="places-check">
  <div>test</div>
  <div>test2</div>
  </label>
  </details>
  </div>
  `
}
//export

export default parkComponent

// TODO: add back into html
//TODO: Places data: .title and .bodyText
//<image class="park-image" src="${park.images[0].url}" width="500" height="500"> 
