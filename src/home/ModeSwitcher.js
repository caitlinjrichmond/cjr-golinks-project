import React from "react";
import "./Main.css"

function ModeSwitcher({textColor, handleChange, darkMode}) {

    return (

        <div class="form-check form-switch">
            <input className="form-check-input shadow-none" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handleChange} />
            <label className="form-check-label" for="flexSwitchCheckDefault">
                </label>
                <span style={{color: textColor, fontSize: "12px", marginRight: "5px"}}>{darkMode ?  "Dark Mode" : "Light Mode"}</span>
        </div>

    )
}

export default ModeSwitcher