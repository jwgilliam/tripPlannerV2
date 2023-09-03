const placeComponent = (place) => {
  return `
  <div id="place-container>
  <details>
  <summary>Data goes under here </summary>
  <input type="checkbox" id="place-check" name="places" value="">
  <label for="places-check">
  <div>${place.title}</div>
  <div>${place.bodyText}</div>
  </label>
  </details>
  </div>
  `
}


export default placeComponent