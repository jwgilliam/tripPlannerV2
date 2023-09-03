const placeComponent = (place) => {
  return `
  <div id="place-container>
  <label for="${place.id}">
  <input type="checkbox" id="${place.id}" name="${place.title}" value="" />
  ${place.title}</label>
  <div>${place.bodyText}</div>
  </div>
  `
}


export default placeComponent