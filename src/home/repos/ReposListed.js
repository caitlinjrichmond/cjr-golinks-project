import React from "react";
import RepoDisplay from "./RepoDisplay";
import "./Repos.css"



function ReposListed({ repos, orgName }) {

    let sortedRepos = repos.sort((function (a, b) {
        let keyA = a.stargazers_count
        let keyB = b.stargazers_count

        return keyB - keyA
    }))

    return (
        <div>
            {" "}
            <h6 className="repo-showing">Currently Showing Repos for {orgName}</h6>
       
            <div id="scrollbox-r">
                <ul >
                    {sortedRepos.map((repo) =>
                        <li key={repo.id} style={{ listStyleType: "none" }}>
                            <RepoDisplay repo={repo} orgName={orgName} />
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ReposListed