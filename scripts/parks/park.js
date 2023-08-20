// import

//build park component wrapper function
const parkComponent = (park) => {
  return `
  <div class="park-card">
  <div class="park-name">${park.fullName}</div>
  <image class="park-image" src="${park.images[0].url}" width="500" height="500">
  <div class="park-description">${park.description}</div>
  <button class="add-park--${park.id}">Add park to trip</button>
  </div>
  `
}
//export

export default parkComponent