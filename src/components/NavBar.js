import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ toggleColorHandler, toggleWeatherHandler, isBlack ,isFahren }) => {
    let color = isBlack ? "dark" : "light"
    return (

        <nav className={` navbar navbar-expand-lg navbar-${color} bg-${color}`}>
            <Link className="navbar-brand" to={"/"}>Herolo_Weather</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                {/* left side links */}
                <ul className="navbar-nav mr-auto">

                    <button className="btn" name="togglecolor" onClick={(e) => toggleColorHandler()}> <input
                        type="checkbox" defaultChecked={!isBlack} data-toggle="toggle" data-on="White" data-off="Black" data-onstyle="light" data-offstyle="dark" /></button>
                    <button className="btn" name="toggleweather" onClick={(e) => toggleWeatherHandler()}><input
                        type="checkbox" defaultChecked={!isFahren} data-toggle="toggle" data-on="Celsius" data-off="Fahrenheit" data-onstyle="success" data-offstyle="danger" /></button>

                </ul>
                {/* right side links*/}
                <ul className="navbar-nav ">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/favorite"}>Favorite</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;