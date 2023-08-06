import parkSearchComponent from "./parks/parkSearch.js";
import { getStateCodes } from "./parks/parkProvider.js";



getStateCodes().then(parkSearchComponent)