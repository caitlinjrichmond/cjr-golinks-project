import React from "react";
import { useState } from "react";
import RepoDetails from "./RepoDetails";
import Commits from "../commits/Commits"
import "./Repos.css"


// Repo Display handles rendering of either
// Repo Card - contains repo details 
// Commit List 

function RepoDisplay({ darkMode, repo, orgName }) {
    const [clicked, setClicked] = useState(false);

    // Clicking "see commits" or "back to repo" will determine which component is rendered
    function handleClick() {
        if (clicked) {
            setClicked(false);
        } else {
            setClicked(true);
        };
    };

    return (

        <div className="card shadow bg-body-tertiary rounded">
            {!clicked ?
                <RepoDetails handleClick={handleClick} darkMode={darkMode} repo={repo} /> :
                <Commits handleClick={handleClick} repo={repo} orgName={orgName} />}
        </div>

    );

}

export default RepoDisplay;