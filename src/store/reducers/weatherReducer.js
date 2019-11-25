import * as actionType from "../actions/actionType"
import { updateObject } from "./utilReducer"
const initState = {
  userInput: "",
  suggestions: [],
  currPick: {city:"",key:""},
  currWeather: [],
  fiveNext: [],
  err:""
}
const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.CHANGE_USER_INPUT:
      return updateObject(state, { userInput: action.payload })
    case actionType.SET_SUGGESTIONS:
      return updateObject(state, { suggestions: action.payload.length > 3 ? action.payload.slice(0, 3) : action.payload })
    case actionType.SET_CURR_PICK:
      return updateObject(state, { currPick: action.payload })
    case actionType.SET_CURR_WEATHER:
      return updateObject(state,{currWeather:action.payload})
    case actionType.SET_WEEKLY_WEATHER:
      return updateObject(state,{fiveNext:action.payload})
      case actionType.SET_WEEKLY_WEATHER:
        return updateObject(state,{err:action.payload})

    default:
      return state;
  }
}
export default weatherReducer