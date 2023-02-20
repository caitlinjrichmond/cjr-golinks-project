import React from "react";
import "./Main.css"

// The mode switcher is a checkbox form styled to look like an "on/off" switch
// Light mode renders lighter background
// Dark mode renders a darker background with some color accent changes

function ModeSwitcher({ textColor, handleChange, darkMode }) {

    return (

        <div className="form-check form-switch">
            <input className="form-check-input shadow-none" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handleChange} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            </label>
            <span style={{ color: textColor, fontSize: "12px", marginRight: "5px" }}>{darkMode ? "Dark Mode" : "Light Mode"}</span>
        </div>

    )
};

export default ModeSwitcher;