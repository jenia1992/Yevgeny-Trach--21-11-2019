import * as actionType from "../actions/actionType"
import { updateObject } from "./utilReducer"
const initState = {
  isFahren:false,
  isBlack:false
}
const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.CHANGE_COLOR_THEME:
      return updateObject(state, { isBlack:action.payload })
    case actionType.CHANGE_WEATHER_TYPE:
        return updateObject(state, { isFahren:action.payload })
    
    default:
      return state;
  }
}
export default appReducer