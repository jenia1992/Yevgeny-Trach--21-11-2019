import React from 'react';

const WeatherUI = ({ currentWeather,city, fiveNext,isFahren ,onAddFav}) => {
    const dateToDay = (dateStr) => {
        // "2019-11-25T07:00:00+09:00"
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let d = new Date(dateStr);
        let dayName = days[d.getDay()];
        return dayName

    }
    const iconNumber = (num) => {
        if (num <= 9) return "0" + num
        else return num
    }
    const cToF=(celsius)=> {
        let fahr = celsius * 9 / 5 + 32;
        return Math.floor(fahr)
    }
    const isLike=()=>{
        if(localStorage.getItem("myFavWeather")===null || city==="") return false
        let favoritesArr = JSON.parse(localStorage.getItem("myFavWeather"));
        let namesArr = favoritesArr.map(name=>{
        return name.city
        })
        if(namesArr.includes(city)) return true
        
    }
    
    return (
        <div className="d-flex flex-column justify-content-between WeatherUI mt-3 ">

            <div className="d-flex justify-content-between mt-3">
                <div className="d-flex">

                    <img src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${iconNumber(currentWeather[0].WeatherIcon)}-s.png`} alt="currentWeatherIcon" />
                    <div className="d-flex flex-column justify-content-between ml-3">
                        <h3 className="">{city}</h3>
                        {isFahren?<h3>{cToF(currentWeather[0].Temperature.Metric.Value)} &#8457;</h3>:<h3>{currentWeather[0].Temperature.Metric.Value} &#8451;</h3>} 
                    </div>
                </div>

                <div className="mr-2">
                    <button style={isLike()?{color:"red"}:null} className="btn"><i className="material-icons">favorite</i></button>
    <button className="btn btn-primary" onClick={(e)=>onAddFav()} > {isLike()?"Del Favorite":"Add Favorite"}</button>
                </div>
            </div>
            {/* Five Next Days */}
            <div className="d-flex justify-content-around text-center dailyBox pb-3 pt-2">
                {fiveNext && fiveNext.map((day,i) => {
                    cToF(day.Temperature.Minimum.Value)
                    return (
                        <div key={i} className="d-flex flex-column justify-content-around mt-1">
                            <h5>{dateToDay(day.Date)}</h5>
                            {isFahren?<p>{cToF(day.Temperature.Minimum.Value)} &#8457;</p>:<p>{day.Temperature.Minimum.Value} &#8451;</p>}  
                            <img src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${iconNumber(day.Day.Icon)}-s.png`} alt="dailyIcon" />
                        </div>
                    )
                })}
            </div>


        </div>
    )
};

export default WeatherUI;
