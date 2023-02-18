import React from "react";
import { useState } from "react";
import AllRepos from "./repos/AllRepos";
import SearchBar from "./SearchBar";
import "./Main.css"

function MainDisplay() {
    const [orgName, setOrgName] = useState("")
    const [data, setData] = useState("")
    const [submitStatus, setSubmitStatus] = useState(false)
    const defaultOrgName = "Netflix"

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


    return (
        <div>
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} orgName={orgName} data={data} />
            <br />
            {orgName ? <AllRepos orgName={orgName} /> : <AllRepos orgName={defaultOrgName} />}
        </div>
    )
}

export default MainDisplay