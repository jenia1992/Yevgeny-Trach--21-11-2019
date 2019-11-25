import * as actionType from "./actionType"
import axios from 'axios';
import {keys} from '../../keys'
 
export const initCall=()=>{
    return (dispatch,getState)=>{
        
        
        const URL_CURRENT_WEATHER=`https://dataservice.accuweather.com/currentconditions/v1/215854?apikey=${keys.API_KEY}`
            axios.get(URL_CURRENT_WEATHER).then(ress=>{
                dispatch({type:actionType.SET_CURR_WEATHER,payload:ress.data})
                dispatch({type:actionType.SET_CURR_PICK,payload:{city:"Tel Aviv",key:"215854"}}) 
            }).catch(err=>{
                dispatch({type:actionType.ERROR,payload:err})
                
            })
            const URL_WEEKLY_WEATHER=`https://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=${keys.API_KEY}&metric=true`
            axios.get(URL_WEEKLY_WEATHER).then(ress=>{
                dispatch({type:actionType.SET_WEEKLY_WEATHER,payload:ress.data.DailyForecasts})
                
            }).catch(err=>{
                dispatch({type:actionType.ERROR,payload:err})
                
            })
    }
}

export const onTextChange=(text)=>{
    return (dispatch,getState)=>{
        dispatch({type:actionType.CHANGE_USER_INPUT,payload:text})
        const URL_AUTO_COMPLETE=`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${keys.API_KEY}&q=${getState().weather.userInput}&language=en-us`
        
        axios.get(URL_AUTO_COMPLETE).then(res=>{
            dispatch({type:actionType.SET_SUGGESTIONS,payload:res.data})
            let tempPick=getState().weather.currPick.key!==""?getState().weather.currPick:{key:getState().weather.suggestions[0].Key,city:getState().weather.suggestions[0].LocalizedName}
            const URL_CURRENT_WEATHER=`https://dataservice.accuweather.com/currentconditions/v1/${tempPick.key}?apikey=${keys.API_KEY}`
            axios.get(URL_CURRENT_WEATHER).then(ress=>{
                dispatch({type:actionType.SET_CURR_WEATHER,payload:ress.data})
                dispatch({type:actionType.SET_CURR_PICK,payload:{city:res.data[0].LocalizedName,key:res.data[0].Key}}) 
            }).catch(err=>{
                dispatch({type:actionType.ERROR,payload:err})
                
            })
            const URL_WEEKLY_WEATHER=`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${tempPick.key}?apikey=${keys.API_KEY}&metric=true`
            axios.get(URL_WEEKLY_WEATHER).then(ress=>{
                dispatch({type:actionType.SET_WEEKLY_WEATHER,payload:ress.data.DailyForecasts})
                
            }).catch(err=>{
                dispatch({type:actionType.ERROR,payload:err})
                
            })
        }).catch(err=>{
            dispatch({type:actionType.ERROR,payload:err})
            
        })
        
    }
}
export const onSuggestionSelect=(suggestion)=>{
    return (dispatch,getState)=>{
        dispatch({type:actionType.CHANGE_USER_INPUT,payload:suggestion.LocalizedName})
        dispatch({type:actionType.SET_CURR_PICK,payload:{city:suggestion.LocalizedName,key:suggestion.Key}})
        const URL_CURRENT_WEATHER=`https://dataservice.accuweather.com/currentconditions/v1/${getState().weather.currPick.key}?apikey=${keys.API_KEY}`
            axios.get(URL_CURRENT_WEATHER).then(ress=>{
                dispatch({type:actionType.SET_CURR_WEATHER,payload:ress.data})
            }).catch(err=>{})
            const URL_WEEKLY_WEATHER=`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${getState().weather.currPick.key}?apikey=${keys.API_KEY}&metric=true`
            axios.get(URL_WEEKLY_WEATHER).then(ress=>{
                dispatch({type:actionType.SET_WEEKLY_WEATHER,payload:ress.data.DailyForecasts})
                
            }).catch(err=>{})
        dispatch({type:actionType.SET_SUGGESTIONS,payload:[]})
        
    }
}
