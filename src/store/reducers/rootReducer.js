import weatherReducer from './weatherReducer'
import appReducer from './appReducer'
import favoritesReducer from './favoritesReducer'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    app:appReducer,
    weather: weatherReducer,
    favorites:favoritesReducer
    
    
})
export default rootReducer