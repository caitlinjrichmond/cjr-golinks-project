import React from "react";
import RepoDisplay from "./RepoDisplay";


function ReposListed({repos, orgName}) {
    
    let sortedRepos = repos.sort((function (a,b) {
        let keyA = a.stargazers_count
        let keyB = b.stargazers_count

        return keyB - keyA
    }))

    return(
        <div>
        {" "}
        <h2>Showing repos for {orgName}</h2>
        <ul>
        {sortedRepos.map((repo) => 
            <li key = {repo.id} style = {{ listStyleType: "none"}}>
                <RepoDisplay repo = {repo} orgName={orgName} />
            </li>
        )}
        </ul>
    </div>
    )
}

export default ReposListed