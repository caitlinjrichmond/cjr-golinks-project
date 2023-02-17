import React from "react";
import { useState } from "react";
import AllRepos from "./repos/AllRepos";
import SearchBar from "./SearchBar";

function MainDisplay() {
    const [orgName, setOrgName] = useState("")
    const [submitStatus, setSubmitStatus] = useState(false)
    const defaultOrgName = "Netflix"

    const handleChange = (event) => {
        event.preventDefault()

        setOrgName(event.target.value)
        setSubmitStatus(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitStatus(true)
    }

    function determineListing() {
        if (orgName && submitStatus) {
            return orgName
        } else {
            return defaultOrgName
        }
    }

    console.log(determineListing())





    return (
        <div>
            <h1>This Will Be The Main Page</h1>
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} orgName={orgName}/>
            <AllRepos orgName = {determineListing()} />
        </div>
    )
}

export default MainDisplay