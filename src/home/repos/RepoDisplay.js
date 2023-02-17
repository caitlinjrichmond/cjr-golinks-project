import React from "react";
import { useState } from "react";
import RepoDetails from "./RepoDetails";
import Commits from "../commits/Commits"


function RepoDisplay({ repo, orgName }) {
    const [clicked, setClicked] = useState(false)

    function handleClick() {

        if (clicked) {
            setClicked(false)
        } else {
            setClicked(true)
        }
    }

    return (


        <div>

            <div className="card" onClick={handleClick}>
            <div className="card-header">
                <h1>Repo Name: {repo.name}</h1>
            </div>
                {!clicked ? <RepoDetails repo={repo} /> : <Commits repo={repo} orgName={orgName} />}
            </div>
        </div>

    );



}

export default RepoDisplay