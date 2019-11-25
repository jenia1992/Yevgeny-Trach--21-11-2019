import * as actionType from "./actionType"

export const toggleColorHandler=()=>{
    return (dispatch,getState)=>{
        dispatch({type:actionType.CHANGE_COLOR_THEME,payload:!getState().app.isBlack})
    }
}
export const toggleWeatherHandler=()=>{
    return (dispatch,getState)=>{
        dispatch({type:actionType.CHANGE_WEATHER_TYPE,payload:!getState().app.isFahren})
    }
}

