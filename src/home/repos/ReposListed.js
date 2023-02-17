import React from "react";
import RepoDisplay from "./RepoDisplay";


function ReposListed({repos}) {
    
    let sortedRepos = repos.sort((function (a,b) {
        let keyA = a.stargazers_count
        let keyB = b.stargazers_count

        return keyB - keyA
    }))

    return(
        <div>
        {" "}
        <ul>
        {sortedRepos.map((repo) => 
            <li key = {repo.id} style = {{ listStyleType: "none"}}>
                <RepoDisplay repo = {repo} />
            </li>
        )}
        </ul>
    </div>
    )
}

export default ReposListed