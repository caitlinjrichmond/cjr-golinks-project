import React from "react";
import { useState } from "react";
import AllRepos from "./repos/AllRepos";
import SearchBar from "./SearchBar";
import ModeSwitcher from "./ModeSwitcher";
import "./Main.css"

// Component holds all other components needed to render the main display dashboard
// The default display list is for Netflix repos
// The search bar allows for a user to input another company to see their list of repos
// Main display also contains the switch to change the UI from Light to Dark mode.

function MainDisplay() {
    const [orgName, setOrgName] = useState("");
    const [data, setData] = useState("");
    const [submitStatus, setSubmitStatus] = useState(false);
    const defaultOrgName = "Netflix";
    const [darkMode, setDarkMode] = useState(false);


    // functions to handle the search bar input and submit
    const handleChange = (event) => {
        event.preventDefault();
        setSubmitStatus(false);
        setData(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setOrgName(data);
        setSubmitStatus(true);
    };

    // function handles light/dark mode rendering 
    function changeMode() {
        if (darkMode) {
            setDarkMode(false);
        } else {
            setDarkMode(true);
        };
    };

    // functions handle style rendering dependent on mode indicated
    function backColorDetermine() {
        if (darkMode) {
            return "#343A40";
        } else {
            return "#F8F9FA";
        };
    };

    function textColorDetermine() {
        if (darkMode) {
            return "#FFFFFF";
        } else {
            return "#343A40";
        };
    };

    return (
        <div className="display-main" style={{ backgroundColor: backColorDetermine() }}>
            <div className="d-flex justify-content-end p-0 m-0">
                <ModeSwitcher textColor={textColorDetermine()} handleChange={changeMode} darkMode={darkMode} />
            </div>
            <SearchBar darkMode={darkMode} handleChange={handleChange} handleSubmit={handleSubmit} orgName={orgName} data={data} />
            {orgName ?
                <AllRepos background={backColorDetermine()} darkMode={darkMode} orgName={orgName} /> :
                <AllRepos background={backColorDetermine()} darkMode={darkMode} orgName={defaultOrgName} />}
        </div>
    );
};

export default MainDisplay;