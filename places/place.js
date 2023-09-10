const placeComponent = (place) => {
  return `
  <div id="place-container>
  <label for="${place.id}" id="place-title">
  <input type="checkbox" id="${place.id}" name="${place.title}" value="" class="place-title checkbox"  />
  ${place.title}</label>
  <div id="place-text">${place.bodyText}</div>
  </div>
  `
}


export default placeComponent