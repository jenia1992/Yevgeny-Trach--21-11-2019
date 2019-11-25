import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionType from '../store/actions/index'
class Favorites extends Component {
    state = {
        favoritesLocalStorage: [],
        isLoaded: false,
        message: ""
    }
    componentDidMount() {
        if (localStorage.getItem("myFavWeather") === null) this.setState({ message: "add some favorites by the button `add too favorite` at home page" })
        else {
            this.setState({ favoritesLocalStorage: JSON.parse(localStorage.getItem("myFavWeather")) }, () => {
                this.props.callCurrentWeather(this.state.favoritesLocalStorage)
                this.setState({ isLoaded: true })
            })
        }
    }
    iconNumber = (num) => {
        if (num <= 9) return "0" + num
        else return num
    }
    cToF = (celsius) => {
        let fahr = celsius * 9 / 5 + 32;
        return Math.floor(fahr)
    }
    render() {
        
        return (
            <div style={{ height: "35vh" }} className="row d-flex justify-content-around text-center dailyBox mt-5">
                {this.state.message !== "" ? <p className="card-body">{this.state.message}</p> : null}

                {this.state.isLoaded && this.props.favoritesArr.map((fav, i) => {
                    return (
                        <div key={"fav" + i} className="d-flex flex-column justify-content-around mt-1">
                            <h5>{fav.city}</h5>
                            {this.props.isFahren ? <p>{this.cToF(fav.Temperature.Metric.Value)} &#8457;</p> : <p>{fav.Temperature.Metric.Value} &#8451;</p>}
                            <img src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${this.iconNumber(fav.WeatherIcon)}-s.png`} alt="dailyIcon" />
                        </div>
                    )
                })}


            </div>
        );
    }
}
const mapStateHandler = state => {
    return {
        favoritesArr: state.favorites.favoritesArr,
        isFavLoad: state.favorites.isFavorite,
        isFahren: state.app.isFahren
    };
};
const mapStateDispatch = dispatch => {
    return {
        callCurrentWeather: (arrCallkeys) => dispatch(actionType.callCurrentWeather(arrCallkeys)),
    };
};
export default connect(mapStateHandler, mapStateDispatch)(Favorites) 
