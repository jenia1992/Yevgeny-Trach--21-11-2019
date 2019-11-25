import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actionType from '../store/actions/index'
import AutoComplete from './AutoComplete';
import WeatherUI from './WeatherUI'
class Weather extends Component {
    render() {  
        return (
            <div>
                <AutoComplete 
                inputValue={this.props.userInputText} 
                onTextChange={this.props.onTextChange} 
                suggestions={this.props.suggestionsArr} 
                onSelect={this.props.onSuggestionSelect}
                />
                {this.props.currentWeather.length>=1 && 
                <WeatherUI 
                currentWeather={this.props.currentWeather} 
                city={this.props.currentPick.city} 
                fiveNext={this.props.weeklyWeather} 
                isFahren={this.props.isFahren}
                onAddFav={this.props.addOrRemoveFavorites}
                />}
            </div>
        );
    }
}
const mapStateHandler = state => {
    return {
        userInputText:state.weather.userInput,
        suggestionsArr:state.weather.suggestions,
        currentWeather:state.weather.currWeather,
        currentPick:state.weather.currPick,
        weeklyWeather:state.weather.fiveNext,
        isFahren:state.app.isFahren
    };
};
const mapStateDispatch = dispatch => {
    return {
        onTextChange:(text)=> dispatch(actionType.onTextChange(text)),
        onSuggestionSelect:(suggestion)=>dispatch(actionType.onSuggestionSelect(suggestion)),
        addOrRemoveFavorites:()=>dispatch(actionType.addOrRemoveFavorites())
    };
};
export default connect(mapStateHandler,mapStateDispatch)(Weather) 
