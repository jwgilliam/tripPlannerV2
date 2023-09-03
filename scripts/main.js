import parkSearchComponent from "./parks/parkSearch.js";
import { getStateCodes } from "./parks/parkProvider.js";
import parkListComponent from "./parks/parkList.js";



getStateCodes().then(parkSearchComponent)
parkListComponent()
