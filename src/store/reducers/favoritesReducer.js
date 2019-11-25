import * as actionType from "../actions/actionType"
import { updateObject } from "./utilReducer"
const initState = {
  favoritesArr:[],
  isFavorite:false
}
const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.UPDATE_FAVORITES:
      return updateObject(state, { favoritesArr:action.payload,isFavorite:true })
    
    default:
      return state;
  }
}

export default appReducer