import * as actionType from "./actionType"
import axios from 'axios'
import {keys} from '../../keys'

export const addOrRemoveFavorites=()=>{
    if(localStorage.getItem("myFavWeather")===null) localStorage.setItem('myFavWeather', "[]");
    
    let favoritesArr = JSON.parse(localStorage.getItem("myFavWeather"));
    let namesArr = favoritesArr.map(name=>{
        return name.city
    })
    
    
    return (dispatch,getState)=>{
        if(namesArr.includes(getState().weather.currPick.city)){
            favoritesArr=favoritesArr.filter(name=>{
                return name.city!==getState().weather.currPick.city
            })
            localStorage.setItem('myFavWeather', JSON.stringify(favoritesArr));
            dispatch({type:actionType.UPDATE_FAVORITES,payload:favoritesArr})
        }
        else{
            favoritesArr.push(getState().weather.currPick)
            localStorage.setItem('myFavWeather', JSON.stringify(favoritesArr));
            dispatch({type:actionType.UPDATE_FAVORITES,payload:favoritesArr})
        }
        
    }
}







export const callCurrentWeather=(arrCallkeys)=>{
   return (dispatch,getState)=>{
    arrCallkeys.map(callKey=>{
        const URL_CURRENT_WEATHER=`https://dataservice.accuweather.com/currentconditions/v1/${callKey.key}?apikey=${keys.API_KEY}`
        axios.get(URL_CURRENT_WEATHER).then(res=>{
            dispatch({type:actionType.UPDATE_FAVORITES,payload:[...getState().favorites.favoritesArr,{...res.data[0],city:callKey.city}]})
        }).catch(err=>{
        
        })
    })
    
   }
}

