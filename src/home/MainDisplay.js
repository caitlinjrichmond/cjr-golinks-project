import React from "react";
import { useState } from "react";
import AllRepos from "./repos/AllRepos";
import SearchBar from "./SearchBar";
import ModeSwitcher from "./ModeSwitcher";
import "./Main.css"

function MainDisplay() {
    const [orgName, setOrgName] = useState("")
    const [data, setData] = useState("")
    const [submitStatus, setSubmitStatus] = useState(false)
    const defaultOrgName = "Netflix"
  
    const [darkMode, setDarkMode] = useState(false)
   
    const handleChange = (event) => {
        event.preventDefault()
        setSubmitStatus(false)
        setData(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setOrgName(data)
        setSubmitStatus(true)
    }

    function changeMode() {
        if (darkMode) {
            setDarkMode(false)
        } else {
            setDarkMode(true)
        }
    }

    function backColorDetermine() {
        if (darkMode) {
            return "#343A40"
        } else {
            return "#F8F9FA"
        }
    }

    function textColorDetermine() {
        if (darkMode) {
            return "#FFFFFF"
        } else {
            return "#343A40"
        }
    }


    return (
        <div className="display-main" style={{backgroundColor: backColorDetermine()}}>
            <div className="d-flex justify-content-end p-0 m-0">
            <ModeSwitcher textColor={textColorDetermine()} handleChange={changeMode} darkMode={darkMode}/>
            </div>
            <SearchBar darkMode={darkMode} handleChange={handleChange} handleSubmit={handleSubmit} orgName={orgName} data={data} />
           
            {orgName ? <AllRepos background = {backColorDetermine()} darkMode={darkMode} orgName={orgName} /> : <AllRepos background = {backColorDetermine()} darkMode={darkMode} orgName={defaultOrgName} />}
        </div>
    )
}

export default MainDisplay