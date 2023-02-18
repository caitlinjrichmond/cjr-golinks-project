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

    function formatName(repoName) {
        let firstLetter = repoName.substring(0,1)

        return firstLetter.toUpperCase() + repoName.substring(1, repoName.length)
    }

    return (
        <div className="card" onClick={handleClick}>
            <div className="card-header" id="repo-title">
                <div className="d-flex justify-content-between">
                    <h5 className="repo-name">{formatName(repo.name)}</h5>
                    <div className="star-fork">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fillRule="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>{" "} Stars {" "}
                         <span id="counts">{repo.stargazers_count}</span> 
                         <br /> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-bezier2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h1A1.5 1.5 0 0 1 5 2.5h4.134a1 1 0 1 1 0 1h-2.01c.18.18.34.381.484.605.638.992.892 2.354.892 3.895 0 1.993.257 3.092.713 3.7.356.476.895.721 1.787.784A1.5 1.5 0 0 1 12.5 11h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5H6.866a1 1 0 1 1 0-1h1.711a2.839 2.839 0 0 1-.165-.2C7.743 11.407 7.5 10.007 7.5 8c0-1.46-.246-2.597-.733-3.355-.39-.605-.952-1-1.767-1.112A1.5 1.5 0 0 1 3.5 5h-1A1.5 1.5 0 0 1 1 3.5v-1zM2.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
                        </svg>{" "} Forks {" "}<span id="counts">{repo.forks_count}</span>
                    </div>
                </div>
            </div>
            {!clicked ? <RepoDetails repo={repo} /> : <Commits repo={repo} orgName={orgName} />}
        </div>


    );



}

export default RepoDisplay